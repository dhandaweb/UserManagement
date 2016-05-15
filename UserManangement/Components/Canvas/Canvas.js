define(["knockout", "text!./Canvas.html", "postbox", "bootstrap","jquery"], function (ko, CanvasTemplate) {
    function CanvasViewModel(params) {

        var self = this;
        self.SelectedContact = ko.observable(null);

        var list = [
            {
                FirstName: "Dharmidner ",
                LastName: "Dhanda",
                JObId: "23454",
                CurrentEmployed: "Yes",
                AvaliableOn: "2016-05-10",
                Email: "dhandaweb@gmail.com",
                StreetAd: "43 lewis st, Melbourne, ",
                State: "VIC",
                CurrentSalary: "$80k",
                DesiredSalary: "$100k"
            },
            {
                FirstName: "Sunny ",
                LastName: "Dhanda",
                JObId: "23535454",
                CurrentEmployed: "No",
                AvaliableOn: "2016-06-24",
                Email: "hunny.dhanda@gmail.com",
                StreetAd: "44 parsons, Melbourne, ",
                State: "QLD",
                CurrentSalary: "$70k",
                DesiredSalary: "$110k"
            },
            {
                FirstName: "Jatinder ",
                LastName: "Dhanda",
                JObId: "254",
                CurrentEmployed: "Yes",
                AvaliableOn: "2016-05-14",
                Email: "allltimesdharminder@gmail.com",
                StreetAd: "cranbourne, Melbourne, ",
                State: "TAS",
                CurrentSalary: "$90k",
                DesiredSalary: "$95k"
            }

        ];
       
        self.User  = function (obj) {
            var self = this;
           
            self.FirstName = ko.observable(obj.FirstName).extend({ required: "Please enter a first name", logChange: "first name" });
            self.LastName = ko.observable(obj.LastName);
            self.JObId = ko.observable(obj.JObId);
            self.CurrentEmployed = ko.observable(obj.CurrentEmployed);
            self.AvaliableOn = ko.observable(obj.AvaliableOn);
            self.Email = ko.observable(obj.Email);
            self.StreetAd = ko.observable(obj.StreetAd);
            self.State = ko.observable(obj.State);
            self.CurrentSalary = ko.observable(obj.CurrentSalary);
            self.DesiredSalary = ko.observable(obj.DesiredSalary);
        }

        self.List = ko.observableArray([new self.User(list[0]), new self.User(list[1]), new self.User(list[2])]);
   
        self.Edit = function () {
            self.SelectedContact(this);
           $("#myModal").modal()
            ko.postbox.publish("selelctedContact", this);
        }

        ko.postbox.subscribe("UpdateDetail", function (newValue) {
            var updatelist = self.List().map(function (item) {
              
                if (item.JObId === newValue.JObId) item = newValue;
                return item;
            });
            self.List(updatelist);
          
        }, this);

        return self;
    }
    return { viewModel: CanvasViewModel, template: CanvasTemplate };
});