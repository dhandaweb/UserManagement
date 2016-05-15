define(["knockout", "text!./UserDetail.html", "postbox", "bootstrap", "jquery", "validator"], function (ko, UserDetailTemplate) {
    function UserDetailViewModel(params) {

        var self = this;

        self.States = ["VIC", "QLD", "TAS" , "WA", "SA", "NSW"];
        self.SalaryValues = ["$70k", "$80k", "$90k", "$100k"];

        self.SelectedContact = ko.observable({});

        
        ko.postbox.subscribe("selelctedContact", function (newValue) {
            self.SelectedContact(newValue);
            
        }, this);


        self.SaveDetails = function () {
           
            ko.postbox.publish("UpdateDetail", self.SelectedContact);
        }


        $('#myForm').validator();



        return self;
    }
    return { viewModel: UserDetailViewModel, template: UserDetailTemplate };
});