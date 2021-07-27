// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ერთ მთელ რიცხვს და 
// დააბრუნებს true -ს თუ რიცხვი არის ლუწი ან false -ს თუ რიცხვი არის კენტი.

function isEven(num) {
	if(num % 2 == 0) return true
	else return false
} 

console.log("Your number is even - " + isEven(5))
console.log("Your number is even - " + isEven(4))

// 2. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს ორ რიცხვს - 
// მართკუთხედის გვერდების ზომებს და დააბრუნებს მართკუთხედის ფართობს.

function areaOfRectangle(side1, side2) {
	return side1 * side2
}

console.log("Your rectangle area is - " + areaOfRectangle(3, 2))


// 3. დაწერეთ ფუქცია, რომელიც პარამეტრად მიიღებს ერთ რიცხვს - 
// კვადრატის გვერდის სიგრძეს და დააბრუნებს კვადრატის ფართობს. 
// ფართობის გამოსათვლელად გამოიყენეთ #2 პუნქტში აღწერილი ფუნქცია.

function areaOfSquare(side) { 
	return areaOfRectangle(side, side)
}

console.log("Your square area is - " + areaOfSquare(5))


// 4. დაწერეთ ფუნქცია, რომელიც Math.random() ფუნქციის გამოყენებით 
// დააგენერირებს და დააბრუნებს 0-დან 100-მდე შემთხვევით რიცხვს.

function randomNum() {
	let randomNumber = Math.random() * 100
	let roundedRandomNum = Math.round(randomNumber)

	return roundedRandomNum
}

console.log("Random number between (0 - 100): " + randomNum())


// 5. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ რიცხვს პარამეტრად (a, b)  
// და დააბრუნებს შემთხვევით რიცხვს a -დან b -მდე შუალედში.

function randomNumInRange(a, b) {
	let randomNumber = Math.random() * (b - a) + a
	let roundedRandomNum = Math.floor(randomNumber)

	return roundedRandomNum
}

console.log("Random number between (a - b):  " + randomNumInRange(2, 18))


// 6. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს: 
// "boy" ან "girl" და დააბრუნებს 10 გოგოს ან ბიჭის სახელიდან 
// ერთ-ერთს შემთხვევითად. (სახელები ჩაწერილი იქნება მასივში 
// ამავე ფუნქციაში. კარგი იქნება გამოიყენოთ #5 პუნქტში დაწერილი ფუნქცია).

function getRandomName(gender) {
	let girlNames = [	
				"ana", 
				"anamaria", 
				"mari", 
				"salome", 
				"elene", 
				"tiko", 
				"gvanca", 
				"tina",
				"lali",
				"anano"
	]
	let boyNames = [	
				"sandro", 
				"nika", 
				"lasha", 
				"giorgi", 
				"erekle", 
				"dato", 
				"iakobi", 
				"demetre",
				"ilia",
				"beka"
	]

	let randomNameIndex = randomNumInRange(0, 10)

	if (gender == "girl") return girlNames[randomNameIndex]
	else return boyNames[randomNameIndex]
}


console.log("Random name is:  " + getRandomName("girl"))
console.log("Random name is:  " + getRandomName("boy"))


// 7. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს წელს (მაგალითად 2021) და დააბრუნებს true-ს თუ ეს წელი არის ნაკიანი ან false-ს წინააღმდეგ შემთხვევაში.

function leapYearOrNot(year) {
	if (year % 4 == 0) return true
	else return false
}

console.log("This year is Leap - "  + leapYearOrNot(2020))
console.log("This year is Leap - "  + leapYearOrNot(2021))


// 8. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს მართკუთხა პარალელეპიპედის გვერდების ზომებს და სიმაღლეს (a, b, c) და დააბრუნებს ფიგურის მოცულობას. მოცულობის გამოსათვლელად დაიხმარეთ #2 პუნქტში დაწერილი ფუნქცია.

function volumeOfFigure(a, b, c) {
	return areaOfRectangle(a, b) * c
}

console.log("Volume of a rectangular parallelepiped is - " + volumeOfFigure(2, 3, 5))


// 9* დაწერეთ რეკურსიული ფუნქცია, რომელიც პარამეტრად 
// მიიღებს ორ რიცხვს (a, b), რეკურსიის გამოყენებით შეამოწმებს 
// ყველა რიცხვს a დან b მდე და დალოგავს მხოლოდ კენტ რიცხვებს. 
// (გამოიყენეთ #1 პუნქტში დაწერილი ფუნქცია)
console.log("------------------------")

function getOddNumberByRecursive(a, b) {
	a = a + 1;

  	if(a <= b) {

  		if (!isEven(a)) {
  			console.log(a)
	  		return getOddNumberByRecursive(a, b);

  		}else return getOddNumberByRecursive(a, b);

  	}else return "End of recursive"
  	
}
console.log(getOddNumberByRecursive(2, 20))


// 10* დაწერეთ რეკურსიული ფუნქცია, რომელიც პარამეტრებად 
// მიიღებს ორ რიცხვს (x, y) და დააბრუნებს x ხარისხად y -ს. 
// მაგალითად თუ ფუნქციამ მიიღო პარამეტრად 2 და 5 უნდა 
// დააბრუნოს 2 -ს მეხუთე ხარისხი ანუ 32. გამოიყენეთ რეკურსია.

function powByRecursive(x, y) {  

	if (y != 0)  
		return x * powByRecursive(x, y - 1);                
	    
	else
	    return 1;
}

console.log("pow is - " + powByRecursive(2, 6))