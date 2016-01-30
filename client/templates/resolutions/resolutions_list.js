Template.resolutionsList.helpers({
  resolutions: function() {
  	if(Session.get('hideFinished')){
  		return Resolutions.find({checked: {$ne: true}})//si está seleccionado no se muestra dentro de el sitio
  	}else{
    	return Resolutions.find();
  	}},
  	hideFinished: function(){
  		return Session.get('hideFinished');
  	}
  }
);
Template.resolutionsList.events({
	'submit .new-resolution': function(event){
		var title = event.target.title.value;//capturamos el valor del formulario como un evento
		Resolutions.insert({ //insertamos titulo y fecha en la base de datos
			title : title,
			createdAt: new Date()
		});
		event.target.title.value =""; //sirve para limpiar el formulario

		return false; //para que no se refresque debido al evento submit
}});
Template.resolutionsList.events({
	'click .toogle-checked': function() {
		Resolutions.update(this._id, {$set: {checked: !this.checked}})
	},
	'click .delete': function () { //captura el evento delete
		Resolutions.remove(this._id); //borra la entrada a la que está apuntando el "puntero"
	},
	'change .hide-finished': function(event){
		Session.set('hideFinished', event.target.checked);
	}
});

Accounts.ui.config({ //se configuran las cuentas
	requestPermissions: {
		// facebook: ['user_likes']
	},
	requestOfflineToken: {
		// google: true
	},
	passwordSignupFields: 'USERNAME_ONLY' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
});