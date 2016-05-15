var require = {
	baseUrl: "./",
	paths: {
	    "text": "Lib/require/text",
	    "jquery": "Lib/jquery/jquery-2.1.3.min",
	    "knockout": "Lib/knockout/knockout-3.3.0.min",
	    "postbox": "Lib/knockout/plugins/knockout-postbox.min",
	    "bootstrap": "Lib/bootstrap/bootstrap.min",
	    "validator": "Lib/bootstrap/validator.min"
	},
	shim: {
		"jqui":
			{
			exports: "$",
			deps: ['jquery']
			},
		"bootstrap":
			{
				"deps": ['jquery']
			},
		"validator":
			{
			    "deps": ['jquery']
			}

	}
}