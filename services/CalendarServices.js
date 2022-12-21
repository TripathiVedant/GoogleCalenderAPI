const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');
var calauth=require('./CalendarAuth.js');

async function listEvents(auth) {
    const calendar = google.calendar({version: 'v3', auth});
    const res = await calendar.events.list({
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    });
    const events = res.data.items;
    if (!events || events.length === 0) {
    //   console.log('No upcoming events found.');
      return 'No upcoming events found.';
    }
    return events;
  }


async function createEvents(event){
    auth=await calauth.authorize();
    const calendar = google.calendar({version: 'v3', auth});
    return new Promise((resolve,reject)=>{
        calendar.events.insert({
            auth: auth,
            calendarId: 'primary',
            resource: event,
          }, function(err, event) {
            if (err) {
              console.log('There was an error contacting the Calendar service: ' + err);
              reject(err);
            }
            console.log('Event created: %s', event.data);
                resolve(event.data);
          });
    })
} 
  module.exports = {    
    listEvents,
    createEvents  
};