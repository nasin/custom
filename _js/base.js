var $j = jQuery.noConflict();

var phonesPlansFlashID = "phonesPlansFlash";
isMyAccountMain = false;
var isInIFrame = ( window.location != window.parent.location ) ? true : false;

$j(document).ready(function(){


	navShopBtn = $j('#navShop');
	navPlanBtn = $j('#navPlans');
	mContainer = $j('#megaMenu');
	shpContent = $j('#shopMenu');
	plnContent = $j('#plansMenu');

	//Initialize Mega Nav
	navInit();
	$j("a.howToLink").click( function(e) {
		e.preventDefault();
		$j.colorbox({innerWidth:"885px", innerHeight: "510px", iframe:true, scrolling: false, href: $j(this).attr("href") });
	});
	// Top Nav Current Section Indicators
	if( $j('.page_help').length > 0 ) $j('#navSupport').addClass('currentTab');

	// Mini cart
	//*comment out per ND for old static html pages that still call base.js*:  cartFill();
});



/*########################### BEGIN VMU TOP NAV #################################*/
var navShopBtn, navPlanBtn, mContainer, shpContent, plnContent
var hoverDelay = 500;
var menuOpen = menuHovered = navShopHovered = navPlansHovered =  false;

function navDelayClose() {
	setTimeout(navClose,hoverDelay);
}

function navClose() {
	if( !menuHovered && !navShopHovered && !navPlansHovered ) {
		mContainer.slideUp(function(){
			menuOpen = false;
		});
		$j('#vmuTop .mainNav a').removeClass('active');
	}
}

function navInit() {
	// Navigation Shop Button Hovering
	navShopBtn.hover(
		function() {
			navShopHovered = true;
			menuOpen ? shpContent.fadeIn('fast') : shpContent.show();
			menuOpen ? plnContent.fadeOut('fast') : plnContent.hide();
			mContainer.stop().slideDown(function() {
				menuOpen = true;
				// Fix for partially opened menu freezes
				if(mContainer.css('display') == 'block')
					mContainer.animate({height: 254});
			});
			$j('#vmuTop .mainNav a').removeClass('active');
			$j(this).addClass('active');
		},
		function() {
			navShopHovered = false;
			navDelayClose();
		});

	// Navigation Plan Button Hovering
	navPlanBtn.hover(
		function() {
			navPlansHovered = true;
			menuOpen ? shpContent.fadeOut('fast') : shpContent.hide();
			menuOpen ? plnContent.fadeIn('fast') : plnContent.show();
			$j('#megaMenu:animated').stop();
			mContainer.slideDown(function() {
				menuOpen = true;
				// Fix for partially opened menu freezes
				if(mContainer.css('display') == 'block')
					mContainer.animate({height: 254});
			});
			$j('#vmuTop .mainNav a').removeClass('active');
			$j(this).addClass('active');
		},
		function() {
			navPlansHovered = false;
			navDelayClose();
		});

	// Navigation Mega Menu Button Hovering
	mContainer.hover(
		function(){
			menuHovered = true;
		},
		function(){
			menuHovered = false;
			navDelayClose();
		});

	$j('#navWhy').mouseenter(navClose);
	$j('#navSupport').mouseenter(navClose);
	$j('#navCart').mouseenter(navClose);
}
/*########################### END VMU TOP NAV #################################*/





function resizeLayer() {
	// get doc width/height (add a bit extra for non ie)
	var iOffSet = ($j.browser.msie) ? 0 : 20;
	// var iOffSet = 20;
	var iW = $j(document).width();
	var iH = $j('.outer').height() + iOffSet;

	// debug: use alert below to get calc dimensions on load
	// alert("iframe: (w:" + iW + ", h:" + iH + ")");

	// adjust size
	parent.$j.fn.colorbox.myResize(iW, iH);
}

function setupNavForLogin() {
	$j('#sign_in_overlay').hover(function () {
		$j('#nav_main4_3').addClass('hover');
		$j('#nav_main4_4').addClass('hover');
	}, function () {
		$j('#nav_main4_3').removeClass('hover');
		$j('#nav_main4_4').removeClass('hover');
	});
	
	$j('#nav_main4_3').hover(function () {
		$j('#nav_main4_4').addClass('hover');
	}, function () {
		$j('#nav_main4_4').removeClass('hover');
	});
	
	$j('#nav_main4_4').hover(function () {
		$j(this).addClass('hoverSignOut');
		$j('#nav_main4_3').addClass('hover');
	}, function () {
		$j(this).removeClass('hoverSignOut');
		$j('#nav_main4_3').removeClass('hover');
	});

	$j('.sign_in_area').hover(function () {
		if(jQuery.browser.msie == true && jQuery.browser.version == "6.0") { 
			$j('#sign_in_overlay').show().addClass('hover');
			if( $j('body').hasClass('log') ) { $j('#header').css({'marginBottom' : '1px'}); }
		} else {
		//	$j('#sign_in_overlay').slideDown('fast');
			$j('#sign_in_overlay').show().addClass('hover');
		}
 	}, function () {
		if(jQuery.browser.msie == true && jQuery.browser.version == "6.0") {
			$j('#sign_in_overlay').hide().removeClass('hover');
			if( $j('body').hasClass('log') ) { $j('#header').css({'marginBottom' : '0'}); }
		} else {
			//$j('#sign_in_overlay').slideUp('fast');
			$j('#sign_in_overlay').hide().removeClass('hover');
		}
	});

	$j('#sign_in_overlay_form').find('input').hover(function () {
		$j(this).addClass('sign_in_overlay_hover');
 	}, function () {
		$j(this).removeClass('sign_in_overlay_hover');
	}).focus(function() {
		$j(this).addClass('sign_in_overlay_focus');
	}).blur(function() {
		$j(this).removeClass('sign_in_overlay_focus');
	});
}

function initMyAccount() {

	// check for layer to auto open
	var uri = $j.url.param('o');
	if (uri) {
		$j.fn.colorbox({width:"805px", height: "500px", iframe:true, scrolling: false, href: uri});
	}

	$j('.acct_nav').each( function() {
		expandSidenav(0, $j(this));
		var _this = $j(this)
		$j(this).find('li').bind('mouseenter', function() {
			expandSidenav($j(_this).find('li').index($j(this)), $j(this).parent());
		});
	})

	$j('#ad1').hover( function() {
		$j(this).animate({
			width: '480'
		}, 300)
		$j('#ad1_expanded').fadeIn(200);
		$j('#ad1_collapsed').fadeOut(200);
	}, function() {
		$j(this).animate({
			width: '285'
		}, 300)
		$j('#ad1_expanded').fadeOut(200);
		$j('#ad1_collapsed').fadeIn(200);
	})
	
	$j('#ad2').hover( function() {
		$j(this).animate({
			width: '522'
		}, 300)
		$j('#ad2_expanded').fadeIn(200);
		$j('#ad2_collapsed').fadeOut(200);
	}, function() {
		$j(this).animate({
			width: '345'
		}, 300)
		$j('#ad2_expanded').fadeOut(200);
		$j('#ad2_collapsed').fadeIn(200);
	})
	
	$j('table').find("tr:last").addClass('last');
	$j('ul').find('li:last').addClass('last');
	$j('ul').find('li:first').addClass('first');

};
function expandSidenav(nav_index, scope) {
	if ($j(scope).find('li').eq(nav_index).hasClass('active')) { 
		
	} else {
		// $j('.acct_nav li').unbind().removeClass('hover').find('p').hide(0);
		$j(scope).find('li').removeClass('active').find('p').hide();
		$j(scope).find('li').eq(nav_index).addClass('active').find('p').fadeIn(200, function() {
			/* $j('.acct_nav li').bind('mouseenter', function() {
				expandSidenav($j('.acct_nav li').index($j(this)));
			});*/ 
		});
	}
}


function jcarousel_initCallback(carousel) {
		$j('#carousel_control_wrapper').css('width', $j('#carousel_control_wrapper').width() + 22)
		$j('.jcarousel-prev').insertBefore('.jcarousel-control');
		$j('.jcarousel-next').insertAfter('.jcarousel-control');

		$j('.jcarousel-control a').bind('click', function() {
			carousel.scroll($j.jcarousel.intval($j(this).text()));
			return false;
		});
};
function jcarousel_visibleItem(obj) {
	$j('.jcarousel-control a').removeClass('selected').eq(obj.first - 1).addClass('selected');

};



