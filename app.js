(function(){
	var app = angular.module("store",[]);

	app.controller("storeController", function(){
		this.products = tees;
	});

	var tees = [
	{
		brand: "J-Crew",
		description : "Modern oxford styled for the modern man",
		price: "80",
		availability: false,
		images:[
			"images/porter1.jpg",
			"images/porter2.jpg",

		]
	},
	{
		brand: "Alexander McQueen",
		description : "Queensy Style",
		price: "90",
		availability: true,
		images:[
			"images/porter3.jpg",
			"images/porter2.jpg",

		]
	},
	{
		brand: "A.P.C",
		description : "Sweet French",
		price: "180",
		availability: false,
		images:[
			"images/porter2.jpg",
			"images/porter4.jpg",

		]
	},
	{
		brand: "Acne Studios",
		description : "Modern Swedish silk",
		price: "125",
		availability: true,
		images:[
			"images/porter4.jpg",
			"images/porter3.jpg",

		]
	}]
})();
