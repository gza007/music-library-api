# Music API Test Suite

API for a Music Library.

## Uses
- MongoDB
- Heroku

### Install
- Clone this repository
- `npm install`

### Running the Tests
- `npm test` uses [Mocha](https://mochajs.org) to run e2e tests defined in `tests` directory

### Deployment 
This API was deployed to Heroku. 

### POST Request
- Use Postman to make a Post Request to: https://music-lib-api.herokuapp.com/artists
- Use the following body parameters:
{
    "name": "Example_NAME",
    "genre": "Example_Genre"
}

### GET Request
- Use Postman, or simply visit: https://music-lib-api.herokuapp.com/artists