updateNavForFlash = function() {
	if (typeof(swfobject) != 'undefined') {
		if(swfobject.hasFlashPlayerVersion("9.0.0")) { 	
			if ($j('#page_phones').length || $j('#page_plangrid').length || $j('#page_familyplangrid').length || $j('#page_deals').length) {
				$j('#nav_main1_1 a').click(function() {
					getFlashMovie(phonesPlansFlashID).updateSlider('sectionPhones');
					return false;
				});
				$j('#nav_main1_2 a').click(function() {
					getFlashMovie(phonesPlansFlashID).updateSlider('sectionPlans');
					return false;
				});
				$j('#nav_main1_3 a').click(function() {
					getFlashMovie(phonesPlansFlashID).updateSlider('sectionDeals');
					return false;
				});
			}
		}
	}
}

setupPhoneGrid = function() {
	$j('#page_phones .phone').each(function () {
		var wrapper = $j(this);
		setPrice(wrapper);
		$j(wrapper).find('select').change(function () {
			setPrice(wrapper);
		});
	});
}
setPrice = function(wrapper) {
	var selectedItem = $j(wrapper).find('select').val();
	if (selectedItem) {
		$j(wrapper).find('h4').removeClass('current');
		$j(wrapper).find('#' + selectedItem).addClass('current');
	}
}
setupPhoneDetail = function() {
	$j('.page_phonedetail #selector_wrapper').each(function () {
		var wrapper = $j(this);
		setPriceDetail(wrapper);
		$j(wrapper).find('select').change(function () {
			setPriceDetail(wrapper);
		});
	});
}
setPriceDetail = function(wrapper) {
	var selectedItem = $j(wrapper).find('select').val();
	if (selectedItem) {
		$j(wrapper).find('div.detail_prices').removeClass('current');
		$j(wrapper).find('#' + selectedItem).addClass('current');
	}
}
checkForLayers = function() {
	if (jQuery.url.param("open")) {

		var urlArray = jQuery.url.param("open").split("|");
		var destinationURL = urlArray[1].replace("_amp_","&");

		switch(urlArray[0]) {
			case "accessory":
				if (destinationURL.indexOf('?') == -1) {
					tb_show(null,destinationURL+'?height=1000&width=778&TB_iframe=true',false);
				} 
				else {
					tb_show(null,destinationURL+'&height=1000&width=778&TB_iframe=true',false);
				}
				break;
			
			case "phone": 
			case "plan":
				if (destinationURL.indexOf('?') == -1) {
					tb_show(null,destinationURL+'?height=500&width=907&TB_iframe=true',false);
				}
				else {
					tb_show(null,destinationURL+'&height=500&width=907&TB_iframe=true',false);
				}
				break;
		}
	}
	
	// if the layer's been opened directly, then redirect to its default location
	if (typeof layerDefaultPage != 'undefined') {
		if (self == self.parent) {	
			if (layerDefaultPage.indexOf('?') == -1) {
				window.location.href = layerDefaultPage + '?open=' + layerURLData;
			}
			else {
				window.location.href = layerDefaultPage + '&open=' + layerURLData;
			}
		}
	}
}


navSlide = function() {
	$j("#nav").animate({"top": "+=70px"}, 500, 'jswing', fadeContent);
}
setupPanic = function() {
	$j('#panic').click(function () {
		alert('Oh no!');
		return false;
	});
}
fadeContent = function()
{
	if($j.browser.msie)
		$j('#mainContent').show(0, setMainContentHeight());
	else
		$j('#mainContent').fadeIn(700, setMainContentHeight());
}

/*
var currheight;
window.onresize = function(){
	if(currheight != document.documentElement.clientHeight)
	{
		// alert('onresize event triggered');
		setBackgroundImageSize();
		setMainContentHeight();	
	}
	currheight = document.documentElement.clientHeight;
}

$j(window).scroll(function() {
	if(typeof document.body.style.maxHeight === "undefined") { //if IE 6
		$j("#background").css("top", $j(window).scrollTop() + "px");  // fix bg for ie6
//		$j("#header").css("top", $j(window).scrollTop() + "px"); // fix header for ie6
	}
});
*/

setupBackgroundImage = function () {

	// total number of images, names backgroundN.jpg where N is a number. ie: background2.jpg
	totalBGImages = 7;
	// alert('bam');
	$j('#background img').replaceWith('<img src="/_img/background' + randomBackground() + '.jpg" alt="" />');
 	setBackgroundImageSize()
}

randomBackground = function () {

	//check for cookie
	if ($j.cookie) {
		if ($j.cookie('bg')) {
			return $j.cookie('bg');
		} else {
			randBG = parseInt(Math.random()*totalBGImages);
			$j.cookie('bg', randBG, {path: '/', domain: '.virginmobileusa.com'});
			return randBG;
		}
	}

}

setBackgroundImageSize = function() {

	var docHeight = $j(document).height();
	var docWidth = $j(document).width();
		
	// preserve aspect ratio
	var imgHeight = (docWidth/1024)*768;
	
	$j('#background img').css({width:docWidth,height:imgHeight,margin:"0 auto"}).show();

}

setMainContentHeight = function() {

	if($j(".myaccount_iframe").length) {
		resizeLayer();
	}

	$j('#mainContent').height('auto')
	// console.log('height() = ' + $j('#mainContent').height());		

	var docHeight = $j(document).height() - 200;
	
	if ($j('#TB_iframeContent').length > 0) {
		var thickboxHeight = $j('#TB_iframeContent').height();
//console.log('there is a thickbox that is ',thickboxHeight,'px tall');	
		if (thickboxHeight > docHeight) {
			docHeight = thickboxHeight;	
		}
	}
// console.log('docHeight = ' + docHeight);		
	var mainContentHeight = $j('#mainContent').height();
// console.log('mainContentHeight = ' + mainContentHeight);			
	if (mainContentHeight < docHeight) {
		$j('#mainContent').height(docHeight);
		// console.log('mainContentHeight < docHeight');	
	} else {
		// console.log('! mainContentHeight < docHeight');	
		$j('#mainContent').height('auto');	
	}

// console.log('setMainContentHeight : ' + $j('#mainContent').height());	

}

setWrapperClicks = function() {

	$j('#foreground').css('opacity', '0.5');
	
	/*$j('#nav_secondary4').click(function () {
		$j('#nav_secondary4 > a').addClass('active');
		$j('#nav_secondary4').css({'z-index': '1000'});
		$j('#nav_secondary4 ul').css('display', 'block');
		if (typeof document.body.style.maxHeight != "undefined") {//if NOT IE 6
			$j('#foreground').fadeIn('slow');
		}
		return false;
	});
	$j('#nav_secondary4 ul').bind("click", function (e){
			e.stopPropagation();
		});
		$j('#nav_secondary5').bind('click', function () {
		$j('#nav_secondary5 > a').addClass('active');
		$j('#nav_secondary5').css({'z-index': '1000'});
		$j('#nav_secondary5 ul').css('display', 'block');
 		$j('#nav_secondary5 ul li iframe').attr('src', 'https://www.virginmobileusa.com/cas/login?helioView=vmu'); 
		if (typeof document.body.style.maxHeight != "undefined") {//if NOT IE 6
			$j('#foreground').fadeIn('slow');
		}
		return false;
	});
	$j('#foreground, #nav, #container').click(function () {
		$j('#nav_secondary4 > a').removeClass('active');
		$j('#nav_secondary5 > a').removeClass('active');
		$j('#nav_secondary4').css({'z-index': ''});
		$j('#nav_secondary5').css({'z-index': ''});
		$j('#nav_secondary5 ul').css('display', 'none');
		$j('#nav_secondary4 ul').css('display', 'none');
		if (typeof document.body.style.maxHeight != "undefined") {//if NOT IE 6
			$j('#foreground').fadeOut();
		}
	});*/
}

/****************** Us-vs-Them Start ******************/
function show_compare(tracking) 
{
	var customQuerystring = "";
	
	if (document.URL.indexOf("#compare") != -1)
	{
		var compare_hash = document.URL.split('#')[1]; 
		customQuerystring = "?" + compare_hash.split(":")[1];
	}
	else
	{
		customQuerystring = tracking != null && tracking != "undefined" ? tracking : "";
	}
	 
	 var compare_url = "//uswhistleout.s3.amazonaws.com/public/widgets/VirginMobile/ComparisonWidget/ComparisonWidget.html" + customQuerystring;

	// If colorBox falters in IE8 or earlier uncomment the browser 
	// detect if to utilize a popup window instead.
	/*if (document.all && !document.addEventListener) 
	{*/
		window.open(compare_url,'_blank', 'width=1000,height=820,scrollbars=1,directories=0,status=0,toolbar=0,menubar=0,location=0');
	/*}
	else
	{*/
		/*$j.getScript('//www.virginmobileusa.com/_js/jquery/colorbox/jquery.colorbox.js', function(data, textStatus) 
		{
			$j.fn.colorbox({
				href: compare_url, 
				initialHeight: 850,
				innerWidth: 1000, 
				innerHeight: 850,
				iframe: true, 
				opacity: 0.8, 
				scrolling: false, 
				onComplete: function()
				{
				   $j("#cboxLoadedContent").css('padding-top','30px');
				   $j("#cboxLoadedContent").css('height','820px');
				}
			}); 
		});*/

		return false;  
	//} /* Uncomment if uncommenting the if..else above */
}
/****************** Us-vs-Them End ******************/

