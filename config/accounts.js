AccountsTemplates.configure({
    homeRoutePath: '/',
    onSubmitHook: function () {
        if (_.isNull(Meteor.userId()))
            sAlert.warning('Invalid credentials. Are you new here? Don\'t be afraid to click on "Register"');
        else
            sAlert.info('You have been logged in. Welcome!');

    },
    onLogoutHook: function () {
        sAlert.info('You have been logged out. Have a nice day!');
    }
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');

AccountsTemplates.addFields([
    {
        _id: 'username',
        type: 'text',
        displayName: "Username",
        required: true
    },
    {
        _id: 'name',
        type: 'text',
        displayName: 'First Name',
        required: true
    },
    {
        _id: 'last name',
        type: 'text',
        displayName: 'Last Name',
        required: true
    },
    pwd
]);
