const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios")

inquirer.prompt([
  {
    type: "input",
    message: "What is your Github name?",
    name: "name"
  },
  {
    type: "list",
    message: "What is your favorite color? ",
    choices:["Blue","Red","White","Black"],
    name: "preferredComm"
  }
]).then(function(response){
axios.get("https://api.github.com/users/" + response.name )
   .then(function(axiosResponse){
       var 
       fs.writeFile(response.name + ".md", )
       console.log(axiosResponse)
   })
})