// *****************************************
// Test Drive Functions 
// *****************************************
function setupTestDrive() {
	$j(".testdrive_link").click(function(event) {
		event.preventDefault();
	
		if (this.tagName == 'A') {
			var uri = $j(this).attr('href');
		}
		else {
			var uri = $j(this).find('a').attr('href');
		}
		
		openTestDrive(uri);
	});
	if ($j.url) {
		// check for auto-open of competitor comparison layer
		var uri = $j.url.param('testdrive');
		if (uri) {
			openTestDrive('/test-drive/'+uri+'.html');
		}
	}
}
function openTestDrive(uri) {
	$j('body').append('<div id="testDriveOverlay"></div>');
	$j('body').append('<div id="testDrive"><iframe frameborder="0" scrolling="no" src="'+uri+'" name="iframe_'+new Date().getTime()+ '" id="testDriveIframe" allowtransparency="true"></iframe></div>');
	positionTestDrive();
	
	$j(window).bind('resize',positionTestDrive);
}
function closeTestDrive() {
	$j('#testDrive').remove();
	$j('#testDriveOverlay').remove();
	$j(window).unbind('resize');
}
function positionTestDrive() {
	// determine position
	var winHeight = $j(window).height();
	var testDriveHeight = 635;
	var testDriveWidth = 960;

	// keeps the top and left positions within the browser's viewport.
	posTop = Math.max(winHeight - testDriveHeight,0)/2 + $j(window).scrollTop();
		if (posTop < 0) { posTop = 0; }
	posLeft = Math.max(document.documentElement.clientWidth - testDriveWidth,0)/2 + $j(window).scrollLeft();
	$j('#testDrive').css({top: posTop, left: posLeft});
}


jQuery.fn.vAlign = function() {
	return this.each(function(i){
		var ah = $j(this).height();
		var ph = $j(this).parent().height();
		var mh = ((ph - ah) / 2) + 10;
		$j(this).css('margin-top', mh);
	});
};

jQuery.fn.setupFormField = function(theField) {
	return this.each(function() {
	
		// Save original value
		// $j(this).attr('originalValue',$j(this).val());
		
		// Add focus action (selecting field)
		$j(this).focus(function() {
			if ($j(this).val() == $j(this).attr('title')) {
				$j(this).val('');
			}
			else {
				$j(this).select();
			}
		});

		// Add blur action (moving off of field)
		$j(this).blur(function() {
			if ($j(this).val() == '') {
				$j(this).val($j(this).attr('title'));
			}
		});	
	});
}; 

jQuery.fn.setupPasswordField = function(theField) {
	return this.each(function() {
	
		// Add focus action (selecting field)
		$j(this).focus(function() {
			$j(this).addClass('hidepasswordlabel');
		});
		
		// Add blur action (moving off of field)
		$j(this).blur(function() {
			if ($j(this).val().length == 0) {
			$j(this).removeClass('hidepasswordlabel');
		}
		});
	
	});
}; 


jQuery.fn.setupHover = function() {
	return this.each(function() {
		$j(this).hover(
		function() {
			$j(this).addClass('hover');
		},
		function() {
			$j(this).removeClass('hover');
		});
	
	});
};

jQuery.fn.accordion = function() {

		return this.each(function() {
				//initialize
	
		$j(this).find('dd').hide();
		$j(this).find('dt.expanded').next('dd').show();
		
		$j(this).find('dt').each(function() {

			$j(this).click(
				function() {

						if ($j(this).hasClass('expanded')) {
							//$j(this).removeClass('expanded').next('dd').slideUp(300);
							$j(this).removeClass('expanded').next('dd').hide();

						} else {
							//$j(this).addClass('expanded').next('dd').slideDown(300);
							$j(this).addClass('expanded').next('dd').show();

						}
						//setMainContentHeight();

			});

		});
	
	});

};

 

jQuery.fn.accordion2 = function() {
	return this.each(function() {
	
		//initialize
		$j(this).find('dd').hide();
		$j(this).find('dt.expanded').next('dd').show();
		
		$j(this).find('dt').each(function() {
			$j(this).click(
			function() {
				if ($j(this).hasClass('expanded')) {
					$j(this).removeClass('expanded').next('dd').hide();
				} else {
					$j(this).addClass('expanded').next('dd').show();
				}
			});
		});
	});
}; 

jQuery.fn.setupValidation = function() {

	// $j(".validation_notice").hide();
	// $j(".validation_notice li").hide();
	
	this.submit(function() {
		// alert('submit');
		var errors = new Array();
		
		$j("input, select, textarea").removeClass("invalid");
		// passwords
		// check to see if pass1 and pass2 are long enough, then make sure they match
		
		if (($j("#password1").length > 0) && ($j("#password2").length > 0)) {
			if ( ($j("#password1").val().length < 4) || ($j("#password2").val().length < 4) || ($j("#password1").val() != $j("#password2").val()) ) {
			
				errors.push("password");
				$j("#password1").addClass("invalid");
				$j("#password2").addClass("invalid");
			
			}
		}
		
		// all other required form elements
		$j(".required").each(function() {
			// detect if it's been modified
			if ( $j(this).attr("title") == $j(this).val() || $j(this).val() == "") {
			
				// alert(this.id);
				// it hasn't, so show it's related LI
				errors.push(this.id);
				$j(this).addClass("invalid");
			}
		});
		
		// if email exists
		if ($j(".email").length > 0) {
		
			// does it have one @
			if ($j(".email").val().split("@").length == 2 ) {
				
				// does it have at least one dot in the 2nd half
				if ($j(".email").val().split("@")[1].split(".").length > 1 ) {
					
					//we're ok folks!
					
				} else {
					// alert("no dot");
					errors.push("email");
					$j(".email").addClass("invalid");
				}
			} else {
				// alert("not the right number of @'s in the address");
				errors.push("email");
				$j(".email").addClass("invalid");
			}
		}
		
		if ( errors.length > 0 ) {
			// drawErrors(errors);
			return false;
		} else {
			// alert("submitting");
			return true;
		}
	});
};

setupSBNav = function() {
	if (($j('#sbnav').length) && (typeof sbnav != "undefined")) {

		if (sbnav.length) {
			$j('#sbnav li').removeClass('current');
		}

		if (sbnav.length > 0) {
			$j('#sbnav > li').eq(sbnav[0]).addClass('current');
		}
		if (sbnav.length > 1) {
			$j('li.current ul').children('li').eq(sbnav[1]).addClass('current');//.children('a').prepend("&gt; ");
			
		}
		if (sbnav.length > 2) {
			$j('li.current li.current ul').children('li').eq(sbnav[2]).addClass('current');
		}
	}
}

setVisitor = function(type, value) {
	// get existing values
	var prospectCookieVal = $j.cookie('u_pr');
	var customerCookieVal = $j.cookie('u_cst');

	switch (type) {
		case "p":
			// set as long as there's no customer cookie
			if (customerCookieVal) {
			
				// if cookie val > 0 and value = 0, then do nothing
				if (prospectCookieVal && prospectCookieVal > 0) {
					return true;
				}
				
				// if cookie value = 1, then don't override for 4 or 7
				if (prospectCookieVal && prospectCookieVal == 1) {
					if (value != 4 && value != 7) {
						 $j.cookie('u_pr', value, {path: '/', expires: 30, domain: '.virginmobileusa.com'});
					}	
				}
				
				// otherwise, set the cookie
				else {
					 $j.cookie('u_pr', value, {path: '/', expires: 30, domain: '.virginmobileusa.com'});
				}
				
			}
						
			break;
			
		case "c":
			// delete prospect cookie
			if (prospectCookieVal) {
				$j.cookie('u_pr', null, {path: '/'});
			}
			
			// set value
			$j.cookie('u_cst', value, {path: '/', expires: 150, domain: '.virginmobileusa.com'});
			
			break;
	}
}	

tabs = function(tabs, tabItems) {
	$j(tabs + ' li').click(function() {
		$j(this).siblings().removeClass('current');
		$j(this).addClass('current');
		$j(this).parent().parent().find(tabItems).removeClass('current');
		clickedID = $j(this).find('a').attr('href');
		$j(clickedID).addClass('current');
		setMainContentHeight();
		return false;
	});
}; 


