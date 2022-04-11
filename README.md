
# Giveaway Bae - GA Project Four - 7 Days

This was the final project built for the General Assembly Engineering Immersive Course. A 7 day, paired programming project with classmate [Mayur Kumar](https://github.com/Kumasta).

![Giveaway Bae](https://user-images.githubusercontent.com/94964514/159168887-5d5fdad7-fa66-4b60-abf1-4a6e04b6650d.png)

Giveaway Bae is a website where businesses or "influencers" can create an account, create "giveaway" posts on the site and link them back to their social media accounts. Normal users can search through the site for giveaways they are interested in winning.

## Demo

The project was deployed using Heroku and is available [here](https://sei-giveaway-site.herokuapp.com).

## Brief
* **Build a full-stack application** by making your own backend and your own front-end
* **Use a Python Django API** using Django REST Framework to serve your data from a Postgres database
* **Consume your API with a separate front-end** built with React
* **Be a complete product** which most likely means multiple relationships and CRUD functionality for at least a couple of models
* **Implement thoughtful user stories/wireframes** that are significant enough to help you know which features are core MVP and which you can cut
* **Have a visually impressive design** to kick your portfolio up a notch and have something to wow future clients & employers. **ALLOW** time for this.
* **Be deployed online** so it's publicly accessible.


## Languages, Packages and Technologies Used:
- JavaScript
- JSX (HTML5 via react)
- Python 

### Backend
- django
- psycopg2-binary
- pylint 
- autopep8
- djangorestframework
- pyjwt

### Frontend
- @chakra-ui/icons
- @chakra-ui/react
- @emotion/react
- @emotion/styled
- @react-icons/all-files
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- axios
- buffer
- emotion-theming
- fontsource-inter
- framer-motion
- react
- react-dom
- react-dotenv
- react-router
- react-router-dom
- react-scripts
- react-select

## Process

After discussing and agreeing on a concept for our website, [Mayur Kumar](https://github.com/Kumasta) and I started  sketching our wireframe using [Excalidraw](https://excalidraw.com) and planned how to execute the project on [Trello](https://trello.com).

### Wireframe / Wireflow 

![Wireflow](https://i.imgur.com/MSuXW8W.png)

![Wireframe](https://i.imgur.com/fBKfK9x.png)

A guide for how we wanted the page to have and look like.


While creating the above frames, we 

### Trello Board

![Imgur](https://i.imgur.com/UEVDsmb.png)

We created a TODO list and divided work by putting out initials next to sections we worked on.

## Frontend

### Navbar

I wanted the Navbar to be responsive, including a search bar, dark mode toggle and a navigation menu.

The menu changes depending on whether a user is logged in or not. A dashboard menu option appears if the user is logged in with a business account.

Desktop:
![Desktop Navbar](https://user-images.githubusercontent.com/94964514/159913196-98bb7182-6718-41ec-957a-57552f3a9ebe.png)

Mobile:
![Mobile Navbar](https://user-images.githubusercontent.com/94964514/159913271-30318b1c-288d-44e5-9b9e-b111d5cd3328.png)

### Home Page
The home page is made of two sections
* Banner
* Carousel

![Dark mode on banner](https://user-images.githubusercontent.com/94964514/159914783-97dcf0fc-5a71-48db-bfbe-b86f4de0d8d0.gif)

The carousel was made with a Chakra carousel prototype and is currently populated with a card map from all the records in the giveaway GET all requests. The carousel moves from either drag/swipe or the arrow buttons below. By the end of the build time, image normalization was not fully complete and needs to be addressed as images can be uploaded in any size or ratio at this time. Some pictures bleed into the bottom of the cards in mobile view.

![Carousel gif](https://user-images.githubusercontent.com/94964514/159914218-7b69cf6f-5dac-4441-9389-4cc0aa2def0a.gif)

### Showcase Page

From the showcase, users can view all information about the giveaway. Including an end date as well as a live countdown to that end date. If the end date has passed, the countdown will switch to a 'Giveaway Ended' text. Logged in users can also add the giveaway to their watch list by hitting the button, this will automatically add the giveaway ID to their array field and add the users ID to the giveaway watching array field. The feedback is given immediately by making the GET request again and populating the watcher list. Users can also follow a verified by clicking their username (Not a clear feature in this version) as seen below. Following a user at this stage has no effect for the User but will show up for the verified user at this stage.         

![Showcase top](https://user-images.githubusercontent.com/94964514/159915319-59b1c998-dbf9-4caf-b3de-f476e96ed78c.gif)    

Logged in users can leave comments by typing into the comment box that only appears when logged in. Otherwise site visitors will see a prompt to login instead. If the user is the owner of a comment, they will see options to either edit or delete their comment with a popover prompt.
 

![Comment gif](https://user-images.githubusercontent.com/94964514/159915927-b1e9d24e-2f8c-4015-bef0-1630377adac4.gif)

### Search Page

When on the search page, it will bring up all the giveaways on the site, users will be able to sort by several methods and by category drop down. Users can also type in text into the search bar to filter down the results.     

![SearchPage](https://user-images.githubusercontent.com/94964514/159916656-bea7c970-a8c9-4a5e-af53-09a02daaf02d.gif)

### Dashboard page
If a verified user is logged in, they will be able to go to their dashboard. Here they can manage their giveaways and create new ones. They will also be able to see how many people are following them. 


![Dashboard](https://user-images.githubusercontent.com/94964514/159918084-23fb5a89-c78d-46ac-bfc1-8a4491cfc28c.gif)


From the giveaway form, if there is missing or unvalid data in a form field, 'toast' popup errors appear to indicate to the user that there is an issue with their new or updated giveaway form. 

![Toast](https://user-images.githubusercontent.com/94964514/159918902-3b12a220-aa9f-407f-b410-db8ead8d8c70.gif)

#### Giveaway Card

Giveaway cards change color dynamically based on the URL provided. 

If the URL included 'youtube', the cards background color will be red and the link icon will be Youtube's icon.a generic link icon and gray color is provided to URLs that aren't [Youtube, Facebook, Instagram, Twitch, Twitter].
Giveaway edit button will only show up on a card if the user is the creator of the giveaway and is viewing the card on their dashboard.

### Profile Page

Profile page uses the same components as profile page. 
* Displays the users watchlist instead of their created giveaways.
* Displays who the user is following instead of their followers.
The page is currently missing the user profile section.

![profile page](https://user-images.githubusercontent.com/94964514/159917150-55d74e84-6eb2-4008-bc23-9ab2931da77a.png)

### Styling

For this project, we did not use any CSS files. We relied on inline styling and native Chakra features. We needed to import some books in order to achieve the color change toggle. On the index page we needed to import `ColourModeScript`

![image](https://user-images.githubusercontent.com/94964514/159956709-3ecb7c7a-6965-4e9b-a94c-92ad3b6125b7.png)

The color toggle button calls a functions from the `useColorMode` hook 

![image](https://user-images.githubusercontent.com/94964514/159956846-9947eb93-a026-4fd6-b597-1b20230945ca.png)

We used the native color values for the majority of the build but for certain buttons and tags, we had to create a color variable to store the color for light and dark mode for the system to toggle between. 

![image](https://user-images.githubusercontent.com/94964514/159956943-11d5b054-ad25-4f62-bd54-7e718629eda2.png)

## Backend

### Model Relationship Diagram

![Imgur](https://i.imgur.com/rCIJqOJ.png)

For the back end we used [quickdatabasediagrams.com](http://quickdatabasediagrams.com) to map out the fields in each of our models and the relationships they would have with each other. This was more of a challenge for us to visualize as it was a newer system (Django/SQL) we were working with and we spent the most amount of planning time on this to get it right.

### Document Model Breakdown. 

#### User Model
The user model was the biggest model we created but was relatively easy to set and work with in the way we wanted it to function. We initially planned to have two different user models for verified and unverified users with a difference in number of fields and site interactivity. But for the time scale we had being relatively short, we went with just one model and a boolean field to determine if the user is verified or not.       
<img width="502" alt="image" src="https://user-images.githubusercontent.com/94964514/161787933-f6afea27-ba2e-4b8e-8e48-0ea56d152453.png">

#### Giveaway Model
The most complex model to work with in terms of relationship between itself and the several connections to the user model. The main feature that we did not get working dynamically as we had hoped was the watcher_list filed. We wanted a user to add the ID of a giveaway to their watch list and have the user’s ID be added to that giveaway's watcher-list. In the time we had we were not able to figure out a dynamic solution instead which we had to update two models at the same time.        
<img width="423" alt="image" src="https://user-images.githubusercontent.com/94964514/161788090-f4edee32-13fd-49fc-99c9-333c3c74e520.png">

#### Comment Model
Relatively simple model compared to the previous two. This was a relatively fast model to put together when put against the user and giveaway model and we had very little trouble implementing it.       
<img width="423" alt="image" src="https://user-images.githubusercontent.com/94964514/161788226-5ed92a6e-6ea4-42ea-a7e3-fbec4d9d1ba9.png">

#### Region and Category Model
The simplest out of all the models, these contain basic records for our drop down select  forms. 
<img width="414" alt="image" src="https://user-images.githubusercontent.com/94964514/161788361-bfdffea4-767e-4043-8bcd-d7ef4795a64a.png">
<img width="504" alt="image" src="https://user-images.githubusercontent.com/94964514/161788448-5857db00-7b89-4aa4-8253-41fa0973d76f.png">


### API-End-Points
(* secure route)   
(+ Body required)   
({ } id/text/token)

#### Giveaways
- Get all `Get /api/giveaways/` 
- Get one `Get /api/giveaways/{giveaway ID}/` 
- Post new*+ `POST /api/giveaways/`     
![image](https://user-images.githubusercontent.com/94964514/159490560-8f6cc06d-e68a-4fd5-9f06-eb32d55d2aa7.png) 
- Update one*+ `PUT /api/giveaways/{giveaway ID}/`    
![image](https://user-images.githubusercontent.com/94964514/159490641-bedbb702-c71f-45b2-a78a-e85318c0b998.png) 
- Delete one* `DELETE /api/giveaways/{giveaway ID}/`    

For the purpose of a user being able to "watch" a giveaway, we stored the giveaway ID in the user profile in a watchlist and the user ID is stored in the giveaway record in a watcher_list field. At the time of building this project we were not able to figure out a smooth way to do this in one request. So we made an end-point for the giveaway so that the User does not need to be the owner of the giveaway to update that ID array. For ease of checking & updating the array we create an unpopulated GET endpoint to get an array of numbers and not objects.       

- Get one unpopulated giveaway `GET /api/giveaways/update/{giveaway ID}/`     
- Update giveaway* (Non-owner) `PUT /api/giveaways/update/{giveaway ID}/`     
![image](https://user-images.githubusercontent.com/94964514/159493219-fb550337-69a4-4ea4-b9fe-0bd690266f90.png) 


#### Comments   
- Add comment*+ `POST /api/giveaways/comments/`     
![image](https://user-images.githubusercontent.com/94964514/159491006-67b074b8-77ef-4b38-a852-9b4f35d0ec4f.png) 
- Updated comment*+ `PUT /api/giveaways/comments/{comment ID}/`     
![image](https://user-images.githubusercontent.com/94964514/159491115-6aadcd27-b692-4fd8-8fda-f277654dec96.png) 
- Delete comment* `DELETE /api/giveaways/comments/{comment ID}/`  

#### Login & Register
- Register User+ `POST /api/register/`      
![image](https://user-images.githubusercontent.com/94964514/159491227-7023c17c-9e13-4437-8cd4-6fb09d0c2068.png) 
- Login user+ `POST /api/login/`     
![image](https://user-images.githubusercontent.com/94964514/159491261-a0d3b79c-e058-48f9-b9fc-e95e52d61b60.png) 

#### User Profile
- Get one profile `GET /api/profile/{user ID}/`     
- Update own profile*+ `GET /api/profile/{user ID}/`     
![image](https://user-images.githubusercontent.com/94964514/159491699-71dc50bf-ffed-4ff6-a008-4aa8c04e3608.png) 
- Delete user* `DELETE /api/profile/{user ID}/` 

#### Regions & Categories
For the purpose of populating drop down select forms  
- Get all regions `Get /api/regions/` 
- Get all categories `Get /api/categories/`


## Challenges
* Implementing all the features we had in the time we were given.

## Wins
* Refactoring the create giveaway form component so that it can also be used for updating a giveaway. Form is empty when creating a new giveaway, but is populated by giveaway data when the update button is clicked.
* Also refactoring the dashboard components to be used by the profile page. hence keeping the layout consistent.

## Key Learnings
* Whenever I start building a new project now, I think about what components I could reuse in multiple sections. 
* 


## Known Bugs or Errors

* Need to refresh the profile page for it to show newly added giveaways to users' watchlist.
* Register form account selector doesn't indicate visually when choice is made, but does function properly.


