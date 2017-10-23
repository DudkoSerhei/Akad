/*unit map*/
$(document).ready(function() {
  if (document.getElementById('map')) {
    var projectMap = document.getElementById('map');
    GoogleMapsLoader.KEY = 'AIzaSyC81f-IHneUBboqVlIa1P2853iMkO7B7jo';
    GoogleMapsLoader.load(function(google) {
      var Map = new google.maps.Map(projectMap, {
         mapTypeControl: false,
         scaleControl: false,
         streetViewControl: false,
         overviewMapControl: false,
         scrollwheel: false,
         zoom: 11,
         center: new google.maps.LatLng(41.3947688, 2.0787279),
         styles:[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
       });

       var marker = new google.maps.Marker({
         title: 'ПИН',
         position: new google.maps.LatLng(41.3947688, 2.0787279),
         map: Map,
         draggable: true,
         animation: google.maps.Animation.DROP,
         icon: '../images/icon/map.png'
       });
      marker.addListener('click', toggleBounce);
     });
   }
   function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }
})

/*tabs slider*/
$(".blog-tabs a").click(function() {
  if (!$(this).hasClass("blog__tab_active")) {
    var i = $(this).index();
    $(".blog-tabs a.blog__tab_active").removeClass("blog__tab_active");
    $(this).addClass("blog__tab_active");
    $(".blog-posts-wrapper .blog-post_active").removeClass("blog-post_active");
    $($(".blog-posts-wrapper").children(".blog-post")[i]).addClass("blog-post_active");
  }
});

/*menu*/
$(".header__menu").click(function() {
  $(".header__menu").toggleClass('header__menu_open');
    $('.header__nav').toggleClass('header__nav_open');
  })

/*swiper slider*/
if ($('.staff-item__container').length > 0) {
  var swiper = new Swiper('.staff-item__container', {
      effect: 'flip',
      grabCursor: true,
      pagination:'.swiper-pagination',
      paginationClickable: true,
  });
}
