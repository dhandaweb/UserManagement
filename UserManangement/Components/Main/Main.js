define(["knockout", "text!./Main.html","bootstrap"], function (ko, MainTemplate) {
    function MainViewModel(params) {

        var self = this;

       
        console.log("I am calling this main component");


        return self;
    }
    return { viewModel: MainViewModel, template: MainTemplate };
});