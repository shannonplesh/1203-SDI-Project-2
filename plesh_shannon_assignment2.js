// Author: Shannon Plesh
// Assignment 2 for 1203
// The purpose of this program is to determine if the person meets the criteria needed to buy a hot property.
// Set variables
credit = 1000000000000000, propertyTimer= 20, canBarrowMoney = true, money = 10000000, beachFrontMiami9 = "Hot property",beachFrontMiami8 = "Hot property",beachFrontMiami7 = "Normal property", person = "Serene", personP = "Serene\'s", propertiesToCheck = [beachFrontMiami9, beachFrontMiami8, beachFrontMiami7,];
var hotProperties = ["beachFrontMiami8", "beachFrontMiami7", "beachFrontMiami9",]
// Procedure
// The code below introduces us to the person and the intent of the story.
console.log(person + " wants to buy a hot property in Miami Beach.");
console.log("The hot properties at the moment are " + hotProperties );
howManyProperties();
console.log(person + " is looking at the first property on her list which is listed as a " + propertiesToCheck[0] + ".");




// The number function below is used to check to see if there is enough money to buy this property.
// This function will take the person string and concatenate it with a string of text that outputs the correct responce. In this example the property costs 1000000.	
function checkMoney() { if (money < 1000000) {console.log(person + " dose not have enough money to buy this property.");
	
} else {if (money > 1000000) {console.log(person + " has enough money to buy "+ hotProperties[0] );
}}
}
// Here is where the function checkMoney is called.
checkMoney();

// the string function below is used to determine if the property matches the string "Hot property!"
function checkHot() { if (beachFrontMiami9 === "Hot property") { console.log("Beach front property #9 is a hot property!");
	
} else {console.log("This is not a hot property.");
	
}
	
}


// The array function below is used to count the properties that the person wants to visit and output the total number. Looking ahead, I'd like to turn the items in this array into objects that hold information pertaining to the property. 

function howManyProperties() {console.log(person + " has " + propertiesToCheck.length + " hot properties that she is interested in looking at today.");
	
}

// number function = property timmer with wile loop.
// this function will check the ammout of time on the propertyTimer and reduce the number by 1 iteration every time the wile loop runs. 
function checkDay() { while (propertyTimer > 0) {console.log("Number of minutes " + hotProperties[0] + " will be a hot property = " + propertyTimer);
	propertyTimer--}
	
	beachFrontMiami8 === "Normal Property"
	
}
checkDay();	

// for loop
// this loop will iterat the value of the property until it reaches  10 grand.
function value() {
var i=0;
for (i=0;i<=10;i++) {console.log("the return value is $" + i + " grand.");
if (i===10) {console.log("This is the highest value for this property. " + person + " must see if she can get a loan for it before it's sold.");
	
}
}

	
}
value();

// This boolean function checkForSale will check to see if the person is approved for the loan and output the correct responce.
function checkForSale() {	if (canBarrowMoney === true) {console.log(person + " is approved for the loan!");
return status === true;
	}else {
	console.log(person + " is not approved for the loan.");
	}
	return status === false;
}
// Below is where the boolean function checkForSale is called.
checkForSale();

// credit credit function.
function checkCredit() {
if (credit > 10000000000) { console.log(personP + " got great credit!");

}
	
}
checkCredit();

function teee() { if (beachFrontMiami8 === "Hot Property") { console.log("string");
	
}
	
}

teee();