function getFlashMovie(movieName) {
	if (navigator.appName.indexOf("Microsoft") != -1) {             
		return window[movieName];         
	} 
	else {             
		return document[movieName];         
	}     
}     




updateLinks = function() {
	
	// Set the target of any links that should open in a new window
	$j("a[rel='new']").attr('target','_blank');
	
	// Any element that has the class .clickable, watch for click and take user to first href's URL.
	$j(".clickable").click(
		function () {
			var thisHref = $j(this).find('a:first');
			var destinationLink = thisHref.attr('href');

			if (thisHref.attr('target') == '_blank') {
				window.open(destinationLink);
				return false;
			}
			else if (thisHref.hasClass('thickbox')) {
				tb_show(null,destinationLink,false);					
				return false;
			}
			else {
				document.location = destinationLink;	
			}
		}
	);
}

addMouseOver = function() {
	// Format any external URLs to go through the exit interstitial
	$j(".mouseout").hover(
		function () {
			$j(this).removeClass('mouseout').addClass('mouseover');
		}, 
		function () {
			$j(this).removeClass('mouseover').addClass('mouseout');
		}
	);
}


checkLoggedIn = function() {

	if ($j.cookie || $j('body').hasClass('log_pre') || $j('body').hasClass('log_post')) {
		if ($j.cookie('u_log')) {
			cookieValue = $j.cookie('u_log');
			
			//alert(cookieValue);
			if (cookieValue == "pre") {
				$j('body').addClass('log');
				$j('body').addClass('log_pre');
			} else if (cookieValue == "post") {
				$j('body').addClass('log');
				$j('body').addClass('log_post');
			} 
		}

		// if body doesn't have the 'log' class at this point, then exit
		if (!($j('body').hasClass('log'))) {
			return;	
		}
		
		// Change Behavior of TopUp Nav Link
		//$j('#topupNav>a').addClass('my_account_overlay');

		/* temporarily removed for 2012 build
		
		
		// get user name from cookie or variable (if on my acct page directly)
		if (typeof nameString != 'undefined') {
			var displayName = Base64.decode(nameString);
		}
		else if ($j.cookie('u_log_disp')) {
			var displayName = Base64.decode($j.cookie('u_log_disp'));	
		}
		else {
			var displayName = 'My Account';	
		}
		// update user name
		$j('#signInText').html(displayName);

		// add log out menu item
		$j('#nav_main4_3').after('<li id="nav_main4_4"><a class="sign_in_area">Log Out</a></li>');
		$j("#nav_main4_4").setupHover();
		
		var sign_in_overlay_html = "";
		
		var chage_plan_link = "";
		
		///If the user is on COS211, the change plan link has to be a 'change offer' link and link to prepareAWBolton.do
		///If the user does not have u_cst_info cookie, the change plan/offer link will not show up
		///The u_cst_info cookie holds the user's COS and the user's phone model, like COS211|VML101
		if($j.cookie){
			  if ($j.cookie('u_cst_info')) {
			  	var customer_info_array_string = $j.cookie('u_cst_info'); //should be like 'COS211|VML101'
				var customer_info_array =  customer_info_array_string.split("|"); ///should be like COS211,VML101
				var plan_cos = customer_info_array[0]; //should be like COS211
					if(plan_cos == 'COS211'){
						chage_plan_link = '<li><a class="my_account_overlay" href="${base_url_prepaid}/myaccount/prepareAWBolton.do">// Change My Offer</a></li>';
					}
					else{
						chage_plan_link = '<li><a class="my_account_overlay" href="${base_url_prepaid}/myaccount/migrationOverview.do">// Change My Plan</a></li>';
					}
			  }
		}
		
		// If this is my account main, then the links are different
		if (isMyAccountMain) {
			$j("#nav_main4_2 a").addClass("my_account_overlay");
			
			sign_in_overlay_html = '<li><p>My Shortcuts</p><div class="clearfix"><ul class="left"><li><a href="${base_url_prepaid}/myaccount/home.do">// My Account Home</a></li><li><a href="${base_url_prepaid}/myaccount/topup.do">// Top-Up </a></li><li><a class="my_account_overlay" href="${base_url_prepaid}/myaccount/accountHistory.do">// Account Activity</a></li><li><a class="my_account_overlay" href="${base_url_prepaid}/myaccount/paymentHistory.do">// Payment History</a></li></ul><ul class="right">' + chage_plan_link + '<li><a href="/help-support">// Get Support</a></li><li><a href="/cell-phone-plans/beyond-talk-plans.jsp">// Learn About My Plan</a></li><li><a href="/cell-phone-plans/beyond-talk-plans.jsp">// Learn About My Phone</a></li></ul></div></li>';
		}
		else {
			sign_in_overlay_html = '<li><p>My Shortcuts</p><div class="clearfix"><ul class="left"><li><a href="${base_url_prepaid}/myaccount/home.do">// My Account Home</a></li><li><a href="${base_url_prepaid}/myaccount/topup.do">// Top-Up </a></li><li><a href="${base_url_prepaid}/myaccount/accountHistory.do">// Account Activity</a></li><li><a href="${base_url_prepaid}/myaccount/paymentHistory.do">// Payment History</a></li></ul><ul class="right">' + chage_plan_link + '<li><a href="/help-support">// Get Support</a></li><li><a href="/cell-phone-plans/beyond-talk-plans.jsp">// Learn About My Plan</a></li><li><a href="/cell-phone-plans/beyond-talk-plans.jsp">// Learn About My Phone</a></li></ul></div></li>';
		}
		
		$j("#sign_in_overlay").html(sign_in_overlay_html);
		
	
		
		//alert("this is the signin overlay html " + sign_in_overlay_html);
		
		if ($j('body').hasClass('log_pre')) {
			// replace login/my account link
			// $j('#nav_main4_1').unbind('click').find('a').attr("href", "https://www1.virginmobileusa.com/myaccount/home.do");
				
			// add logout link
			$j('#nav_main4_4').find('a').attr("href", "${base_url_prepaid}/login/logout.do");
			
			$j('#nav_main4_4').bind('click', function () {
				$j.cookie('u_log', '', {path: '/', domain: '.virginmobileusa.com', expires: -100});
			});
		}
		else if ($j('body').hasClass('log_post')) {
			// replace login/my account link
			$j('#nav_main4_1').unbind('click').find('a').attr("href", "https://sso.virginmobileusa.com");
				
			// add logout link
			$j('#nav_main4_4').find('a').attr("href", "https://sso.virginmobileusa.com/cas/logout");
			
			$j('#nav_main4_4').bind('click', function () {
				$j.cookie('u_log', '', {path: '/', domain: '.virginmobileusa.com', expires: -100});
			});
			
		}


		*/

		if ($j('body').hasClass('log_pre')) {
			// add logout link
			$j('#logout').find('a').attr("href", "${msdp_myaccount}/login/logout.do?loginRoutingInfo=${msdp_url}/");
			
			$j('#logout').bind('click', function () {
				$j.cookie('u_log', '', {path: '/', domain: '.virginmobileusa.com', expires: -100});
			});
		}
		else if ($j('body').hasClass('log_post')) {
			// add logout link
			$j('#logout').find('a').attr("href", "https://sso.virginmobileusa.com/cas/logout");
			
			$j('#logout').bind('click', function () {
				$j.cookie('u_log', '', {path: '/', domain: '.virginmobileusa.com', expires: -100});
			});
			
		}


	} 
}



function resizeiFrame(iframeContentHeight){

	// alert('resizeiFrame: ' + iframeContentHeight);
	$j('#TB_iframeContent').height(iframeContentHeight);

}


