Meteor.publish("resolutions", function(){
	return Resolutions.find();
});