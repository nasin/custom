	var $j = jQuery.noConflict();
	var isInIFrame = ( window.location != window.parent.location ) ? true : false;	

	// if not in iframe, then redirect to home page
	if (!isInIFrame) {
		var currentURL = window.location;
		// window.location.href = '/about/cell-phone-service.html?comparison=1';	
	}
	
	var $_GET = {};

	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
	    function decode(s) {
	        return decodeURIComponent(s.split("+").join(" "));
	    }

	    $_GET[decode(arguments[1])] = decode(arguments[2]);
	});
	
	if($_GET['d'] == 1) {
		document.domain = "virginmobileusa.com";
	}

	// default values for which plan shows at start
	var selectedPhone = "moto_triumph";
	var selectedPlan = "cos301";
	
	$j(document).ready(function () {
		showSelectedPhoneAndPlan();
					
		// fix PNGs for IE6
		$j(document).pngFix(); 
		
		// color rows
		$j(".competitorRowsContainer tbody tr:nth-child(odd)").addClass("odd");
		$j(".competitorRowsContainer tbody tr:nth-child(even)").addClass("even");
 
		$j('.changePhone li').hover(
			function() {
				$j(this).addClass('hover').css('cursor','pointer');	
			}, 
			function() {
				$j(this).removeClass('hover').css('cursor','auto');	
			}						
		);
		
		$j('.changePhone div').hover(
			function() {
				$j(this).find('ul').show();
				$j(this).find('a').addClass('hover');
			}, 
			function() {
				$j(this).find('ul').hide();
				$j(this).find('a').removeClass('hover');
			}
		);
	
		$j('.planList>li').hover(
			function() {
				$j(this).addClass('hover').css('cursor','pointer');	
			}, 
			function() {
				$j(this).removeClass('hover').css('cursor','auto');	
			}						
		);
	
		$j('.changePlan div').hover(
			function() {
				$j(this).find('ul').show();
				$j(this).find('a').addClass('hover');
			}, 
			function() {
				$j(this).find('ul').hide();
				$j(this).find('a').removeClass('hover');
			}
		);
		
		$j('.changePhone li').click(function() {
			selectedPhone = $j(this).attr('id');
			showSelectedPhoneAndPlan();
		});
	
		$j('.planList>li').click(function() {
			selectedPlan = $j(this).attr('id');
			showSelectedPhoneAndPlan();
		});

		$j('.changePhone a, .changePlan a').click(function(e) {
			e.preventDefault();
		});

	});
	
	showSelectedPhoneAndPlan = function() {
		var tableToShow = '#' + selectedPhone + "_" + selectedPlan;
		$j('.compTableContainer').hide();
		$j(tableToShow).show();

		// reposition disclaimer 
		var disclaimerHeight = $j('.compTableContainer:visible .vmuRowContainer').height() + $j('.compTableContainer:visible .competitorRowsContainer').height() + 25;
		$j('#disclaimer').css('margin-top',disclaimerHeight+'px');

		if (isInIFrame) {
			resizeLayer();
		}
	}
	
	resizeLayer = function() {
		
		// get doc width/height (add a bit extra for non ie)
		var iOffSet = ($j.browser.msie) ? 0 : 60;
		var iH = $j(document).height() + iOffSet;

		// adjust size
		parent.$j.colorbox.resize({'height': iH });
	}