setupNavpromo = function() {
	$j('#navpromo').hover(function(){
		$j('#navpromo').css({backgroundPosition: "0 -30px"});
		$j('#navpromo_content').fadeIn(100);
		$j('#slider_overlay_header').css('display','none');
		$j('#logo_click_overlay').css('display','none');
	},function(){
		$j('#navpromo').css({backgroundPosition: "0 0"});
		$j('#navpromo_content').fadeOut(100);
		$j('#slider_overlay_header').css('display','block');
		$j('#logo_click_overlay').css('display','block');
	});
	
}



	// FAQ Pagination on Paylo/Beyond Talk Phone/Plan Pages 
	setNumberOfPages = function(numberOfRows) {
		if (!numberOfRows) { var numberOfRows = 10; }
		
		var faqCount = $j('#faqList>li').length;
		var numOfPages = Math.ceil(faqCount/numberOfRows);

		$j('#pageList span').html(numOfPages);
		$j('#total_questions').html(faqCount);
		
		// remove any option items more than the first
		$j('#pagination option:gt(0)').remove();

		for (var i=2; i<=numOfPages; i++) {
			$j('#pagination').append('<option value="'+i+'">Page '+i+'</option>');	
		}
	}
	
	paginate = function(startRow, numberOfRows) {
		if (!numberOfRows) { 
			var numberOfRows = 10;
		}

		// lt and gt are zero based, so subtract from the start and end
		var start = startRow - 1;
		var end = start + (numberOfRows-1);
		
		var startNum = startRow;
		var endNum = startRow + (numberOfRows-1);
		var faqCount = $j('#faqList>li').length;

		if (endNum > faqCount) { endNum = faqCount; }

		// show all 
		$j('#faqList>li').show();
		
		// hide any prior to the startrow
		$j('#faqList>li:lt('+start+')').hide();
		
		// hide any above startrow+19
		$j('#faqList>li:gt('+end+')').hide();
		
		// update which are being shown
		$j('#question_range').html(startNum+'-'+endNum);
	}	
	

	function formatFooterTweets(twitters) { 
		var statusHTML = [];
		var counter = 0;
		var maxTweets = 3;
		
		for (var i=0; i<twitters.length; i++){
			// remove replies (anything that starts with an @
			if (twitters[i].text.charAt(0) != '@' && counter < maxTweets) {
				// increment counter 
				counter++;
				
				// format reply
				var username = twitters[i].user.screen_name;
				var status = twitters[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
					return '<a target="_blank" href="'+url+'">'+url+'</a>';
				}).replace(/\B@([_a-z0-9]+)/ig, function(reply) {
					return  reply.charAt(0)+'<a target="_blank" href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
				});
				
				statusHTML.push(status);
			}
		}
		
		// output results
		var formattedTweets = '<li id="quotes"><!-- . --></li>'
			+ '<li class="listtitle">Latest Tweets</li>' 
			+ '<li id="latesttweet"><div id="tweetquote"><!-- . --></div>' 
			+ statusHTML[0] + '</li>'
			+ '<li class="dottedline"><!-- . --></li>' 
			+ '<li>' + statusHTML[1] + '</li>'
			+ '<li class="dottedline"><!-- . --></li>' 
			+ '<li>' + statusHTML[2] + '</li>' 
			+ '<li class="dottedline"><!-- . --></li>' 
			+ '<li id="followus"><a target="_blank" href="http://twitter.com/virginmobileus">// Follow Us On Twitter</a></li>';

		document.getElementById('tweets').innerHTML = formattedTweets;
	}
	
	function faqBind() {
		if ($j('#faqList').length > 0) {
			if(typeof document.body.style.maxHeight === "undefined") { // if IE6
				$j('#faqList li h4 a').bind('click', function(){
					if($j(this).attr('href') != "#" && $j(this).attr('href') != "") { // fix so that FAQ links actually work
						// window.location thing
					}
					var targetListItem = $j(this).parents('li');
					if($j(this).hasClass('expandedChild')) {
						$j(this).removeClass('expandedChild');
						targetListItem.removeClass('expanded').css({
							'background' : 'url(../_img/beyond_talk/list_arrow.png) no-repeat scroll 2px 5px transparent'
						}).find('div.body').slideUp('slow');
					} else {
						$j(this).addClass('expandedChild');
						targetListItem.addClass('expanded').css({
							'background' : 'url(../_img/beyond_talk/list_arrow_down.png) no-repeat scroll 0 8px transparent'
						}).find('div.body').slideDown('slow');
					}
				
					return false;
				});
			} else { // if NOT IE6
				$j('#faqList').bind('click', function(e){
					var target = e.target, // e.target grabs the node that triggered the event.
						$target = $j(target);  // wraps the node in a jQuery object
					if (target.nodeName === 'A') {
						if($j(target).attr('href') != "#" && $j(target).attr('href') != "") { // fix so that FAQ links actually work
							window.location($j(target).attr('href'));
						}
						var targetListItem = $j(target).parents('li');
						if(targetListItem.hasClass('expanded')) {
							targetListItem.removeClass('expanded').css({
								'background' : 'url(../_img/beyond_talk/list_arrow.png) no-repeat scroll 2px 5px transparent'
							}).find('div.body').slideUp('slow');
						} else {
							targetListItem.addClass('expanded').css({
								'background' : 'url(../_img/beyond_talk/list_arrow_down.png) no-repeat scroll 0 8px transparent'
							}).find('div.body').slideDown('slow');
						}
					}
					return false;
				});
			}
		}
	}

	clickTab = function(theTabID) {
		$j('#'+theTabID).click();	
	}
	
	
	setupSweetStrip = function() {
		if( $j.browser.msie && $j.browser.version == "6.0") {
			offset = 1;
			$j("#sweet_strip").width($j(window).width()); 
		
			$j('#sweet_strip').animate({
				'bottom': 0
			}, 500, function() {
				$j(this).css({
					"bottom" : (parseInt($j(document).height()) - parseInt($j(window).height()) - parseInt($j(window).scrollTop()) - offset) + "px"
				}).fadeIn(400);
			});
		
			$j(window).resize(function() {
				$j('#sweet_strip').css({
				"bottom" : (parseInt($j(document).height()) - parseInt($j(window).height()) - parseInt($j(window).scrollTop()) - offset) + "px"
				});
			});
		
			$j(window).scroll(function () { 
				$j('#sweet_strip').css({
				"bottom" : (parseInt($j(document).height()) - parseInt($j(window).height()) - parseInt($j(window).scrollTop()) - offset) + "px"
				});
			});
		}
		
		$j('#sweet_strip_header').click(function()
		{
			if(!$j(this).hasClass('sweet_strip_expanded'))
			{
				$j(this).addClass('sweet_strip_expanded')
				$j('#sweet_strip_inner_wrapper').slideDown(400);
			}
			else
			{
				$j(this).removeClass('sweet_strip_expanded')
				$j('#sweet_strip_inner_wrapper').slideUp(400);
			}
		});

		$j('#sweet_strip').mouseleave(function()
		{
			if($j('#sweet_strip_header').hasClass('sweet_strip_expanded'))
			{
				$j('#sweet_strip_header').removeClass('sweet_strip_expanded');
				$j('#sweet_strip_inner_wrapper').slideUp(400);
			}
		});
		
	}

	
	
/*These scripts are for switching style sheets on the fly*/
/*I use them in the My Account pages */

function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
	  
	  //alert(title);
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

/*window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);*/

	
// ***************************************************
//  MotionPoint Language Switch Code
// ***************************************************
var MP = {
<!-- mp_trans_disable_start --> 
  Version: '1.0.22',
  Domains: {'es':'espanol.virginmobileusa.com'},	
  SrcLang: 'en',
<!-- mp_trans_disable_end -->
  UrlLang: 'mp_js_current_lang',
  SrcUrl: unescape('mp_js_orgin_url'),
<!-- mp_trans_disable_start --> 	
  init: function(){
    if (MP.UrlLang.indexOf('p_js_')==1) {
      MP.SrcUrl=window.top.document.location.href;
      MP.UrlLang=MP.SrcLang;
  }
},
getCookie: function(name){
  var start=document.cookie.indexOf(name+'=');
  if(start < 0) return null;
  start=start+name.length+1;
  var end=document.cookie.indexOf(';', start);
  if(end < 0) end=document.cookie.length;
  while (document.cookie.charAt(start)==' '){ start++; }
  return unescape(document.cookie.substring(start,end));
},
setCookie: function(name,value,path,domain){
  var cookie=name+'='+escape(value);
  if(path)cookie+='; path='+path;
  if(domain)cookie+='; domain='+domain;
  var now=new Date();
  now.setTime(now.getTime()+1000*60*60*24*365);
  cookie+='; expires='+now.toUTCString();
  document.cookie=cookie;
},
switchLanguage: function(lang){
  if(lang!=MP.SrcLang){
    var script=document.createElement('SCRIPT');
    script.src=location.protocol+'//'+MP.Domains[lang]+'/'+MP.SrcLang+lang+'/?1023749632;'+encodeURIComponent(MP.SrcUrl);
	document.body.appendChild(script);
  } else if(lang==MP.SrcLang && MP.UrlLang!=MP.SrcLang){
    var script=document.createElement('SCRIPT');
    script.src=location.protocol+'//'+MP.Domains[MP.UrlLang]+'/'+MP.SrcLang+MP.UrlLang+'/?1023749634;'+encodeURIComponent(location.href);
	document.body.appendChild(script);
  }
  return false;
},
switchToLang: function(url) {
  window.top.location.href=url; 
}
<!-- mp_trans_disable_end --> 	
};	

/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/
 
