import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    $(function () {
      $(window).on('scroll', function(){
        if ($(this).scrollTop() > 150) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      });
  $('#back-to-top').on("click", function() {
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
  });
  
  
  $('.smooth-scroll a').on("click", function() {
      var sectionTo = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(sectionTo).offset().top - 50}, 600);
  });
  
  }
backToTop()
{
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}
}
