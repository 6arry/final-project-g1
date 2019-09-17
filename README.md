# Notes on my login files

This is what I've added/deleted from files/folders so far, pertaining to what's needed for login authentication

There are files that are in this login authentication which were created to make a Shopping List and should be ignored


Added to mern-shopping-list for Login Authentication

Npm installed bcryptjs, jsonwebtoken, config

New file to models folder: User.js

New file to routes/api folder: users.js; auth.js

Created new folder middleware with file: auth.js

Added to server.js: bodyParser deleted
		       Line 9: app.use(express.json()); <added>
		      Line 12: changed to const db = config.get(‘mongoURI’);

line 15: .connect(db, {
				useNewUrlParser: true,
				useCreateIndex: true

       line 19: app.use('/api/items', require('./routes/api/items'));
                 line 20: app.use('/api/users', require('./routes/api/users'));
			    app.use(‘/api/auth’, require(‘./routes/api/auth’));

Added to config folder: default.json
Deleted from config folder: keys.js

Added to routes/api/items.js: const auth = require(‘../../middleware/auth’);

**Reference: jwt.io***


