var database=[
{
	username:"peter",
	password:"chipx1994"
}
];


var newsfeed=[
{
	username:"peter",
	feed:"i hate it here"

},
{
	username:"okon",
	feed:"razzmatazz"
}
];

var typeusername=prompt("what is your username?");
var typepassword=prompt("what is your password");


function signin(user,pass){
	if (user===database[0].username &&
		pass===database[0].password){
		console.log(newsfeed);
	}else{
		alert("wrong username or password");
	}
}

signin(typeusername,typepassword)