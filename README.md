# Final Project Plan

## Wellbeing: Stress profiles and needs
* Amy:  is going through SOT interviews. Needs to be shown empathy and is prompt to chat about what's going on for her with HS or talk to other team members.
* Tyrone: When stressed, he gets quiet and pulls back from participating. He needs to go on walks and cookies.
* Matthew E -  His stress levels are ok now, but when he's stressed,  matt losses focus and don't overthink about other people. He needs to be asked what he's up to.
* Matthew T: under stress, he talks faster than usual. He needs the team to emphasise the need for breaks.
* Yani: When you see her frowning, not taking breaks and talking sharp, she's stressed. Ask her to go for walks or take a break. She needs affirmation words and a pat on the back.

## Expectation setting and agreements:

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
Git Keeper: Git keeper
Vibe watcher: Yani

Check-in = 15 min after everybody is around
Check out and retro. Sprints  2 per day


* How will you survive (Will you eat together? How will you break the tension? What is your fun times plan?)

 Lunch:  around 12/12.30 duration will last, depending on the duration.

# Planing

## The Idea

## External API? Data Base?

## Wireframes

![Story-Map](https://user-images.githubusercontent.com/99714877/191629132-f97db5fc-d95d-433f-a469-a68d04b6413c.jpg)

![Story-Map (5)](https://user-images.githubusercontent.com/99714877/191629146-57b14df8-c3eb-4901-a28f-e1d31925d9a3.jpg)


![Story-Map (2)](https://user-images.githubusercontent.com/99714877/191629160-c304303f-f4b8-43dc-a0cc-a4638d522072.jpg)


![Story-Map (3)](https://user-images.githubusercontent.com/99714877/191629169-9328ba15-d37c-413e-864f-4fa00e21609e.jpg)


## Redux store

## Routes

| path | method | data | response |
|---|---|---|---|
| /api/v1/stories | GET | -- | Array of stories objects |
| /api/v1/movies | POST | New story object | Object containing new id |
| /api/v1/| ?| -- | -- |
| /api/v1/| ? | -- | -- |


Example seed content: 


```js
[
  { 
    id: 1 
    title: Taumatawhakatangihangakoauauotamateapokaiwhenuakitanatahu
    sinopsis: The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one.
    story_txt : The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one- The summit where Tamatea, the man with the big knees, the slider, climber of mountains, the land-swallower who travelled about, played his koauau to his loved one.
    photo_url: https://en.wikipedia.org/wiki/K%C5%8Dauau#/media/File:Kooauau.png
    location:
    
    },
  { 
    
    id: 2
    title: Tāne Mahuta
    sinopsis: Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today.
    story_txt : Tāne Mahuta, Lord of the Forest, is an important figure in Māori history. The oldest of six siblings, Tāne Mahuta, grew tired of living in darkness, closed in between his sky father (Ranginui) and earth mother (Papa-tū-ā-nuku). He decided to push them apart and, in doing so, created the world of light (Te Ao Mārama) we live in today.
    photo_url: https://en.wikipedia.org/wiki/T%C4%81ne_Mahuta#/media/File:00_29_0496_Waipoua_Forest_NZ_-_Kauri_Baum_Tane_Mahuta.jpg
    location:
  },
]
```
## DB diagram
![Story-Map (2)](https://user-images.githubusercontent.com/99714877/191626378-82295c94-c75f-46f8-ad4b-cf06ba29dc60.png)

## User Stories

### MMVP
* As a user, I would like to be able view the home page, with a clear understanding of what the site is, and what i can expect from the experience
* As a user, I would like to view a list of collected stories
* As a user, from the list of collected stories, I would like to select and view a single story
* As a user, I would like to filter stories by region
* As a user, I would like to add a story to the collection (no authentication yet)

### MVP
	
* As a user, I would like to choose whether I view the collection of stories from a list, or from a map [can we word this so it’s like…. I want to be able to do either? Or that I can do both?]
* As a user, when I view the map, I want to be able to click on pins to view a list of stories from regions surrounding the pin
* I want to be able to click a pin on the map to view the entire story

AUTHENTICATION
* As a user, I want to be able log in to the site, in order to add stories safely
* As an admin, I want to be able to have authority to accept or decline entries to the collection of stories
* As a user, I want to be able to save stories that I find interesting or important to my profile
* As a user, I would like to have the power to delete my stories
* As an admin, I would like to have the power to delete entries
* As a user, I would like to be able to have input on Iwi relations and ties to the selected story

### STRETCH
* As a user, I would like to post an upvote to stories I enjoy, I can only post one upvote


