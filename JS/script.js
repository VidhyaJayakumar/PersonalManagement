function result(){
var x=document.getElementById("name").value;
if(x==="Vidhya"){
    window.location.href="file:///Users/apple/Documents/Vidhya/PersonalManagement/vidhyasite.html"
}
};
var database=[{
    username:"Vidhya",
    passwd:"Asia101"
},
{
username:"Jayakumar",
    passwd:"India101"
},
{
    username:"Sriya",
    passwd:""

},
{
    username:"Saahas",
    passwd:""

}
]

function logIn(user,passwd){
    var username=prompt("Enter the username");
    var passwd=prompt("Enter the password");
 
    if(username===database[0].username && 
        passwd===database[0].passwd){
            window.location.href="file:///Users/apple/Documents/Vidhya/PersonalManagement/vidhyasite.html"
        }};
