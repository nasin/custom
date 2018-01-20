//divToFadeIn JQUERY SELECTOR STRING

//Methods------------------------

//overlay(divToFadeIn)
//fades in overlay and divToFadeIn


//fadeOutOverlay()
//removes overlay and background
function Overlay() {
	
	this.divToFadeIn = null;
	this.overlayOn = false;
	_this = this;
	
	//check to see the overlay div doesn't already exist
	if(jQuery('#overlay').length === 0) { 
		jQuery('body').append('<div id="overlay"></div>');
	}
	
	this.overlay = function(divToFadeIn) {
		if(this.overlayOn === true) {
			this.replaceOverlay(divToFadeIn);
		} else {
			this.divToFadeIn = jQuery(divToFadeIn);
			//IE 6 does not support position:fixed
			if(jQuery.browser.msie && jQuery.browser.version <= 6) {
				jQuery('#overlay').css('position', 'absolute');
			}
			
			jQuery('#overlay').css({'opacity': 0, 'display':'block'});
			jQuery('#overlay').fadeTo('fast', .75);
			this.fadeInDiv(this.divToFadeIn);
			
			this.overlayOn = true;
		}
	}
	
	this.fadeInDiv = function(divToFadeIn) {
		//Fixes IE and Firefox not computing correct margin top
		if(jQuery.browser.msie || jQuery.browser.mozilla) {
			var top = (jQuery(window).height() / 2) - (this.divToFadeIn.outerHeight() / 2);
			this.divToFadeIn.css({'margin-top':'0', 'top':top});
		}
		//IE 6 and 7 do not support display:table
		if(jQuery.browser.msie && jQuery.browser.version < 8) {
			this.divToFadeIn.css({'opacity': 0, 'display':'block'});
		} else {
			this.divToFadeIn.css({'opacity': 0, 'display':'table'}); 
		}
		
		//IE 6 does not support position:fixed
		if(jQuery.browser.msie && jQuery.browser.version <= 6) {
			this.divToFadeIn.css('position', 'absolute');
		}
		jQuery(this.divToFadeIn).fadeTo('slow', 1);	
	}
	
	this.replaceOverlay = function(nextDiv) {
		jQuery(this.divToFadeIn).fadeTo('slow', 0, function(){	
			_this.divToFadeIn = jQuery(nextDiv);	
			_this.fadeInDiv(_this.divToFadeIn);									
		});	
	}
	
	this.fadeOutOverlay = function() {
		jQuery('#overlay').fadeTo('fast', .0).hide();
		jQuery(this.divToFadeIn).fadeTo('slow', 0).hide();
		this.overlayOn = false;
	}
}