jQuery(document).ready(function() {
    $('.testimonials-container').backstretch("../img/3.jpg");
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(){
    	$('.testimonials-container').backstretch("resize");
    });
});
