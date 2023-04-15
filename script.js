// what happens on page load
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if ($(window).scrollTop()>0){
            $('.top').show();
        } else{
            $('.top').hide();
        }
    });

    // smooth scrolling
    $('a[href*="#"]').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });
    // create typing effect for my nam
    const typed = new Typed(".typing", {
        strings: ["{I'm a Developer}", "{I'm a Designer}"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});

// create send email function using EmailJS
function sendMail(){
    
    const params = {
        from_name : document.getElementById('name').value,
        email_id : document.getElementById('email').value,
        contact_number : document.getElementById('contactnumber').value,
        project : document.getElementById('project').value,
        message : document.getElementById('message').value
    }
    emailjs.send('service_rnxndxh', 'template_tbkp3h5', params).then(function(res){
        alert("Email Sent Successfully");     
    })
    const formToReset = document.getElementById('contact-form');
    formToReset.addEventListener('submit', (e) => {
        e.preventDefault();
        formToReset.reset();
    });
}

