const database = require("./dbConnection");

function getIndustry(res,userId){
    const getIndustryQuery = "SELECT industry FROM users WHERE userKey = ?";
    database.query(getIndustryQuery, [userId], function(error,results){
        if(error){
            console.log(error);
            if(res != undefined){
                res.status(500).json({error: "An error occurred while fetching the user's industry"});
            }
            else{
                return undefined;
            }
        }
        else{
            const industry = results[0].industry;
            if(res != undefined){
                if(industry == null){
                    res.status(400).json({error:"User does not have industry in their profile."});
                }
                else{
                    res.status(200).json({industry: industry});
                }
            }
            else{
                return industry;
            }
        }
    })
}

module.exports = {getIndustry}