var Base64 = {
 
	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
 
	// public method for encoding
	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = Base64._utf8_encode(input);
 
		while (i < input.length) {
 
			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);
 
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
 
			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}
 
			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
 
		}
 
		return output;
	},
 
	// public method for decoding
	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;
 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
 
		while (i < input.length) {
 
			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));
 
			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;
 
			output = output + String.fromCharCode(chr1);
 
			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
 
		}
 
		output = Base64._utf8_decode(output);
 
		return output;
 
	},
 
	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	},
 
	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;
 
		while ( i < utftext.length ) {
 
			c = utftext.charCodeAt(i);
 
			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}
 
		}
 
		return string;
	}

}

function isInt(x) {
   var y=parseInt(x);
   if (isNaN(y)) return false;
   return x==y && x.toString()==y.toString();
}
    


// ***************************************************
//  KEEP THIS STUFF AT THE BOTTOM OF THE FILE
// ***************************************************

$j(document).ready(function () {
	
	if ($j("#sweet_strip").length) {
		setupSweetStrip();	
	}
	
	if($j(".jcarousel-wrapper").length) {
		$j(".jcarousel-wrapper").jcarousel({
				scroll: 1,
				// auto : 5,
				itemVisibleInCallback: jcarousel_visibleItem,
				initCallback: jcarousel_initCallback
		});
	}

	// If this is a my account layer
	if($j(".myaccount_iframe").length) {
		// check to ensure opening in layer
		if (!isInIFrame) {
			window.location.href = '/myaccount/home.do?o='+window.location.pathname;
		}
		else {
			// resize layer
			$j(window).bind("load", function() {
				resizeLayer();
			});
		}
	}

	$j("input[type='text']").setupFormField();
	$j("textarea").setupFormField();
	$j("#nav li").setupHover();
	
	$j("input[type='password']").setupPasswordField();
	
	setupNavForLogin();
	
	setWrapperClicks();
//	setupBackgroundImage();
//	setMainContentHeight();
	
	/*
	if (($j('body').hasClass('reveal')) && ((typeof document.body.style.maxHeight != "undefined"))) {
		$j('html').css({'height':'100%','margin-bottom':'1px'});
		setTimeout("navSlide()", 1000);
	} else {
		$j('#nav').css('top','0');
		$j('#mainContent').css('display','block');
	}
	*/

	$j('form.validate').setupValidation();
	$j('.accordion').accordion(); 

	setupPanic();

	setupSBNav();

	if (jQuery.url) {
		checkForLayers();
	}
	
	tabs('.visual_tabs', '.visual_tab_item');
	tabs('.inline_tabs', '.inline_tab_item');

	setupPhoneGrid();
	setupPhoneDetail();

	updateNavForFlash();
	
	updateLinks();
	addMouseOver();
	
	faqBind();
	
	checkLoggedIn();
	
	setupTestDrive();
/*
	$j(window).load(function () {
		setMainContentHeight();
	})
*/

	$j('.dottedlinelist li').hover(function(){
		$j(this).next('.dottedline').css('background','none');
		$j(this).prev('.dottedline').css('background','none');
	},function(){
		$j(this).next('.dottedline').css('background','url(../_img/header/medblock_dottedline.png) left top no-repeat');
		$j(this).prev('.dottedline').css('background','url(../_img/header/medblock_dottedline.png) left top no-repeat');
	})

	setupNavpromo();
	
	if ($j.fn.colorbox) {
		
		
		///clear the style sheet for color box in case it's set to myaccount_dark for the my account overlay windows.
		setActiveStyleSheet(null);
		
		$j(".phone_details_overlay").colorbox({
			width: "900px",
			height: "600px",
			iframe:true,
			onComplete: function() {
				$j('#colorbox').addClass('gallery');
			},
			onCleanup: function() {
				$j('#colorbox').removeClass('gallery');
			}
		});
		$j(".my_account_overlay").click(function() {
			if (this.tagName == 'A') {
				var uri = $j(this).attr('href');
			}
			else {
				var uri = $j(this).find('a').attr('href');
			}
			$j.fn.colorbox({width:"805px", height: "500px", iframe:true, scrolling: false, href: uri});																			 
			return false;
		})
		$j(".overlay_close_handler").click(function() {
			$j.fn.colorbox.close();
			return false;
		});

		$j(".competitor_comparison_link").click(function(event) {
			
			
			event.preventDefault();
			$j.fn.colorbox({width:"930px", height: "500px", iframe:true, scrolling: false, href: "/competitor-comparison.html"});
		});
	} else if(document.domain == "virginmobileusa.com") {
		$j.getScript('/_js/jquery/colorbox/jquery.colorbox.js', function(data, textStatus) {
			$j(".competitor_comparison_link").click(function(event) {
				event.preventDefault();
				$j.fn.colorbox({width:"930px", height: "500px", iframe:true, scrolling: false, href: "/competitor-comparison.html?d=1"});
			});
		});
	}
});


//  --------------------------
//    USER ACCOUNT MIGRATION 
//  --------------------------
//  For questions regarding this code contact victor.valle@sprint.com 


//  jQuery cookie plugin minified
//(function(e,t,n){function i(e){return e}function s(e){return decodeURIComponent(e.replace(r," "))}var r=/\+/g;var o=e.cookie=function(r,u,a){if(u!==n){a=e.extend({},o.defaults,a);if(u===null){a.expires=-1}if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setDate(l.getDate()+f)}u=o.json?JSON.stringify(u):String(u);return t.cookie=[encodeURIComponent(r),"=",o.raw?u:encodeURIComponent(u),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=o.raw?i:s;var h=t.cookie.split("; ");for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");if(c(v.shift())===r){var m=c(v.join("="));return o.json?JSON.parse(m):m}}return null};o.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)!==null){e.cookie(t,null,n);return true}return false}})(jQuery,document)

$j(document).ready(function() {
	//console.log("base_vds.js");

	// Changes links of the top header links in the pages
	overrideNavClick("#topNavTrackOrder");
	overrideNavClick("#topNavActivate");
	overrideNavClick("#topNavTopup");
	overrideNavClick("#topNavMyAccount");
	overrideNavClick("#topNavSignOut");
	//overrideNavClick("#bottomNavContactUs");
	overrideNavClick("#helpSupportMyAccount");
	overrideNavClick("#cellPhoneAccessoriesPageMyAccount");

	// Intercepts log out link and deletes the user account cookie
	//$j("#topNavSignOut").click(function() {
	//	 $j.cookie("user_account_type", null, {domain: ".virginmobileusa.com", path: "/"});
	//});

	//Intercepts the click of 'add to cart' in the phone grid page
	$j(".btn_addtocart").click(function() {
		overrideClick(this);
		return false;
	});

	//Intercepts the click of 'show cart' in the header
	$j("#navCart").click(function() {
		overrideClick(this);
		return false;
	});

	function overrideClick(linkElement) {
		var shopURL = $j(linkElement).attr("href");
		
		var newShopURL = processShopURL(shopURL);
		
		//console.log("Shop redirected to: " + newShopURL);
		document.location.href = newShopURL;
	}
	
	function overrideNavClick(linkElement) {
		var newNavURL = processNavURL($j(linkElement).attr("href"));
		//console.log(linkElement + " redirected to: " + newNavURL);
		$j(linkElement).attr("href", newNavURL);
	}

	//Intercepts the click of 'add to cart' of the phone details page
	$j(".button_add_to_cart").click(function() {
			var shopForm = $j(this).parent().parent();
			var shopURL = shopForm.attr("action");
			
			var newShopURL = processShopURL(shopURL);
			
			//console.log("Shop form redirecting to: " + newShopURL);
			shopForm.attr("action", newShopURL);
			shopForm.submit();
			return false;
	});
});

function processNavURL(navURL) {
	try {
		var currentDomain = "${currentShopValue}";
		var defaultDomain = "${defaultNavDomain}";
		var feaDomain = "${feaShopDomain}";
		var legacyDomain = "${legacyShopDomain}";

		var cookieName = "user_account_type";
		var cookieValue = $j.cookie(cookieName);

		if(cookieValue == "fea") {
			return navURL.replace(currentDomain, feaDomain);
		} else {
			if(cookieValue == "legacy") {
				return navURL.replace(currentDomain, legacyDomain);
			} else {
				return navURL.replace(currentDomain, defaultDomain);
			}
		}
	} catch(err) {
		return navURL;
	}
}

function processShopURL(shopURL) {
	var currentDomain = "${currentShopValue}";
	var defaultDomain = "${defaultShopDomain}";
	var feaDomain = "${feaShopDomain}";
	var legacyDomain = "${legacyShopDomain}";

	var cookieName = "user_account_type";
	var cookieValue = $j.cookie(cookieName);

	if(cookieValue == "fea") {
		return shopURL.replace(currentDomain, feaDomain);
	} else {
		if(cookieValue == "legacy") {
			return shopURL.replace(currentDomain, legacyDomain);
		} else {
			return shopURL.replace(currentDomain, defaultDomain);
		}
	}
}


