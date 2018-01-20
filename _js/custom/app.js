var slider_data = [{
	key:0,
	id:"talk",
	label:"Mins",
	increments: [
		{ units:20, price:0 },
		{ units:250, price:300 },
		{ units:500, price:600 },
		{ units:750, price:800 },
		{ units:1000, price:950 },
		{ units:1250, price:1150 },
		{ units:1500, price:1300 },
		{ units:1750, price:1450 },
		{ units:2000, price:1500 },
        { units:2250, price:1600 },
        { units:2500, price:1750 },
        { units:2750, price:1900 },
        { units:3000, price:2100 },
        { units:3500, price:2450 },
        { units:4000, price:2800 },
        { units:4500, price:3150 },
        { units:5000, price:3500 }
		]
	},
	{
	key:1,
	id:"text",
	label:"Texts",
	increments:[
		{ units:20, price:0 },
		{ units:250, price:250 },
		{ units:500, price:450 },
		{ units:750, price:650 },
		{ units:1000, price:800 },
		{ units:1250, price:900 },
		{ units:1500, price:1000 },
		{ units:1750, price:1100 },
		{ units:2000, price:1200 },
		{ units:2250, price:1300 },
		{ units:2500, price:1350 },
		{ units:2750, price:1400 },
		{ units:3000, price:1500 },
		{ units:3500, price:1700 },
		{ units:4000, price:1900 },
		{ units:4500, price:2100 },
		{ units:5000, price:2300 }

		]
	},
	{
	key:2,
	id:"data",
	label:"MB",
	increments:[
		{ units:0, price:0 },
		{ units:20, price:140 },
		{ units:250, price:800 },
		{ units:500, price:1350 },
		{ units:750, price:1600 },
		{ units:1024, price:1850 },
		{ units:1536, price:2400 },
		{ units:2048, price:2800 },
		{ units:2560, price:3150 },
		{ units:3072, price:3400 },
		{ units:3584, price:3750 },
		{ units:4096, price:4100 },
		{ units:4608, price:4350 },
		{ units:5120, price:4600 },
		{ units:5632, price:4800 },
		{ units:6144, price:5250 }
		]
	}
	

];
          
     
     


	var app = angular.module('slider',['ui.router','ngRoute']);
	
	 app.config(function($stateProvider, $urlRouterProvider,$routeProvider,$locationProvider){
		
		 
		      $urlRouterProvider
                .when('/custom-control/', '/custom-control')
                .when('/custom-share/', '/custom-share')
                .when('/custom-coverage-map/', '/custom-coverage-map')
                .otherwise("/custom-rates");
      		
      		
	 	
	 		 $stateProvider
		        .state('great-value', {
		            url: "/custom-rates",
		            templateUrl: "/custom/custom-rates/views/home.html"
		        })
	          
		        .state('incredible-control', {
		            url: "/custom/custom-control",
		            templateUrl: "/custom/custom/views/control.html"
		        })
	          .state('super-flexible', {
		            url: "/custom/custom-share",
		            templateUrl: "/custom/custom/views/flexible.html"
		        })
		        .state('custom-coverage-map', {
		            url: "/custom/custom-coverage-map",
		            templateUrl: "/custom/custom/views/coverage.html"
		        });
            
     });
    
		
	app.controller('CarouselController',function($scope, $http, $interpolate, $log) {
		
		
		$scope.logger = $log;
	  
	  	$scope.item_width = 117;
	  	
		$scope.carousels = slider_data;
		
		//alert($scope.carousels);
		
	  	$scope.visible_items ={
	  		talk:0,
	  		text:0,
	  		data:0
	  	};
	  	
	  	$scope.people_settings = [
	  		{talk:null,text:null,data:null},
	  		{talk:0,text:0,data:0},
	  		{talk:1,text:1,data:2},
	  		{talk:3,text:2,data:3},
	  		{talk:3,text:6,data:5},
	  		{talk:5,text:10,data:6},
	  		{talk:8,text:13,data:7}
	  		];
	  		
	  	$scope.current_people_setting = {val:1};
	  	
		$scope.moving = {val:false};
		
		$scope.monthly_price = 6.98;
		
		$scope.line_fee = 6.98;
		
		$scope.visible_talk = {val:0};
		$scope.visible_text ={val:0};
		$scope.visible_data = {val:0};
		
		$scope.updateData = function(){
			
			$scope.visible_talk.val = $scope.visible_items.talk;
			$scope.visible_text.val = $scope.visible_items.text;
			$scope.visible_data.val = $scope.visible_items.data;
		};
		
		$scope.total_price = function(){

		 	if($scope.carousels.length ===3){
		 		
		 		var carousels = $scope.carousels;
			 	
			 	var talk_index = $scope.visible_items.talk;
			 	var text_index = $scope.visible_items.text;
			 	var data_index = $scope.visible_items.data;
			 	
			 	var talk_price = $scope.carousels[0].increments[talk_index].price;
			 	var text_price = $scope.carousels[1].increments[text_index].price;
			 	var data_price = $scope.carousels[2].increments[data_index].price;
			 	
			 	var talk_increment = $scope.carousels[0].increments[talk_index].units;
			 	var text_increment = $scope.carousels[1].increments[text_index].units;
			 	var data_increment = $scope.carousels[2].increments[data_index].units;
			 	}
			 	
			 	$scope.monthly_price = ( ((talk_price + text_price + data_price) /100) + ($scope.line_fee * $scope.current_people_setting.val) ).toFixed(2);
			 	
		 		return $scope.monthly_price;
		 	
		 };
		 
		$scope.$watch('current_people_setting', function(newVal, oldVal, scope) {
			if (newVal !== oldVal) {
			}
		});
		
		$scope.$watch('visible_talk', function(newVal, oldVal, scope) {
	        if (newVal !== oldVal) {
	          $scope.total_price();
	        }
 	 	},true);
 	 	$scope.$watch('visible_text', function(newVal, oldVal, scope) {
	        if (newVal !== oldVal) {
	          $scope.total_price();
	        }
 	 	},true);
 	 	$scope.$watch('visible_data', function(newVal, oldVal, scope) {
	        if (newVal !== oldVal) {
	          $scope.total_price();
	        }
 	 	},true);
 	 });
 	 
 	 app.directive("animateOnLoad",function($parse){
 	  	return {
 	  		restrict:'A',
 	  		scope:true,
 	  		link:function(scope, element, attributes){
 	  		
	 	  			var end_point = '-=' + attributes.animateOnLoad * scope.item_width;
	 	  			
	 	  			var current_carousel = element.parent().parent();
	 	  			var current_carousel_list = current_carousel.find("ul");
	 	  		
	 	  			current_carousel_list.animate({'left':end_point},300, function(){
	 	  			
		  				var current_carousel_id = current_carousel.attr("id"); //talk, text or data
		  				var index= current_carousel.attr("key");
					
						var visible_item = scope.visible_items[current_carousel_id];
						
						if(parseInt(attributes["animateOnLoad"]) > 0){
			  				prev_control = current_carousel.find(".jcarousel-control-prev");
			  				html_for_prev = '<a class="jcarousel-button-prev"><!--.--></a>' + current_carousel_list.children("li:eq(" + (visible_item-1) + ")").html();
			  				prev_control.html(html_for_prev);
			  				prev_control.removeClass("inactive");
			  			}
			  			next_control = current_carousel.find(".jcarousel-control-next");
		  				html_for_next = '<a class="jcarousel-button-next"><!--.--></a>' + current_carousel_list.children("li:eq(" + parseInt(visible_item + 1 ) + ")").html();
		  				next_control.html(html_for_next);
					});
					
			}
		};
 	});
 	
     app.directive("groupAnimator",function($parse){
 	  
 	  	return {
 	  		restrict:'A',
 	  		scope:true,
 	  		link:function(scope, element, attributes){
 	  			
 	  			element.bind("click", function(e) {
 	  				
 	  				var class_to_remove = "people" + scope.current_people_setting.val;
 	  				var class_to_add = "people" + attributes.people;
	 	  			
	 	  			var people_amount = attributes.people;
	 	  			
	 	  			scope.current_people_setting.val  = people_amount;
	 	  			
	 	  			var current_talk_position = scope.visible_items.talk;
	 	  			var current_text_position = scope.visible_items.text;
	 	  			var current_data_position = scope.visible_items.data;
	 	  			
	 	  			var new_talk_position = scope.people_settings[people_amount].talk;
	 	  			var new_text_position = scope.people_settings[people_amount].text;
	 	  			var new_data_position = scope.people_settings[people_amount].data;
	 	  			
	 	  			var slider_indexes = []; //talk, text, data
	 	  			
	 	  			slider_indexes.push(scope.people_settings[people_amount].talk);
				 	slider_indexes.push(scope.people_settings[people_amount].text);
				 	slider_indexes.push(scope.people_settings[people_amount].data);
				 	
				 	var new_positions = [];
				 	
				 	new_positions.push(new_talk_position);
	 	  			new_positions.push(new_text_position);
	 	  			new_positions.push(new_data_position);
				 	
				 	scope.visible_items.talk = new_talk_position;
				 	scope.visible_items.text = new_text_position;
				 	scope.visible_items.data = new_data_position;
				 	
				 	var move_directions = [];
				 	var moves_to_make = [];
				 	
				 	var talk_direction = current_talk_position < new_talk_position ? "forward" : "backward";
				 	var text_direction = current_text_position < new_text_position ? "forward" : "backward";
				 	var data_direction = current_data_position < new_data_position ? "forward" : "backward";
				 	
				 	var talk_moves = (talk_direction == "forward") ? (new_talk_position-current_talk_position) : (current_talk_position - new_talk_position);
				 	var text_moves=  (text_direction == "forward") ? (new_text_position-current_text_position) : (current_text_position - new_text_position);
				 	var data_moves = (data_direction == "forward") ? (new_data_position-current_data_position) : (current_data_position - new_data_position);
				 	
				 	move_directions.push(talk_direction);
				 	move_directions.push(text_direction);
				 	move_directions.push(data_direction);
				 	
				 	moves_to_make.push(talk_moves);
				 	moves_to_make.push(text_moves);
				 	moves_to_make.push(data_moves);
				 	
				 	element.parent().find("div").removeClass("selected");
				 	element.parent().parent().find("#people").removeClass(class_to_remove);
				 	element.parent().parent().find("#people").addClass(class_to_add);
				 	element.addClass("selected");
				 	
				 	element.parent().parent().parent().parent().find("ul.sliderlist").each(function(index){
				 		
				 		var end_point = 0;
				 		
				 		if(move_directions[index] == "forward"){
				 			end_point = '-=' + moves_to_make[index] * scope.item_width; //moves in a negative direction to move "forward"
				 		}
				 		if(move_directions[index] == "backward"){
				 			end_point = '+=' + moves_to_make[index] * scope.item_width; //moves in a positive direction to move "backward"
				 		}
				 		
				 		jQuery(this).animate({'left':end_point},300, function(){
		 	  			
		 	  				var current_carousel =  jQuery(this).parent().parent(); //<div id="talk" class="jcarousel-wrapper" key="0">
		 	  				var current_carousel_id = current_carousel.attr("id"); //talk, text or data
		 	  				var current_carousel_list = current_carousel.find("ul.sliderlist");
		 	  				
			  				var visible_item = scope.visible_items[current_carousel_id];
						
							if(parseInt(slider_indexes[index]) > 0){
				  				prev_control = current_carousel.find(".jcarousel-control-prev");
				  				html_for_prev = '<a class="jcarousel-button-prev"><!--.--></a>' + current_carousel_list.children("li:eq(" + (visible_item-1) + ")").html();
				  				prev_control.html(html_for_prev);
				  				prev_control.removeClass("inactive");
				  			}
				  			if(parseInt(slider_indexes[index]) == 0){
				  					//console.log("visible item in ",current_carousel_id,":",visible_item);
			  						//console.log("slider_indexes[index] ",slider_indexes[index]);
				  					prev_control = current_carousel.find(".jcarousel-control-prev");
				  					html_for_prev = '<a class="jcarousel-button-prev"><!--.--></a>';
				  					prev_control.html(html_for_prev);
				  					prev_control.addClass("inactive");
				  			}
				  			
				  				next_control = current_carousel.find(".jcarousel-control-next");
		  						html_for_next = '<a class="jcarousel-button-next" ><!--.--></a>' + current_carousel_list.children("li:eq(" + parseInt(visible_item + 2 ) + ")").html();
		  						//console.log("next html ",html_for_next);
		  						next_control.html(html_for_next);
		  						next_control.removeClass("inactive");
				  			
				  			
						});
				 	});
				 	
				 	scope.$apply(function(){
	                    //$parse returns a getter function to be executed against an object
	                    var fn = $parse(attributes.sliderAction);
	                    //In our case, we want to execute the statement in confirmAction i.e. 'add()' against the scope which this directive is bound
	                    //Because the scope is a child scope, not an isolated scope, the prototypical inheritance of scopes will mean that it will eventually find a 'add' function bound against a parent's scope
	                    fn(scope, {$event : e});
	                });
	         	 });
		    }
		};
 	  });

 app.directive("sliderControl",function($parse){
 	   	  	return {
 	  		restrict:'A',
 	  		scope:true,
			link:function(scope, element, attributes){
	 	  		 var current_control = element;
	 	  		 var direction = attributes.direction;
	 	  		
		 	  	 current_control.bind("click", function(e) {
				     
				    	e.preventDefault(); 
					    var current_carousel = element.parent();
					    var current_carousel_id = element.parent().attr("id");
				  		var prev_control = element.parent().find('.jcarousel-control-prev');//jQuery("#" + current_carousel_id +"  .jcarousel-control-prev");
					    var next_control = element.parent().find('.jcarousel-control-next');//jQuery("#" + current_carousel_id +" .jcarousel-control-next");
				  		var current_carousel_list = element.parent().find('ul');//current_carousel_id + "-list";
				  		var index= current_carousel.attr("key");
				  		var visible_item = scope.visible_items[current_carousel_id];
				  		var list_width = current_carousel_list.width();
					  	var list_pos = current_carousel_list.position();
					  	var list_pos_left = list_pos.left;
					  	var list_length = parseInt(scope.carousels[index].increments.length);
					  	var stop_point = 0;
				  		var last_item = 0;
				  		var html_for_prev = "";
				  		var html_for_next = "";
				   		
				   		
			 	  		
				  		if(direction=="prev"){
				  			next_control.removeClass("inactive");
							stop_point = 1;
			  				last_item = 0;
			   				
			  				if(visible_item == stop_point){
					 		 	prev_control.addClass("inactive");
			    			}
			    			if( visible_item > 0 && scope.moving.val ==false){
			  					scope.moving.val = true;
			 					
			  					num_for_prev_visible_item = parseInt(visible_item - 2 );
					  			num_for_next_visible_item = visible_item; 
					 			
					  			if(num_for_prev_visible_item < 0){
					  				html_for_prev = '<a class="jcarousel-button-prev"><!--.--></a>';
					  			}
					  			else{
					  				html_for_prev = '<a class="jcarousel-button-prev"><!--.--></a>' + current_carousel_list.children("li:eq(" + parseInt(visible_item - 2 ) + ")").html();

					  			}
					 			
					 			
					  			html_for_next =  '<a class="jcarousel-button-next"><!--.--></a>' + current_carousel_list.children("li:eq(" + parseInt(visible_item) + ")").html();
					 			
					  			prev_control.html(html_for_prev);
					  			next_control.html(html_for_next);
					 			
					  			current_carousel_list.animate({'left':'+=' + scope.item_width + ''},300,function(){
					  				scope.moving.val = false;
					  				scope.selected_increment = "HI";
					  			});
					 		 	scope.visible_items[current_carousel_id] = visible_item - 1;
					   		 }
			 	  			
				  		}
				  		if(direction=="next"){
				  			prev_control.removeClass("inactive");
				  			initial_html_for_next = '<a class="jcarousel-button-next"><!--.--></a>' + current_carousel_list.children("li:eq(" + parseInt(visible_item + 2 ) + ")").html();
				  			stop_point = (list_length-1); ///16-1=15 
				  			last_item = (list_length-1);///16-1=15
				   			
				  			if(visible_item == (stop_point-1)){ ///if the visible item is 14, then remove the next control
								next_control.addClass("inactive");
							}
							if( visible_item < (last_item) && scope.moving.val ==false){ ///if the visible item is less than 15
								
					  			scope.moving.val = true;
					 			
					  			num_for_prev_visible_item = visible_item;
					  			num_for_next_visible_item = parseInt(visible_item + 2 );
					 			
					  			html_for_prev = '<a class="jcarousel-button-prev"><!--.--></a>' + current_carousel_list.children("li:eq(" + visible_item + ")").html();
					 			
					  			if(num_for_next_visible_item == list_length){
					  				html_for_next = '<a class="jcarousel-button-next"><!--.--></a>';
					  			}
					  			else{
					  				html_for_next = '<a class="jcarousel-button-next"><!--.--></a>' + current_carousel_list.children("li:eq(" + parseInt(visible_item + 2 ) + ")").html();

					  			}
					 			
					  			prev_control.html(html_for_prev);
					  			next_control.html(html_for_next);
					  			current_carousel_list.animate({'left':'-=' + scope.item_width + ''},300,function(){
					  				scope.moving.val = false;
					  			});
					 		 	scope.visible_items[current_carousel_id] = visible_item + 1;
					   		 }
					  		 
					  		 
				  		}
			 	  		
				  		scope.$apply(function(){
			                    //$parse returns a getter function to be executed against an object
			                    var fn = $parse(attributes.sliderAction);
			                    //In our case, we want to execute the statement in confirmAction i.e. 'add()' against the scope which this directive is bound
			                    //Because the scope is a child scope, not an isolated scope, the prototypical inheritance of scopes will mean that it will eventually find a 'add' function bound against a parent's scope
			                    fn(scope, {$event : e});
			                });
			 	  		
				  	});
		  	}
 	  	};
 	  });

