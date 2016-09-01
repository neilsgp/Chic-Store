(function(){
	var app = angular.module("store",[]);

	app.controller("storeController", function(){
		this.products = tees;
	});

	app.controller("galleryController", function(){
		this.current = 0;

		this.setCurrent=function(val){
			if(val == null){
				this.current = 0;
			}
			else{
				this.current = val;
			}
		};
	});

	app.controller("panelController", function(){
		this.tab = 1;

		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(selectTab){
			return this.tab === selectTab;
		};
	});

	var tees = [
	{
		brand: "J-Crew",
		description : "Modern oxford styled for the modern man",
		price: "80",
		availability: true,
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
		availability: true,
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
