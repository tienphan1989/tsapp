Problems:
-when browser is shrunk sideways, the nav icons overlap the title
-vaccine patches but does not auto populate after. Maybe redirect?
-snackbar goes too fast

## Capstone: Health Check

Purpose: Provide users with a app that aims to educate and provides direct feedback to the user regarding their blood sugar level/blood pressure/vaccination status. Identify {good vs. bad elements of diet or lifestyle}. Can intake user input and let user know if vaccinations are imcomplete or missing according to guidelines.  Users can also request dietary practices and bookmark diets.  Can see data displayed in a easy to understand graph that highlights ideal and out of range values.

## Color Palette
P: #81d4fa
P — Light: #b6ffff
P — Dark: #4ba3c7
S: #ff80ab
S — Light: #ffb2dd
S — Dark: #c94f7c
secondaryRed: #f50057

## Fonts
raleway (BIG fonts)
Work Sans (small fonts)

## User Stories
<!-- -As a user, I want to have the landing page display on load
-As a user, I want to be able to sign up and login
-As a user, I want to be able to enter a single sugar reading into the input field and receive immediate feedback based off value
-As a user, I want to be able to enter a single blood pressure reading into the input field and receive immediate feedback based off value
-As a user, I want to be able to submit a form and see if vaccinations are complete/incomplete -->
-As a user, I would like to login, go to user homepage and see graphical data showing previous inputs
-As a user, I would like to click more resources and have dietary and/or physical education resources to consume
-As a user, I would like to create a goals section and check off those when accomplished

## Stretch Goals
-mobile friendly
-testimonials

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

        ├── Components
        │   └── Header
        │   |   ├── Homepage icon
        │   |   ├── Learn More/Resources/About Us/Subscribe
        │   |   ├── Contact/Help Page
        │   |   ├── User Profile
        │   |   |	└── My Profile
    	      |	  |	|__Check Progress
    	      |	  |	|__Logout
        │   Main Container
        │       ├── TopDesigndiv(Hero image and intro div, tagline div)
        │       ├── MiddleDiv
        │       	├── 1st Modal(Sugar)
        │       	├── 2nd Modal(BP)
        │       	├── 3rd Modal(Vaccine Form)
        │       	└── BottomDivDesign
        ├─  |___Additional Info Div
    	|	|	  |___InformationDiv(Science)
    		|	  |___InformationDiv(How to Change)
            ├── Footer
            	  └── Privacy Policy & Terms/Conditions/ Copyright 2020 HealthCheckr
                └── Made By (Tien Phan) Github linkedinlink


1- Start postrgres server -> /home/linuxbrew/.linuxbrew/Cellar/postgresql/12.4/bin/pg_ctl -D /usr/local/pgsql/data -l logfile start
stop to end server
2- pg_ctl -D /home/linuxbrew/.linuxbrew/var/postgres start
3-a)sudo service postgresql start
b)sudo /etc/init.d/postgresql restart




