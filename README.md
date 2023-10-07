# Auth0 playground

https://auth0.com/docs

- Frontend(React) login function
- Backend API (Express.js) authenticate with specific scope

## Frontend (React)

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Backend (Express)

### `npm start`

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

```
# to access private endpoint
$ curl --request POST \
  --url https://dev-aaa.us.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"xxx","client_secret":"yyy","audience":"https://quickstarts/api","grant_type":"client_credentials"}'

$ curl -X GET "http://localhost:3001/api/private" --header 'authorization: Bearer XXX'
```

Added `read:messages` permission on [Auth0 API page](https://manage.auth0.com/dashboard/us/dev-m810kno1f46bc674/apis)

```
# to access private scope endpoint
$ curl --request POST \
  --url https://dev-aaa.us.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"xxx","client_secret":"yyy","audience":"https://quickstarts/api","grant_type":"client_credentials", "scope": "read:messages"}'

$ curl -X GET "http://localhost:3001/api/private-scoped" --header 'authorization: Bearer XXX'
```
