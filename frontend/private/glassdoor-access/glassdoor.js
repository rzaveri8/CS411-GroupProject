/*
Glassdoor API Access & Cache
*/

const database = require("../controllers/dbConnection");
const request = require("request");

function cacheResult(company,position,data){
    const insertQuery = "INSERT INTO glassdoorCache(company,position,interviewData) VALUES(?,?,?)";
    database.query(insertQuery,[company,position,data], function(error,results,fields){
        if(error){
            console.log(error);
        }
        else{
            console.log("Cached result");
        }
    })
}

function getResultFromDB(req,res,company,position){
    //console.log("$" + company + "$");
    //console.log("$" + position + "$");
    const searchQuery = "SELECT interviewData FROM glassdoorCache WHERE company = ? AND position = ? ";
    database.query(searchQuery, [company, position], function(error,results,fields){
        if(error){
            console.log(error);
        }
        else{
            if(results.length > 0 ){
                console.log("Fetched result from database");
                var data = results[0].interviewData;
                returnResult(req,res,data);
                return;
            }
            else{
                getResultFromAPI(req,res,company,position);
            }
        }
    })
}

/*
If the request result isn't cached in the database, fetch it from the API.
*/
function getResultFromAPI(req,res,company,position){

    const glassdoorEndpoint = "http://52.14.17.113:8082/api/glassdoor/";
    const requestUrl = glassdoorEndpoint + company + "/" + position;
    console.log("The requested url is: ");
    console.log(requestUrl);
    //start the request
    request.get(requestUrl,function(error,response,body){
        if(error){
            console.log("Request failed");
            res.status(500).json({error: "Server error"});
            return;
        }
        else{
            data = JSON.parse(body);
            if(data.error){
                /* Data not available */
                console.log("Requested from API but data was not available");
                res.status(404).json({error: data.error});
                return;
            }
            else{
                console.log("Fetched result from API");
                returnResult(req,res,body); //send the request back
                cacheResult(company,position,body); //cache the result
                return;
            }
        }
    });
}


/*
Calculate the job capture likelihood and return that and glassdoor data to user
*/
function returnResult(req,res,data){
    data = JSON.parse(data);
    if(req.user.resumeGrade){
        /* Calculate the job capture likelihood */
        //console.log("Calculating likelihood");
        const scores = {"A":0, "B": -1, "C": -2, "D": -3, "F": -4};
        const rawResumeScore = scores[req.user.resumeGrade];
        const scaledResumeScore = rawResumeScore * 0.5;
        const rawInterviewScore = parseInt(data.difficulty);
        const scaledInterviewScore = rawInterviewScore * -0.5;
        const jobCaptureLikelihood = 5 + scaledResumeScore + scaledInterviewScore;
        const jobCaptureLikelihoodPercentage = jobCaptureLikelihood / 5;
        data["likelihood"] = jobCaptureLikelihoodPercentage * 100;
        res.status(200).json(data);
    }
    else{
    /* 
    If the user has not parsed their resume yet, then we cannot provide them with a job capture likelihood, 
    so we can just send back the Glassdoor data itself 
    */ 
   return res.status(200).json(data);
    }
}

/*
Attempt to get result from cache first;
If it doesn't exist in the cache, only then perform a request to the API.
Finally, cache the result. 
*/
function getResult(req,res,company,position){
    getResultFromDB(req,res,company,position);
}



module.exports = {getResult};