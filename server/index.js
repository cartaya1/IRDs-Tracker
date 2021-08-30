const routes = require('./controllers');
const helpers = require('./utils/helpers');
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3001;
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: 'Super secret secret',
    cookie: { maxAge: 36000 },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
//app.use(routes);
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.send('Hello IRDs, I am Luis')});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening", {PORT}));
});

