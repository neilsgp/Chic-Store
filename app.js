(function(){
	var app = angular.module("store",[]);

	app.controller("storeController", function(){
		this.products = tees;
	});

	var tees = [
	{
		brand: "J-Crew",
		description : "modern oxford styled for the modern man",
		price: "$80",
		availability: false
	},
	{
		brand: "Alexander McQueen",
		description : "Queensy Style",
		price: "$90",
		availability: true
	},
	{
		brand: "Calvin Klein",
		description : "Spinning like DJ Calvin",
		price: "$180",
		availability: false
	},
	{
		brand: "Acne Studios",
		description : "Modern fuccboi clothing",
		price: "$125",
		availability: true
	},
	{
		brand: "Topman",
		description : "Top of the line stuff",
		price: "$100",
		availability: false
	}]

})();
