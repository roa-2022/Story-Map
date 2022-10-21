# Final Project Plan
---------------------------------------------


## Korero O Te Whenua

Korero O Te Whenua is a platform for users to share local Maori stories and legends, which then have their focal location points traced on a map of New Zealand. Users will be able to add their local stories and will have the story published on our site. Join us and explore local areas and learn about myths, legends and stories associated with that place

---------------------------------------------

## To get started:

Clone down this repo and run the following commands in your terminal

```
npm i
npm run knex migrate:latest
npm run knex seed:run
npm run dev
```
## Heroku App
* whenua-o-korero.herokuapp.com

------------------------------------------

## Human Skills Group Plan

### Wellbeing: Stress profiles and needs
* Amy:  is going through SOT interviews. Needs to be shown empathy and is prompt to chat about what's going on for her with HS or talk to other team members.
* Tyrone: When stressed, he gets quiet and pulls back from participating. He needs to go on walks and cookies.
* Matthew E -  His stress levels are ok now, but when he's stressed,  matt losses focus and don't overthink about other people. He needs to be asked what he's up to.
* Matthew T: under stress, he talks faster than usual. He needs the team to emphasise the need for breaks.
* Yani: When you see her frowning, not taking breaks and talking sharp, she's stressed. Ask her to go for walks or take a break. She needs affirmation words and a pat on the back.

### Expectation setting and agreements:

* What do we each want out of this time? 

To have fun, learn in the process and build a purposeful App.

* What hours will we keep?

Long weekday hours are needed until MVP. Mainly 8.30 to 5 but some team members can stay longer. Amy, Matt E, Matt T and Yani can do some work at the weekend. Tyrone will be in ALK on the weekend, and we'll wait for him for the stretch.

* What do we do when conflict arises?

We'll use our HS tools and ask for a mediator if needed. We'll agree to be open and to mention possible conflicts in stand-ups to handle in a separate conversation. We want to tackle disagreements early.

* How will we communicate, especially what hours of work will happen over the weekend?

We'll be holding check-ins, stand-ups and retros in person and using the slack outside the campus. About availability, Tyrone will be in ALK on the weekend, and we'll wait for him for the stretch. And the rest of the team is willing to work one day until MVP.  


 *How will you make decisions together? How will you handle conflict?

About decisions, people will be involved depending on the matter; if it's about a particular feature involving only two teams, those two will be in the meeting. In the stand-up, bring up the subject and see who's interested in having a meeting later.
Handle conflict: check in the morning & 4.45 checkout.
 
* How will you, individually and as a team, get the help you need, both technical and non-technically?

We'll get help from facilitators or pairs when we get stuck with the tech for too long. Talk to the facilitator when we don't think it's the right technology. Get help to plan a courageous convo if needed.

* How will you make sure everyone feels included?

Listening to other people learning goals. Making sure things are communicated in stand-ups. Take a look at kanban to check available tickets. Stand up when tasks are completed. Stand up 2 min: 


* How will you work (what roles and what agile rituals will we use etc.)?

Scrum lead: Matt
Product owner: Matthew
Git Keeper: Amy
Vibe watcher: Yani

Check-in = 15 min after everybody is around
Check out and retro. Sprints  1 per day
Retro to be conducted and the end of every day at 4.45pm


* How will you survive (Will you eat together? How will you break the tension? What is your fun times plan?)

 Lunch:  around 12/12.30 duration will last, depending on the duration.
 
 ---------------------------------------------------------

# Tech Planning

What we used in our project: 

- React
- Redux
- Node.js
- Express
- SQLite3
- Bulma / Scss
- Mapbox
- auth0


## Wireframes

* ### Home 

