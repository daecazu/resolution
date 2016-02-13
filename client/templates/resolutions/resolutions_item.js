Template.resolutionsItem.helpers({
	isOwner: function() {
		return this.owner === Meteor.userId();

	}	
	
	
});

Template.resolutionsItem.events({
	'click .toogle-private': function () {
		Meteor.call("setPrivate", this._id, !this.private);
	}
});