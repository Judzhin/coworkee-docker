Ext.define('Coworkee.view.organization.Browse', {
    extend: 'Coworkee.view.widgets.Browse',

    fields: {
        manager: {
            property: 'manager_id'
        }
    },

    controller: 'organizationbrowse',
    viewModel: {
        type: 'organizationbrowse'
    },

    cls: 'organizationbrowse',
    bind: {
        store: '{organizations}'
    }
});
