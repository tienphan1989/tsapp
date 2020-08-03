## Capstone title(s):
HealthCheckr/Sweet Care/SmartSugr/Health Smart/My Health Status

Purpose: Provide users with an app that provides feedback(or advice?) regarding their sugar level(s)/blood pressure reading(s) in a supportive manner to promote good health habits and better self-knowledge of self endocrine response in relation to variables {good vs. bad elements of diet or lifestyle}.  (Can intake user input and let user know if vaccinations are imcomplete or missing according to guidelines.) 

## Todos
-Finish vaccine models/migration &  start all associations
-C&Pasted primitive.css (SASS) into index.css; consider alternatives
-Client.js file has fetch skeleton for GET request from rails api; need to update endpoints

## User Stories
-As a user, I want to have the landing page display on load
-As a user, I want to be able to enter a single sugar reading into the input field and receive immediate feedback based off value
-As a user, I want to be able to enter a single blood pressure reading into the input field and receive immediate feedback based off value
-As a user, I want to be able to sign up and login
-(As a user, I want to be able to submit a form and see if vaccinations are complete/incomplete)

## Models/Associations
Users: {
    Name/UserName: string
	BMI: integer
	DOB: integer
	Age: integer
	Gender: string
	Diabetic? (boolean default = false)
	Email: string
}
User has many sugar_screenings
User has many bp_screenings
User has many Vaccination_records
User has many vaccines, through Vaccination_records

Sugar_screenings: {
    User_ID: integer
	result: integer
	Time: dateTime
	Date: dateTime
} 
Sugar_screening belongs to User

Bp_screenings: {
    User_ID: integer
	result: integer
	Time: dateTime
	Date: dateTime
} 
Bp_screening belongs to User

Vaccines: {
	User_ID: integer
	Vaccination_record_ID: integer
	Is_upToDate? (boolean default = ?)
}
Vaccines has many Vaccination_records
Vaccines has many users, through Vaccination_records

Vaccination_record: {
	User_ID: integer
	Vaccine_ID: integer
	date:dateTime
}
belongs to user
belongs to vaccine