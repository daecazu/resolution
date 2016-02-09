Meteor.methods({

	addResolution: function(title){
		Resolutions.insert({ //insertamos titulo y fecha en la base de datos
			title : title,
			createdAt: new Date()
		});
	},
	deleteResolutions: function(id){
		Resolutions.remove(id); //borra la entrada a la que está apuntando el "puntero"
	},
	updateResolutions: function(id, checked){
		Resolutions.update(id, {$set: {checked: checked}})
	}
});