# Notes on my login files

Login Authentication

Npm installed express, body-parser, mongoose, concurrently, bcryptjs, jsonwebtoken, config
(npm installed as devDependency (“-D”): nodemon)

Npm installed on client-side (“cd client”): bootstrap, reactstrap, uuid, react-transition-group, redux, react-redux, redux-thunk, axios

NEED TO CHANGE KEYS IN config/default.json TO FIT DATABASE

Files added for login:

models/User.js
routes/api/auth.js
routes/api/users.js
config/default.json <NEED TO HIDE WITH .gitignore AFTER KEYS ARE ALTERED>
middleware/auth.js
client/src/reducers/authReducer.js
client/src/reducers/errorReducer.js
client/src/actions/authActions.js
client/src/actions/errorActions.js
client/src/components/auth/LoginModal.js
client/src/components/auth/Logout.js
client/src/components/auth/RegisterModal.js


Lines of code added to existing files will have comments: “// ADDED FOR LOGIN”

<LOTS OF LINES OF CODE IN client/src/actions/types.js >


Info for JSONWebToken can be found at: jwt.io
