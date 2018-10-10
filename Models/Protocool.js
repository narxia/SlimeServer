/*
{
	"id": "Sensor1",
	"Protocol":"TCP",
	"Data": [
	{"timestamp":"2018-09-30 08:59:31:151Z","category":"light","type":"float","Data":"0.1"},
	{"timestamp":"2018-09-30 08:59:31:151Z","category":"light","type":"float","Data":"0.2"},
	{"timestamp":"2018-09-30 08:59:31:151Z","category":"light","type":"float","Data":"0.3"}
	]
}

*/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProtocolSchema = new Schema({
    id: String,
    protocol : String,
    category:   String,
	type:   String,
	Data:   Mixed,
});
