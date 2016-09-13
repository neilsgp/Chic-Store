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

	app.controller("reviewController", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.directive("productTitle", function(){
		return{
			restrict:'A',
			templateUrl:'product-title.html'
		};
	});

	app.directive('panelList', function(){
		return{
			restrict: 'E',
			templateUrl: 'panel-list.html'
		}
	});

	app.directive("basicInfo", function(){
		return{
			restrict: 'A',
			templateUrl: "basic-info.html"
		};
	});

	app.directive("specifications", function(){
		return{
			restrict: 'A',
			templateUrl: "specifications.html"
		}
	});

	app.directive("review", function(){
		return{
			restrict: 'E',
			templateUrl: 'review.html'
		};
	});

	app.directive('display', function(){
		return{
			restrict:'E',
			templateUrl: 'display.html'
		};	
	});

    app.directive('reviewPanel', function(){
        return{
            restrict: 'E',
            templateUrl: 'review-panel.html',
            controller:function(){
                this.tab = 1;

                this.selectTab = function(setTab){
                    this.tab = setTab;
                };

                this.isSelected = function(selectTab){
                    return this.tab === selectTab;
                };
            },
            controllerAs:'panel'
        };
    });

    app.directive('gallery', function(){
        return{
            restrict: 'E',
            templateUrl: 'gallery.html',
            controller: function(){
                this.products = tees;
            },
            controllerAs:'store'
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

		],
		reviews:[{
			stars:5,
			body:"Holy Moly this thing is fab fam!",
			author: "Ana Wintour"
		},
		{
			stars:5,
			body:"Holy Moly this thing is fab fam!",
			author: "Ana Wintour"
		},
		{
			stars:5,
			body:"Holy Moly this thing is fab fam!",
			author: "Ana Wintour"
		}]
	},
	{
		brand: "Alexander McQueen",
		description : "Queensy Style",
		price: "90",
		availability: true,
		images:[
			"images/porter3.jpg",
			"images/porter2.jpg",

		],
		reviews:[{
			stars:5,
			body:"Holy Moly cool bam fam!",
			author: "Karl Lagerfield"
		}]
	},
	{
		brand: "A.P.C",
		description : "Sweet French",
		price: "180",
		availability: false,
		images:[
			"images/porter2.jpg",
			"images/porter4.jpg",

		],
		reviews:[{
			stars:5,
			body:"Holy Moly sweet fam!",
			author: "Coco Chanel"
		}]
	},
	{
		brand: "Acne Studios",
		description : "Modern Swedish silk",
		price: "125",
		availability: true,
		images:[
			"images/porter4.jpg",
			"images/porter3.jpg",

		],
		reviews:[{
			stars:5,
			body:"Holy Moly rivetting fam!",
			author: "French Montana"
		}]
	}];
})();
