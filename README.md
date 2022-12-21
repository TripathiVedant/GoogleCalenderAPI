Calender Manager

Video Link:


To Run:
1. install nodeJS and npm.
2. Navigate to the folder.
3. run "npm i" on terminal.
4. run "node index.js"

Server will start on port 3000. 

It has following APIs:

1. GET localhost:3000/events to view all the upcoming events. (10 allowed for now). 
2. GET localhost:3000/login will redirect to Google authorization page to make changes in your calender and to get token. 
3. POST localhost:3000/events to add new event events. Body should contain following Json object and will return the added object. \
````json
{
    "summary": "Testing Vedant's Calendar app.",
    "location": "India",
    "description": "Working on an assignment",
    "start": {
        "dateTime": "2022-12-24T09:00:00-07:00",
        "timeZone": "Asia/Kolkata"
    },
    "end": {
        "dateTime": "2022-12-24T17:00:00-07:00",
        "timeZone": "Asia/Kolkata"
    },
    "attendees": [
        {
            "email": "vedanttri661@gmail.com"
        }
    ],
    "reminders": {
        "useDefault": true
    }
}
````


