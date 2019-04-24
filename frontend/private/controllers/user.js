const database = require("./dbConnection");

function getIndustry(res,userId){
    const getIndustryQuery = "SELECT industry FROM users WHERE userKey = ?";
    database.query(getIndustryQuery, [userId], function(error,results){
        if(error){
            console.log(error);
            if(res != undefined){
                res.status(500).json("An error occurred while fetching the user's industry");
            }
            else{
                return undefined;
            }
        }
        else{
            const industry = results[0].industry;
            if(res != undefined){
                if(industry == null){
                    res.status(400).json("You don't have an industry in your profile.");
                }
                else{
                    res.status(200).json({industry: industry});
                }
            }
            else{
                console.log("The industry is " + industry);
                return industry;
            }
        }
    })
}

function updateIndustry(res,userId, industry){
    const updateIndustryQuery = "UPDATE users SET industry = ? WHERE userKey = ?";
    console.log("Updating user id " + userId + " industry to " + industry);
    database.query(updateIndustryQuery, [industry, userId], function(error,results){
        if(error){
            console.log(error);
            res.status(500).json("An error occurred while updating the user's industry");
        }
        else{
            res.status(200).json({status: "Update successful"});
        }
    })
}

function updateResumeGrade(res,userId, resumegrade){
    const updateResumeGradeQuery = "UPDATE users SET resumeGrade = ? WHERE userKey = ?";
    console.log("Updating user id " + userId + " resumeGrade to " + resumegrade);
    database.query(updateResumeGradeQuery, [resumegrade, userId], function(error,results){
        if(error){
            console.log(error);
            res.status(500).json("An error occurred while posting the user's resume grade");
        }
        else{
            res.status(200).json({status: "resume grade uploaded"});
        }
    })
}


module.exports = {getIndustry, updateIndustry, updateResumeGrade}
