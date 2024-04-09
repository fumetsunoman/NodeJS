const lastName = "Chen";

function sayMyName(){
	console.log("Ken");
}

function sayMayCountry(){
	console.log("Taiwan");
}

module.exports = {
	sayMyName,sayMayCountry ,lastName
} //推薦的寫法

// exports.sayMyName = sayMyName;
// exports.sayMayCountry = sayMayCountry;