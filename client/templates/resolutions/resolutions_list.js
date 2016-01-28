Template.resolutionsList.helpers({
  resolutions: function() {
    return Resolutions.find();
  }
});
Template.resolutionsList.events({
	'submit .new-resolution': function(event){
		var title = event.target.title.value;//capturamos el valor del formulario como un evento
		Resolutions.insert({ //insertamos titulo y fecha en la base de datos
			title : title,
			createdAt: new Date()
		});
		event.target.title.value =""; //sirve para limpiar el formulario

		return false; //para que no se refresque
	}
});