// Account migration code end ************************




/*########################### BEGIN VMU CART ICON #################################*/

function cartFill() {
	
	var cart_string = $j.cookies.get('virgin_cart');

	if (cart_string == null || cart_string == "") return;
		
	
	
	var cart_array = cart_string;
	var html = []
	var totalPrice = $j.cookies.get('virgin_cart_total');
	var totalItems = cart_array.length;
	var totalQty = 0;
	
	if(totalItems > 0){
		$j('#navCart').addClass('full');
	}
	
	$j('#miniCart').hover(function(e){
		//var clkTrack = $j('#navCart').attr('onclick');
		if(totalItems >= 3){
			$j(this).addClass('cartOpen').find('.cartItems').slideDown('fast', function(){

				$j('.scroll').tinyscrollbar({ sizethumb: 130 });	

			});
		}else{
			$j('.scroll').addClass('disable');
			$j(this).addClass('cartOpen').find('.cartItems').slideDown('fast');
		}
		
	},function () {

		$j(this).removeClass('cartOpen').find('.cartItems').hide();
		
		//$j('#navCart').off('click', function(e){ e.preventDefault(); });
	});




	for (i=0; i<totalItems; i++) {
		
		var itemarray = cart_array[i].toString().split(',');
		totalQty = totalQty + parseInt(itemarray[4]);
		// console.log(totalQty);
		
		if (itemarray[0] == 'phone') {
			var itemImg = '<img src="/_img/_phones/'+itemarray[2]+'/minicart.png" />';
		}
		else {
			var itemImg = '<img src="/_img/accessories/PREPAID_ACCESSORIES/thumb-'+itemarray[2]+'.png" width="47" height="47" />';
		}
		
		if (parseInt(itemarray[4]) != 1){
			var itemTotal = Number(parseFloat(itemarray[3].replace("$",""))*parseInt(itemarray[4])).toFixed(2);
			html.push('<li><div class="itemThumb">'+itemImg+'</div>'
				+ '<div class="itemInfo"><h5>'+itemarray[1]+'</h5>'
				+ '<div class="itemQty">Qty: <span>'+itemarray[4]+'</span></div><a class="itemAction" href="${msdp_url}/#!/shop/checkout/">// Edit or Remove</a></div>'
				+ '<div class="itemPrices"><span class="itemPrice">$'+itemTotal+'</span><span class="unitPrice">'+itemarray[3]+' each</span></div></li>');
		} else {
			html.push('<li><div class="itemThumb">'+itemImg+'</div>'
				+ '<div class="itemInfo"><h5>'+itemarray[1]+'</h5>'
				+ '<div class="itemQty">Qty: <span>'+itemarray[4]+'</span></div><a class="itemAction" href="${msdp_url}/#!/shop/checkout/">// Edit or Remove</a></div>'
				+ '<div class="itemPrices"><span class="itemPrice">'+itemarray[3]+'</span></div></li>');
		}
	}
	
	if (totalItems > 0){
		$j('#navCart').css({'width': '126px', 'paddingLeft': '30px', 'backgroundImage': 'none'})
		$j('#navCart').prepend('<span>'+totalQty+'</span>');
	}
		
	$j('.cartItems ul.items').html(html.reverse().join(""));

	$j('#minicart_price').html(totalPrice);
}


/*########################### END VMU CART ICON #################################*/



/*################## BEGIN PLUGINS REQUIRED FOR MINI CART ########################*/

/**
 * Copyright (c) 2005 - 2010, James Auldridge
 * All rights reserved.
 *
 * Licensed under the BSD, MIT, and GPL (your choice!) Licenses:
 *  http://code.google.com/p/cookies/wiki/License
 *
 */
var jaaulde=window.jaaulde||{};jaaulde.utils=jaaulde.utils||{};jaaulde.utils.cookies=(function(){var resolveOptions,assembleOptionsString,parseCookies,constructor,defaultOptions={expiresAt:null,path:'/',domain:null,secure:false};resolveOptions=function(options){var returnValue,expireDate;if(typeof options!=='object'||options===null){returnValue=defaultOptions;}else
{returnValue={expiresAt:defaultOptions.expiresAt,path:defaultOptions.path,domain:defaultOptions.domain,secure:defaultOptions.secure};if(typeof options.expiresAt==='object'&&options.expiresAt instanceof Date){returnValue.expiresAt=options.expiresAt;}else if(typeof options.hoursToLive==='number'&&options.hoursToLive!==0){expireDate=new Date();expireDate.setTime(expireDate.getTime()+(options.hoursToLive*60*60*1000));returnValue.expiresAt=expireDate;}if(typeof options.path==='string'&&options.path!==''){returnValue.path=options.path;}if(typeof options.domain==='string'&&options.domain!==''){returnValue.domain=options.domain;}if(options.secure===true){returnValue.secure=options.secure;}}return returnValue;};assembleOptionsString=function(options){options=resolveOptions(options);return((typeof options.expiresAt==='object'&&options.expiresAt instanceof Date?'; expires='+options.expiresAt.toGMTString():'')+'; path='+options.path+(typeof options.domain==='string'?'; domain='+options.domain:'')+(options.secure===true?'; secure':''));};parseCookies=function(){var cookies={},i,pair,name,value,separated=document.cookie.split(';'),unparsedValue;for(i=0;i<separated.length;i=i+1){pair=separated[i].split('=');name=pair[0].replace(/^\s*/,'').replace(/\s*$/,'');try
{value=decodeURIComponent(pair[1]);}catch(e1){value=pair[1];}if(typeof JSON==='object'&&JSON!==null&&typeof JSON.parse==='function'){try
{unparsedValue=value;value=JSON.parse(value);}catch(e2){value=unparsedValue;}}cookies[name]=value;}return cookies;};constructor=function(){};constructor.prototype.get=function(cookieName){var returnValue,item,cookies=parseCookies();if(typeof cookieName==='string'){returnValue=(typeof cookies[cookieName]!=='undefined')?cookies[cookieName]:null;}else if(typeof cookieName==='object'&&cookieName!==null){returnValue={};for(item in cookieName){if(typeof cookies[cookieName[item]]!=='undefined'){returnValue[cookieName[item]]=cookies[cookieName[item]];}else
{returnValue[cookieName[item]]=null;}}}else
{returnValue=cookies;}return returnValue;};constructor.prototype.filter=function(cookieNameRegExp){var cookieName,returnValue={},cookies=parseCookies();if(typeof cookieNameRegExp==='string'){cookieNameRegExp=new RegExp(cookieNameRegExp);}for(cookieName in cookies){if(cookieName.match(cookieNameRegExp)){returnValue[cookieName]=cookies[cookieName];}}return returnValue;};constructor.prototype.set=function(cookieName,value,options){if(typeof options!=='object'||options===null){options={};}if(typeof value==='undefined'||value===null){value='';options.hoursToLive=-8760;}else if(typeof value!=='string'){if(typeof JSON==='object'&&JSON!==null&&typeof JSON.stringify==='function'){value=JSON.stringify(value);}else
{throw new Error('cookies.set() received non-string value and could not serialize.');}}var optionsString=assembleOptionsString(options);document.cookie=cookieName+'='+encodeURIComponent(value)+optionsString;};constructor.prototype.del=function(cookieName,options){var allCookies={},name;if(typeof options!=='object'||options===null){options={};}if(typeof cookieName==='boolean'&&cookieName===true){allCookies=this.get();}else if(typeof cookieName==='string'){allCookies[cookieName]=true;}for(name in allCookies){if(typeof name==='string'&&name!==''){this.set(name,null,options);}}};constructor.prototype.test=function(){var returnValue=false,testName='cT',testValue='data';this.set(testName,testValue);if(this.get(testName)===testValue){this.del(testName);returnValue=true;}return returnValue;};constructor.prototype.setOptions=function(options){if(typeof options!=='object'){options=null;}defaultOptions=resolveOptions(options);};return new constructor();})();(function(){if(window.jQuery){(function($){$.cookies=jaaulde.utils.cookies;var extensions={cookify:function(options){return this.each(function(){var i,nameAttrs=['name','id'],name,$this=$(this),value;for(i in nameAttrs){if(!isNaN(i)){name=$this.attr(nameAttrs[i]);if(typeof name==='string'&&name!==''){if($this.is(':checkbox, :radio')){if($this.attr('checked')){value=$this.val();}}else if($this.is(':input')){value=$this.val();}else
{value=$this.html();}if(typeof value!=='string'||value===''){value=null;}$.cookies.set(name,value,options);break;}}}});},cookieFill:function(){return this.each(function(){var n,getN,nameAttrs=['name','id'],name,$this=$(this),value;getN=function(){n=nameAttrs.pop();return!!n;};while(getN()){name=$this.attr(n);if(typeof name==='string'&&name!==''){value=$.cookies.get(name);if(value!==null){if($this.is(':checkbox, :radio')){if($this.val()===value){$this.attr('checked','checked');}else
{$this.removeAttr('checked');}}else if($this.is(':input')){$this.val(value);}else
{$this.html(value);}}break;}}});},cookieBind:function(options){return this.each(function(){var $this=$(this);$this.cookieFill().change(function(){$this.cookify(options);});});}};$.each(extensions,function(i){$.fn[i]=this;});})(window.jQuery);}})();


