/* Please ❤ this if you like it! */


(function($) { "use strict";
		
	//Page cursors

    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        t.style.left = n.clientX + "px", 
		t.style.top = n.clientY + "px", 
		e.style.left = n.clientX + "px", 
		e.style.top = n.clientY + "px", 
		i.style.left = n.clientX + "px", 
		i.style.top = n.clientY + "px"
    });
    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");
    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }
    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }
    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }

	
	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//Travel portfolio page
	
	$(".travel").on('click', function () {
		$("body").addClass("travel-on");
	});
	$(".travel-close").on('click', function () {
		$("body").removeClass("travel-on");
	});

	
	//Wildlife portfolio page
	
	$(".wildlife").on('click', function () {
		$("body").addClass("wildlife-on");
	});
	$(".wildlife-close").on('click', function () {
		$("body").removeClass("wildlife-on");
	});

	
	//Nature portfolio page
	
	$(".nature").on('click', function () {
		$("body").addClass("nature-on");
	});
	$(".nature-close").on('click', function () {
		$("body").removeClass("nature-on");
	});

	
	//Image popup logic
	document.addEventListener('DOMContentLoaded', function() {
		// Select all images from the sections
		const images = document.querySelectorAll('.travel-section img, .wildlife-section img, .nature-section img');
		const popup = document.getElementById('image-popup');
		const popupImage = document.getElementById('popup-image');
		const closePopup = document.querySelector('.close-popup');

		// Add click event listener to each image
		images.forEach(image => {
			image.addEventListener('click', function() {
				popupImage.src = this.src; // Set the popup image source
				popup.style.display = 'block'; // Display the popup
			});
		});

		// Add click event listener to close button
		closePopup.addEventListener('click', function() {
			popup.style.display = 'none'; // Hide the popup
		});

		// Optional: Close popup when clicking outside the image
		popup.addEventListener('click', function(event) {
			if (event.target === popup) {
				popup.style.display = 'none';
			}
		});
	});
})(jQuery);
