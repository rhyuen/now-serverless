# ABOUT

> Some code to test out serverless NODE apps on Zeit Now 2.0

# NOTES

1. If you deploy too frequently, you're limited in the releases you're allowed to deploy.

2. You can use node_modules within Node Serverless functions.

# DONE/DISCOVERIES

1. I got the Routing to work with the NODE functions.
2. I got promises working with NODE functions.
3. I got functions to return a JWT.

# ATTEMPTS/THINGS I COULDN'T get to work.
1. I can't a DB connection to mongo working in `/api/lambda/dbconn.js`.
2. I can't get subroutes (routes declared and used in the node app but not explicitly denoted and assigned a rule in `now.json`) to node.js apps with `@now/node-server`.

# Questions to be answered.

1. I don't know if the `node_modules` have to be in the same directory as the `functions` or if the `node_modules` directory can be at the root level.
> `node_modules` can be at the root level

2. You can return JSON responses with `res.end(JSON.stringify({'key': 'value', 'keytwo': 'valuetwo'}))`.
> `This is fine`

3. I do not know if `@now/node-server` lets you deploy without error if there is an explicit port named in the server code.  Currently, there is no explicit port denoted.