![Story-Map](https://user-images.githubusercontent.com/99714877/191629622-e9bf5ba8-9f9b-462c-9b8f-11c741ce88ed.jpg)

* ### Stories  

![Story-Map (5)](https://user-images.githubusercontent.com/99714877/191629488-3fe91dd8-a037-4930-b57d-39a667e49c28.jpg)

* ### SingleStory 

![Story-Map (2)](https://user-images.githubusercontent.com/99714877/191629510-72336dbc-d64e-4e8a-97a3-eca01f96af12.jpg)

* ### AddStory

![Story-Map (3)](https://user-images.githubusercontent.com/99714877/191629529-a57cb85b-f3a0-4685-92f0-0f503c178909.jpg)

LATEST DB. https://dbdiagram.io/d/632b85a87b3d2034ff82c1c0


## Redux store

Our store will contain an array of objects once populated.  There is a number of reducers fabricated to give us control over what gets stored.  We have seperate stores for our map, as well as for our list of stories, regions, users and saved stories

## Routes

| path | method | data | response |
|---|---|---|---|
| /api/v1/stories        | GET  | --                                | Array of stories objects                            |
| /api/v1/stories        | POST | New story object                  | Object containing new id                            |
| /api/v1/regions        | GET  | --                                | Array of region objects                             |
| /api/v1/search/:region | GET  |                                   | Array of stories objects with matching region name  |
| /api/v1/saved          | POST | added favourites data             | New Object                                          |
| /api/v1/saved/:auth0_id| GET  | --                                | Array of saved objects pertaining to auth0_id value |
| /api/v1/users          | GET  | --                                | Array of users                                      |
| /api/v1/users          | POST | new user data                     | --                                                  |


Example seed content: 

Stories Table

```js
[
  { 
    id: 1 
    auth0_id: *secret info*
    author: Admin
    title: 'Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu'
    sinopsis: "The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one."
    story_txt : "The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one- The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one."
    photo_url: "https://en.wikipedia.org/wiki/K%C5%8Dauau#/media/File:Kooauau.png"
    location:
    
    },
  { 
    
    id: 2
    auth0_id: *secret info*
    author: Admin
    title: "Tāne Mahuta"
    sinopsis: "Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today."
    story_txt : "Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today."
    photo_url: "https://en.wikipedia.org/wiki/T%C4%81ne_Mahuta#/media/File:00_29_0496_Waipoua_Forest_NZ_-_Kauri_Baum_Tane_Mahuta.jpg"
    location:
  },
]
```
Regions Table

```js
[
  { 
    id: 1 
    name: "New Zealand"
    },
  { 
    id: 2 
    name: "North Island"
  },
   { 
    id: 3 
    name: "South Island"
  },
  ]
```
## DB diagram

![Story-Map](https://user-images.githubusercontent.com/99714877/191877801-2a9320e5-3351-4072-b874-6cb035747fd9.png)


## User Stories

### MVP

* As a visitor, I would like to be able view the home page, with a clear understanding of what the site is, and what i can expect from the experience
* As a visitor, I would like to view a list of collected stories
* As a visitor, from the list of collected stories, I would like to select and view a single story
* As a visitor, I would like to filter stories by region

### MVP+
(add user priviledges & map functionality)	

* As a user, I would like to choose whether I view the collection of stories from a list, or from the map via seperately labelled routing links
* As a user, when I view the map, I want to be able to click a pin on the map to view the story associated with that pin
* As a user, when I add a story, I want to be able to select a region that my story pertains to and a specific location point for the map


AUTHENTICATION
* As a user, I would like to have the power to delete my stories
* As a user, I want to be able to log in to the site, in order to add stories safely
* As a user, I want to be able to save stories to my profile
* As a user, I would like to be able to have input on Iwi relations and ties to the selected story

--------------

## Planned Structure

## Home page

MVP - 	The home page will detail the purpose of our website and have a navbar displayed above a pulsating hero image.  

MVP+ - 		The Navbar will contain functioning links to log in (log out if you are signed in), our list of stories and, eventually a link to a map based collection of stories

## View Collection of stories


MVP - 	This page is our main page, where we display a collection of all our stories stored in our database.  Each story will be displayed as a card, with an image, title, and location.  The navbar will continue to be visible here with the added option to return to the home page.  There will also be the option to add a story here as well (This feature will be restricted to users only, as we introduce authentication)
Each story card is clickable and will redirect you to a single story view.  There will be a search bar of sorts where we can filter the collection by region, to isolate the stories we are looking for

MVP+ -	  	The ‘Add Story’ prompt will only appear when a visitor is logged in.  Or perhaps redirect them to a login page when they click on this button.  There will be an additional link on navbar to switch our list to a mapped view, where a visitor can click on a pin on a map of New Zealand and view the story associated with that pinned location.  This switch action could be a toggle or a new route entirely, and there will be an option to return the list view.  


## Add a new story

MVP - 	This page will display a form that allows a visitor to add a story to the database.  The details will need to include a name for the story, a region associated with the story, the actual story itself and an image to be connected with it.  A user will also be able to pin the location they most want associated with the story using the map  

MVP+-		Restricted Access to this page, logged in users only


## View a Single Story

MVP - 	This page will display the clicked on story from the previous page.  From here, a visitor can read the story.  There will be an option to go back to the previous page

MVP+ - 		Additionally, a user logged in will be able to save this story to their own personal collection of saved stories. 
## Admin controlled sections!!


##Login/Registration

MVP+ - 		Users will be directed to login or register to the site if they wish to add stories.  A user can peruse the site without any form of registration required

## Saved Stories

MVP+ - 		A user can go to a route that shows all their saved stories.  This will be collected into its own database.  A user will the ability to remove stories from their saved list.  Users can delete the stories they have saved from their list of saved stories



## Admin Related Controls (Not Complete)

## Deleting Stories

Stretch -	Homepage and views of story collections will be quite similar to normal user access.  In Single View, an option to delete a story will exist, with perhaps a prompt confirming this action.

## Adding Stories

Stretch - 	A story that is submitted to be added will be passed to a page that only the admin can view.  They will be able to review the story, making adjustments if required and then either accept or decline the story.  


