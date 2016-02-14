Meteor.publish("resolutions", function(){
	return Resolutions.find({
		$or: [                                //adv mongodb query
			{ private: {$ne: true}},
			{ owner: this.userId}
		]
	});
});