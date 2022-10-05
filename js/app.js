// функция для слайдера
$(function(){
    $('.reviews__sliders').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
        {
        breakpoint: 1921,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
        breakpoint: 1701,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
        breakpoint: 1255,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
        breakpoint: 870,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        ]
    });
});


// код для таймера
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    return {
        'total': t,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    let clock = document.getElementById(id);
    let minutesSpan = clock.querySelector('.minutes');
    let secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);

        
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
        clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000); 
initializeClock('countdown', deadline);



// код для якоря на кнопках
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
}