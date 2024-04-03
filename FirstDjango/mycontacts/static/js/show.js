$(document).ready(function() {
    // Cache Header
    var $header = $('.header');
    
    // Get height of global-header to use later as starting point
    var $hHeight = $header.height();
    
    // Set initial position to current position on page
    var prevTop = $(window).scrollTop();
    
    // Scroll event
    $(window).on('scroll', function(e) {
        var st = $(this).scrollTop(); // Set scroll location
        if (st > prevTop && st > $hHeight) { 
            $header.addClass('js-global-header-scrolling');
        } else {
            $header.removeClass('js-global-header-scrolling');
        }
        prevTop = st;
    });

    // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    } 
});