var mongoose = require( 'mongoose' );
var mongoosePages = require( 'mongoose-pages' );

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

mongoosePages.skip( IssueSchema );

module.exports = db.model('issues', IssueSchema);