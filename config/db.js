// module.exports = {
//  secret: "jiraapplication",
//  url: "mongodb://localhost/jira"
// }

// For https://library-angular2.herokuapp.com we are using remote database
module.exports = {
	secret: "jiraapplication",
	url: "mongodb://alexm2018:node123@cluster0-shard-00-00-ezymz.mongodb.net:27017,cluster0-shard-00-01-ezymz.mongodb.net:27017,cluster0-shard-00-02-ezymz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin"
}

// Note: if the local connection fails then
// try using 127.0.0.1 instead of localhost.
