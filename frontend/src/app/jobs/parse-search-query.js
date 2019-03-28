/*
Parse the company and position inputs so they are ready to be fed into the Indeed API
*/

/*
replaces spaces with '-' and converts string to lowercase
ex.) "morgan stanley" ---> "morgan-stanley"
*/

function parseCompany(company_string){
  var raw = company_string;
  var parsed = raw.replace(/\s+/g, '-').toLowerCase();

  //console.log(parsed);
  return parsed;
}

/*
split string
capitalize each string in the array
add each string back to the master string
add + in between strings

ex.) "product manager" --> "Product+Manager"
*/
function parsePosition(position_string){
  var raw = position_string;
  var string_contents = raw.split(" ");

  //check if only one word passed into position
  if(string_contents.length == 1){ //capitalize word and return
      var parsed = raw.charAt(0).toUpperCase() + raw.slice(1);
      //extract the first character of this string and "capitalize" it, and then leave the rest of the string as is and append it to a new string
      //console.log(position_string);
      return parsed;
  }

  //else run loop to capitalize each word
  for(var i=0;i<string_contents.length;i++){
    var raw_curr_string = string_contents[i];
    var parsed_string = raw_curr_string.charAt(0).toUpperCase() + raw_curr_string.slice(1);
    string_contents[i] = parsed_string;

  }

  //add '+' seperator in between strings
  var parsed = string_contents.join("+");
  //console.log(parsed);
  return parsed;
}

/*
Create the URL that we perform the Indeed GET request with
*/
function buildUrl(raw_company_string, raw_position_string){
  var company = parseCompany(raw_company_string);
  var position = parsePosition(raw_position_string);
  var baseUrl = "http://52.14.17.113:8080/api/all/";
  var fullUrl = baseUrl + company + "/" + position;
  return fullUrl;
}
