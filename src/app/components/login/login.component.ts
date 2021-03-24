import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Preloader
	$('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(333);

    /*---------------------------------------------------
  Carousel (Owl Carousel)
----------------------------------------------------- */

$(".owl-carousel").each(function (index) {
 var a = $(this);
$(this).owlCarousel({
 autoplay: a.data('autoplay'),
 autoplayTimeout: a.data('autoplaytimeout'),
 autoplayHoverPause: a.data('autoplayhoverpause'),
 loop: a.data('loop'),
 speed: a.data('speed'),
 nav: a.data('nav'),
 dots: a.data('dots'),
 autoHeight: a.data('autoheight'),
 autoWidth: a.data('autowidth'),
 margin: a.data('margin'),
 stagePadding: a.data('stagepadding'),
 slideBy: a.data('slideby'),
 lazyLoad: a.data('lazyload'),
 navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
 animateOut: a.data('animateOut'),
 animateIn: a.data('animateIn'),
 video: a.data('video'),
 items: a.data('items'),
 responsive:{
     0:{items: a.data('items-xs'),},
     576:{items: a.data('items-sm'),},
 768:{items: a.data('items-md'),},
     992:{items: a.data('items-lg'),}
 }
 });
});

/*---------------------------------------------------
 YouTube video to autoplay in modal
----------------------------------------------------- */
// Gets the video src from the data-src on each button
var $videoSrc;
$('.video-btn').on('click', function() {
 $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);
// when the modal is opened autoplay it  
$('#videoModal').on('shown.bs.modal', function (e) {
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates...you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0" ); 
})
// stop playing the youtube video when I close the modal
$('#videoModal').on('hide.bs.modal', function (e) {
 $("#video").attr('src',$videoSrc); 
}) 

/*---------------------------------------------------
tooltips
----------------------------------------------------- */
$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});
 }
 userLoggedIn()
 {
  $('[data-loader="circle-side"]').fadeIn(); // will first fade out the loading animation
	$('#preloader').delay(333).fadeIn('slow'); // will fade out the white DIV that covers the website.

   localStorage.setItem("isLoggedIn","true");
   let scope = this;
   setTimeout(() => {
    $('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(333).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(333);
    scope.router.navigate(["/welcome/dashboard"]);
   }, 3000);
   return false;
   
 }
}
