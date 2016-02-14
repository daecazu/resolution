Meteor.methods({

	addResolution: function(title){
		Resolutions.insert({ //insertamos titulo y fecha en la base de datos
			title : title,
			createdAt: new Date(),
			owner: Meteor.userId()
		});
	},
	deleteResolutions: function(id){
		var res = Resolutions.findOne(id);
		if(res.owner!== Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}
		Resolutions.remove(id); //borra la entrada a la que está apuntando el "puntero"
	},
	updateResolutions: function(id, checked){
		var res = Resolutions.findOne(id);
		if(res.owner!== Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}
		Resolutions.update(id, {$set: {checked: checked}});
	},
	setPrivate: function(id, private){
		var res = Resolutions.findOne(id);
		if(res.owner!== Meteor.userId()){
			throw new Meteor.Error('not-authorized');
		}
		Resolutions.update(id, {$set: {private: private}});
	}
});