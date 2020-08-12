## Capstone title(s):

HealthCheckr/Sweet Care/SmartSugr/Health Smart/My Health Status

Purpose: Provide users with an app that provides feedback(or advice?) regarding their sugar level(s)/blood pressure reading(s) in a supportive manner to promote good health habits and better self-knowledge of self endocrine response in relation to variables {good vs. bad elements of diet or lifestyle}. (Can intake user input and let user know if vaccinations are imcomplete or missing according to guidelines.)

## Todos

-Do React components overlay Header/Navbar/3 Column or 3 row center container
-Client.js file has fetch skeleton for GET request from rails api; need to update endpoints

## User Stories

-As a user, I want to have the landing page display on load
-As a user, I want to be able to enter a single sugar reading into the input field and receive immediate feedback based off value
-As a user, I want to be able to enter a single blood pressure reading into the input field and receive immediate feedback based off value
-As a user, I want to be able to sign up and login
-(As a user, I want to be able to submit a form and see if vaccinations are complete/incomplete)

## Components

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
        │   |   ├── Learn More/Resources
        │   |   ├── Contact Page
        │   |   ├── User Profile
        │   |   |	└── My Profile
    	        |	  |	|__Check Progress
    	        |	  |	|__Logout
        │      Main Container
        │       ├── TopDesigndiv
        │       ├── MiddleDiv
        │       	├── 1st Modal(Sugar)
        │       	├── 2nd Modal(BP)
        │       	├── 3rd Modal(Vaccine Form)
        │       	└── BottomDivDesign
        ├── |___Div
    	|	|	|___InformationDiv(Science)
    		|	|___InformationDiv(How to Change)
            ├── Footer
            	└── Privacy Policy & Terms/Conditions
              ├── Contact/Help Page
              └── Made By Tien Phan Github linkedinlink

.flex-container {
/_ We first create a flex layout context _/
display: flex;

/\* Then we define the flow direction
and if we allow the items to wrap

- Remember this is the same as:
- flex-direction: row;
- flex-wrap: wrap;
  \*/
  flex-flow: row wrap;

/_ Then we define how is distributed the remaining space _/
justify-content: space-around;

padding: 0;
margin: 0;
list-style: none;
}

.flex-item {
background: tomato;
padding: 5px;
width: 200px;
height: 150px;
margin-top: 10px;
line-height: 150px;
color: white;
font-weight: bold;
font-size: 3em;
text-align: center;
}

<ul className="flex-container">
  <li className="flex-item">1</li>
  <li className="flex-item">2</li>
  <li className="flex-item">3</li>
  <li className="flex-item">4</li>
  <li className="flex-item">5</li>
  <li className="flex-item">6</li>
</ul>

    /* Vertical align */

    .d-flex-vertical {

    	/* Tell flexbox to start vertically from the center */
    	align-items:center;

    	display:flex;

    	/* I'm also aligning it horizontally */
    	justify-content:center;

    }
    /* all the child element needs is to be a flex item */
    .d-flex-vertical > div {

    	display:flex;

    }

/_ Equal height columns _/
.d-flex-parent {

    	display:flex;
    	align-items:stretch;

    }
    .d-flex-child {

    	display:flex;
    }

Create a flex container
.flexcontainer {
display: flex;
}

Put flex items into a row
.flexcontainer {
display: flex;
flex-direction: row;
}

Center everything
.flexcontainer {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
}

.Aligner {
display: flex;
align-items: center;
justify-content: center;
background: #4fc;
height: 500px;
}

.Aligner-item {
background: #34d;
max-width: 50%;
}

<div className="Aligner">
   <div className="Aligner-item Aligner-item--fixed">
     <div className="Demo">
       <h3>I'm Centered!</h3>
       <p contenteditable="true">This box is both vertically and horizontally centered. Even if the text in this box changes to make it wider or taller, the box will still be centered. Go ahead, give it a try. Just click to edit the text.</p
     </div>
  </div>
</div>

div#container {
display: flex;
flex-direction: row;
justify-content: center;
}

/_ for better viewing _/
body, html {
margin: 0;
height: 100%;
box-sizing: border-box;
padding: 10px;
background-color: white;
}
div#container {
background-color: #e9e9e9;
height: 100%;
width: 100%;
}
div#container > div {
background-color: #57797f;
width: 100px;
height: 100px;
margin: 10px;
}

<div id="container">
  <div></div>
  <div></div>
  <div></div>
</div>

div#container {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
}

/_ for better viewing _/
body, html {
margin: 0;
height: 100%;
box-sizing: border-box;
padding: 10px;
background-color: white;
}
div#container {
background-color: #e9e9e9;
height: 100%;
width: 100%;
}
div#container > div {
background-color: #57797f;
width: 100px;
height: 100px;
margin: 10px;
}

<div id="container">
  <div></div>
  <div></div>
  <div></div>
</div>
