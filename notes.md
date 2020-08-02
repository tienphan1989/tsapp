## Capstone title(s):
Sweet Care/SmartSugr/Health Smart/

Purpose: Provide users with an app that provides feedback(or advice?) regarding their sugar level(s) in a supportive manner to promote good health habits and better self-knowledge of  self endocrine response in relation to variables (good vs. bad elements of diet or lifestyle).

## Todos
-C&Pasted primitive.css (SASS) into index.css; consider alternatives
-See how to config w/ Rails backend

## User Stories
-As a user, I want to have the landing page display on load
-As a user, I want to be able to enter a single sugar reading into the input field and receive immediate feedback based off value
-As a user, I want to be able to sign up and login

## Models/Associations
Users: {
	ID:
    Name/UserName:
	BMI:
	DOB:
	age:
	Gender:
	Diabetic? (boolean default = false)
	Email:
}
User has many Test_results
User has many Sugar_levels, through: Test_results

Test_results: {
	ID:
    User_ID:
	Test_result_value:
	Time:
	Date:
}
Test_result belongs to User
Test_result belongs to Sugar_Level

Sugar_levels: {
	ID:
	User_ID:
	Sugar_value:
	Time:
	Date:
}
Sugar_Level has many Test_results
Sugar_Level has many Users, through: Test_results
