Ext.define('Coworkee.view.tablet.person.BrowseController', {
    extend: 'Coworkee.view.person.BrowseController',
    alias: 'controller.tablet-personbrowse',

    onCreate: function() {
        // The creation form can be accessed either by clicking the "create" button (dialog)
        // or via the #person/create url (page) - default config matches the "page" view.
        // Note that this dialog will be destroyed on close.
        Ext.create({
            xtype: 'personcreate',
            record: Ext.create('Coworkee.model.Person'),
            centered: true,
            floated: true,
            modal: true,
            ui: 'dialog',
            toolbar: {
                docked: 'bottom'
            }
        }).show();
    }
});