/* tiny scroll */
/*
 * Tiny Scrollbar
 * http://www.baijs.nl/tinyscrollbar/
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/gpl-2.0.php
 *
 * Date: 13 / 08 / 2012
 * @version 1.81
 * @author Maarten Baijs
 *
 */
;( function( $ ) 
{
    $.tiny = $.tiny || { };

    $.tiny.scrollbar = {
        options: {
                axis         : 'y'    // vertical or horizontal scrollbar? ( x || y ).
            ,   wheel        : 40     // how many pixels must the mouswheel scroll at a time.
            ,   scroll       : true   // enable or disable the mousewheel.
            ,   lockscroll   : true   // return scrollwheel to browser if there is no more content.
            ,   size         : 'auto' // set the size of the scrollbar to auto or a fixed number.
            ,   sizethumb    : 'auto' // set the size of the thumb to auto or a fixed number.
            ,   invertscroll : false  // Enable mobile invert style scrolling
        }
    };

    $.fn.tinyscrollbar = function( params )
    {
        var options = $.extend( {}, $.tiny.scrollbar.options, params );
        
        this.each( function()
        { 
            $( this ).data('tsb', new Scrollbar( $( this ), options ) ); 
        });

        return this;
    };

    $.fn.tinyscrollbar_update = function(sScroll)
    {
        return $( this ).data( 'tsb' ).update( sScroll ); 
    };

    function Scrollbar( root, options )
    {
        var oSelf       = this
        ,   oWrapper    = root
        ,   oViewport   = { obj: $( '.viewport', root ) }
        ,   oContent    = { obj: $( '.overview', root ) }
        ,   oScrollbar  = { obj: $( '.scrollbar', root ) }
        ,   oTrack      = { obj: $( '.track', oScrollbar.obj ) }
        ,   oThumb      = { obj: $( '.thumb', oScrollbar.obj ) }
        ,   sAxis       = options.axis === 'x'
        ,   sDirection  = sAxis ? 'left' : 'top'
        ,   sSize       = sAxis ? 'Width' : 'Height'
        ,   iScroll     = 0
        ,   iPosition   = { start: 0, now: 0 }
        ,   iMouse      = {}
        ,   touchEvents = 'ontouchstart' in document.documentElement
        ;

        function initialize()
        {
            oSelf.update();
            setEvents();

            return oSelf;
        }

        this.update = function( sScroll )
        {
            oViewport[ options.axis ] = oViewport.obj[0][ 'offset'+ sSize ];
            oContent[ options.axis ]  = oContent.obj[0][ 'scroll'+ sSize ];
            oContent.ratio            = oViewport[ options.axis ] / oContent[ options.axis ];

            oScrollbar.obj.toggleClass( 'disable', oContent.ratio >= 1 );

            oTrack[ options.axis ] = options.size === 'auto' ? oViewport[ options.axis ] : options.size;
            oThumb[ options.axis ] = Math.min( oTrack[ options.axis ], Math.max( 0, ( options.sizethumb === 'auto' ? ( oTrack[ options.axis ] * oContent.ratio ) : options.sizethumb ) ) );
        
            oScrollbar.ratio = options.sizethumb === 'auto' ? ( oContent[ options.axis ] / oTrack[ options.axis ] ) : ( oContent[ options.axis ] - oViewport[ options.axis ] ) / ( oTrack[ options.axis ] - oThumb[ options.axis ] );
            
            iScroll = ( sScroll === 'relative' && oContent.ratio <= 1 ) ? Math.min( ( oContent[ options.axis ] - oViewport[ options.axis ] ), Math.max( 0, iScroll )) : 0;
            iScroll = ( sScroll === 'bottom' && oContent.ratio <= 1 ) ? ( oContent[ options.axis ] - oViewport[ options.axis ] ) : isNaN( parseInt( sScroll, 10 ) ) ? iScroll : parseInt( sScroll, 10 );
            
            setSize();
        };

        function setSize()
        {
            var sCssSize = sSize.toLowerCase();

            oThumb.obj.css( sDirection, iScroll / oScrollbar.ratio );
            oContent.obj.css( sDirection, -iScroll );
            iMouse.start = oThumb.obj.offset()[ sDirection ];

            oScrollbar.obj.css( sCssSize, oTrack[ options.axis ] );
            oTrack.obj.css( sCssSize, oTrack[ options.axis ] );
            oThumb.obj.css( sCssSize, oThumb[ options.axis ] );
        }

        function setEvents()
        {
            if( ! touchEvents )
            {
                oThumb.obj.bind( 'mousedown', start );
                oTrack.obj.bind( 'mouseup', drag );
            }
            else
            {
                oViewport.obj[0].ontouchstart = function( event )
                {   
                    if( 1 === event.touches.length )
                    {
                        start( event.touches[ 0 ] );
                        event.stopPropagation();
                    }
                };
            }

            if( options.scroll && window.addEventListener )
            {
                oWrapper[0].addEventListener( 'DOMMouseScroll', wheel, false );
                oWrapper[0].addEventListener( 'mousewheel', wheel, false );
                oWrapper[0].addEventListener( 'MozMousePixelScroll', function( event ){
                    event.preventDefault();
                }, false);
            }
            else if( options.scroll )
            {
                oWrapper[0].onmousewheel = wheel;
            }
        }

        function start( event )
        {
            $( "body" ).addClass( "noSelect" );

            var oThumbDir   = parseInt( oThumb.obj.css( sDirection ), 10 );
            iMouse.start    = sAxis ? event.pageX : event.pageY;
            iPosition.start = oThumbDir == 'auto' ? 0 : oThumbDir;
            
            if( ! touchEvents )
            {
                $( document ).bind( 'mousemove', drag );
                $( document ).bind( 'mouseup', end );
                oThumb.obj.bind( 'mouseup', end );
            }
            else
            {
                document.ontouchmove = function( event )
                {
                    event.preventDefault();
                    drag( event.touches[ 0 ] );
                };
                document.ontouchend = end;        
            }
        }

        function wheel( event )
        {
            if( oContent.ratio < 1 )
            {
                var oEvent = event || window.event
                ,   iDelta = oEvent.wheelDelta ? oEvent.wheelDelta / 120 : -oEvent.detail / 3
                ;

                iScroll -= iDelta * options.wheel;
                iScroll = Math.min( ( oContent[ options.axis ] - oViewport[ options.axis ] ), Math.max( 0, iScroll ));

                oThumb.obj.css( sDirection, iScroll / oScrollbar.ratio );
                oContent.obj.css( sDirection, -iScroll );

                if( options.lockscroll || ( iScroll !== ( oContent[ options.axis ] - oViewport[ options.axis ] ) && iScroll !== 0 ) )
                {
                    oEvent = $.event.fix( oEvent );
                    oEvent.preventDefault();
                }
            }
        }

        function drag( event )
        {
            if( oContent.ratio < 1 )
            {
                if( options.invertscroll && touchEvents )
                {
                    iPosition.now = Math.min( ( oTrack[ options.axis ] - oThumb[ options.axis ] ), Math.max( 0, ( iPosition.start + ( iMouse.start - ( sAxis ? event.pageX : event.pageY ) ))));
                }
                else
                {
                     iPosition.now = Math.min( ( oTrack[ options.axis ] - oThumb[ options.axis ] ), Math.max( 0, ( iPosition.start + ( ( sAxis ? event.pageX : event.pageY ) - iMouse.start))));
                }

                iScroll = iPosition.now * oScrollbar.ratio;
                oContent.obj.css( sDirection, -iScroll );
                oThumb.obj.css( sDirection, iPosition.now );
            }
        }
        
        function end()
        {
            $( "body" ).removeClass( "noSelect" );
            $( document ).unbind( 'mousemove', drag );
            $( document ).unbind( 'mouseup', end );
            oThumb.obj.unbind( 'mouseup', end );
            document.ontouchmove = document.ontouchend = null;
        }

        return initialize();
    }

}(jQuery));

/*################## END PLUGINS REQUIRED FOR MINI CART ########################*/
