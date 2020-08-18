## Capstone title(s): HealthCheckr/Sweet Care/SmartSugr/Health Smart/Health Screener

Purpose: Provide users with an app that provides feedback(or advice?) regarding their sugar level(s)/blood pressure reading(s) in a supportive manner to promote good health habits and better self-knowledge of self endocrine response in relation to variables {good vs. bad elements of diet or lifestyle}. (Can intake user input and let user know if vaccinations are imcomplete or missing according to guidelines.)

## Color Palette
main color => #78CAE8
{
CuriousBlue: #22ADE2,
AquaSpring: #EDFAFA,
Seagull: #78CAE8,
PictonBlue: #50C4EA,
Botticelli: #C8D7E0,
#57797f
#4fc
}

## Fonts
Work Sans
Metropolis
IBM Plex Sans

## Todos
-upon clicking login, open login form in center page
-when clicking start button in middle, it navigates to 3 panel test 

## User Stories
-As a user, I want to have the landing page display on load
-As a user, I want to be able to enter a single sugar reading into the input field and receive immediate feedback based off value
-As a user, I want to be able to enter a single blood pressure reading into the input field and receive immediate feedback based off value
-As a user, I want to be able to sign up and login
-(As a user, I want to be able to submit a form and see if vaccinations are complete/incomplete)

## Stretch Goals
-mobile friendly
-body-text at least 16-20 pixels height
-Testimonials

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
## ROUTER INFO
import { Link } from "react-router-dom"
<Link to="/component">Click to go to homepage</Link> 
<Switch>
<Route path="/Footer" render={(routeProps) => <Footer componentName={this.state.componentName} {...}/>}/>
        <Route path="/Header" component={Header}/>
        <Route path="/TitleBar" component={TitleBar}/>
        <Route path="/HeroContainer" component={HeroContainer}/>
        <Route path="/MainContainer" component={MainContainer}/>
        <Route path="/InformationContainer" component={InformationContainer}/>
        <Route path="/Footer" component={Footer}/>
</Switch>

<Route exact path="/" component={Home} />
<Route exact path="/contact" component={Contact} />
<Route exact path="/login" component={Login} />
<Route exact path="/resources" component={Resources} />
<Route exact path="/bpindex" component={BloodPressure} />
<Route exact path="/sugarindex" component={Sugar} />
<Route exact path="/vaccine" component={Vaccine} /> 

