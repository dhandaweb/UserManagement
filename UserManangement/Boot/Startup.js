define(['jquery', 'knockout'], function ($, ko) {


    setTimeout(function () {
        //main components
        ko.components.register('Main', { require: 'Components/Main/Main' });
        ko.components.register('Canvas', { require: 'Components/Canvas/Canvas' });
        ko.components.register('UserDetail', { require: 'Components/UserDetail/UserDetail' });
        ko.components.register('Header', { require: 'Components/Header/Header' });
        ko.components.register('Footer', { require: 'Components/Footer/Footer' });

       
        ko.applyBindings();

    }, 0);

});