// $(document).ready(function(){ 
// 	$(".scroll").click(function(event){
// 		event.preventDefault();
// 		$("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
// 		$('.navbar-default a').removeClass('selected');
// 		$(this).addClass('selected');
//     	});
// });

document.addEventListener('DOMContentLoaded', function () {
	debugger
    var scrollLinks = document.querySelectorAll('.scroll');
    for (var i = 0; i < scrollLinks.length; i++) {
      scrollLinks[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetElement = document.querySelector(this.getAttribute('href'));
        var targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
        var startOffset = window.pageYOffset;
        var distance = targetOffset - startOffset;
        var startTime = null;
        var duration = 500; // Duration in milliseconds

        function scrollToTarget(timestamp) {
          if (!startTime) {
			startTime = timestamp;
			}
          var progress = timestamp - startTime;
          var percentage = Math.min(progress / duration, 1);
          var easing = function (x) {
            return x; // You can implement different easing functions here if needed
          };
          var position = startOffset + distance * easing(percentage);
          window.scrollTo(0, position);

          if (progress < duration) {
            requestAnimationFrame(scrollToTarget);
          }
        }

        scrollToTarget(window.performance.now());

        // Remove 'selected' class from all links
        var navbarLinks = document.querySelectorAll('.navbar-default a');
        for (var j = 0; j < navbarLinks.length; j++) {
          navbarLinks[j].classList.remove('selected');
        }

        // Add 'selected' class to the clicked link
        this.classList.add('selected');
      });
    }
  });