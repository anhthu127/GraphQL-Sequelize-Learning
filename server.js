// import Express from 'express';
// import GraphHTTP from 'express-graphql';
// import Schema from './schema';
const Express = require('express')
const GraphHTTP = require('express-graphql')
const Schema = require('./src/database-graphql/schema')
// Config
const APP_PORT = 3000;

// Start
const app = Express();

// GraphQL
app.use('/graphql', GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));

app.listen(APP_PORT, () => {
    console.log(`App listening on port ${APP_PORT}`);
});