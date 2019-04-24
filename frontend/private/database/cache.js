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

function getResultFromDB(res,company,position){
    //console.log("$" + company + "$");
    //console.log("$" + position + "$");
    const searchQuery = "SELECT interviewData FROM glassdoorCache WHERE company = ? AND position = ? ";
    database.query(searchQuery, [company, position], function(error,results,fields){
        if(error){
            console.log(error);
        }
        else{
            if(results.length > 0 ){
                var data = results[0].interviewData;
                res.status(200).json(JSON.parse(data));
                console.log("Fetched result from database");
                return;
            }
            else{
                getResultFromAPI(res,company,position);
            }
        }
    })
}

/*
If the request result isn't cached in the database, fetch it from the API.
*/
function getResultFromAPI(res,company,position){

    const glassdoorEndpoint = "http://52.14.17.113:8082/api/glassdoor/";
    const requestUrl = glassdoorEndpoint + company + "/" + position;
    
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
                res.status(200).json(data); //send the request back
                cacheResult(company,position,body); //cache the result
                return;
            }
        }
    });
}

/*
Attempt to get result from cache first;
If it doesn't exist in the cache, only then perform a request to the API.
Finally, cache the result. 
*/
function getResult(res,company,position){
    getResultFromDB(res,company,position);
}



module.exports = {getResult};