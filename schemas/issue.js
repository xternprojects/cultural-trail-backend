var mongoose = require( 'mongoose' );

var Schema = mongoose.Schema;

var IssueSchema = new Schema({
	"name": String,
    "description": String,
    "location": {
        "lat": Number,
        "long": Number
    },
    "priority": Number,
    "open": Boolean,
    "reportedDate": Date,
    "resolvedDate": Date
});

module.exports = db.model('issues', IssueSchema);