const database = require("./dbConnection");

var user = {
    id: 'sample'
}
var checkUserExistsQuery = "SELECT * FROM users WHERE userkey=?";
database.query(checkUserExistsQuery, [user.id], function(err,results, fields){
    if(err) throw error;
    else{
        console.log(results);
    }
})