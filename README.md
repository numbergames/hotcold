# Exercise: Track the fewest guesses

Update your Hot or Cold app to track and display the fewest number of guesses someone took to beat the game by accessing a simple API.

## First you should create an API for saving and fetching the number of guesses:

- √ Create a file called server.js that will contain a simple Node.js API
- √ Set up Express, and make a GET and a POST endpoint to /fewest-guesses
- √ When a GET request is made to /fewest-guesses it should return the fewest guesses taken to get the correct answer
- √ The number of guesses can either be stored in-memory, or you can use a Mongo database
- √ When a POST request is made to /fewest-guesses, it should update the guess count if the number of guesses provided is lower than the current best

:thumbsup:

- **Then update your app to fetch and send data to the API:**
  - Add a fewestGuesses property to your Redux state
  - Update your app to display the fewestGuesses state in one of your components
  - Add two async actions (and their sync counterparts):
    - fetchFewestGuesses which should fetch the fewest guesses from the endpoint
    - saveFewestGuesses which should send a score to the fewest guesses endpoint
  - Dispatch the actions from your components so you keep track of the fewest guesses

# Pseudocode to implement API calls

## State/Store new properties
- Local fewest guesses (?)
- Server fewest guesses

## Server setup / code
- express middleware
- 1 endpoint
- 2 responses

## Actions / Reducers
- 2 new actions

- handle the 2 new actions in reducers

### GET from `/fewest-guesses`
- get the server fewest guesses #

### POST to `/fewest-guesses`
- on winning send the user's fewest guesses to server
- server gets the number, compares it to the "high score" on record
- if POSTed number is lower, server needs to update its record
  - Do we only send it if it's lower?  Or just always send?

## Component(s)
### Header
- display server fewest guesses
- also display local fewest guesses (?)

### Header Container
- pass in fewest guesses to Header
