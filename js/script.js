const headerScroll = () => {
    const header = document.querySelector('.header');
	if (window.pageYOffset > 80) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
};

window.addEventListener('scroll', headerScroll);

const menu = document.querySelector('.menu-burger'),
      menuBody = document.querySelector('.menu__body');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
	menuBody.classList.toggle('active');
	if (menuBody.classList.contains('active')) {
		document.body.style.overflowY = 'hidden';
	} else {
		document.body.style.overflowY = 'visible';
	}
});

function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

let isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};

const paralaxAreas = document.querySelectorAll('.paralax-area');

if (!isMobile.any()) {
	if (paralaxAreas.length > 0) {
		for (paralaxArea of paralaxAreas) {
			const paralaxItem = document.querySelectorAll('.paralax-item');
			paralaxArea.addEventListener('mousemove', (e) => {
				const x = e.pageX / window.innerWidth,
				y = e.pageY / window.innerHeight;
				paralaxItem.forEach( item => {
					item.style.transform =  'translate(-' + x * 12 + 'px, -' + y * 12 + 'px)';
				});
			});
			paralaxArea.addEventListener('mouseenter', (e) => {
				paralaxItem.forEach( item => {
					item.style.transition =  'none';
				});
			});
			paralaxArea.addEventListener('mouseleave', (e) => {
				paralaxItem.forEach( item => {
					item.style.transform =  'translate(0,0)';
					item.style.transition =  'all 0.3s ease-in-out';
				});
			});
		}
	}
}
	  	  
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    const animOnScroll = () => {
        for (animItem of animItems) {
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 7;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active');
                }
            }
        }

        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
    };

    window.addEventListener('scroll', animOnScroll);

    setTimeout(() => {
        animOnScroll();
    }, 300);
    
}

if (document.querySelectorAll('.slider-partners').length > 0) {
	$(function () {
		$('.slider-partners').slick({
			arrows: false,
			dots: false,
			autoplay: true,
			variableWidth: true,
			centerMode: true,
			slidesToShow: 5,
			responsive: [
				{
					breakpoint: 769,
					settings: {
					  centerMode: true,
					  slidesToShow: 5,
					}
				  },
				  {
					breakpoint: 376,
					settings: {
					  centerMode: true,
					  centerPadding: '-40px',
					  slidesToShow: 1,
					}
				  },
			]
		});
	});
}