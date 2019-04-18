const database = require("./dbConnection");

var user = {
    id: 'sample',
    localizedLastName: "DeSilva",
    localizedFirstName: "Manuja"
};
var checkUserExistsQuery = "SELECT * FROM users WHERE userkey=?";
/*
database.query(checkUserExistsQuery, [user.id], function(err,results, fields){
    if(err) throw error;
    else{
        console.log(results);
    }
})
*/

var insertUserQuery = "INSERT INTO users(userKey,firstName,lastName) VALUES(?,?,?)";
database.query(insertUserQuery, [user.id,user.localizedFirstName, user.localizedLastName], function(err,results){
    if(err){
        throw error;
    }
    else{
        console.log(results);
    }
})
