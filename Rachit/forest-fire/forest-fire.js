// ---------------------------------Sticky Navbar with Proress Bar------------------------------------------------------------------------------


let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {myFunction()};

function myFunction() {

    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";

    var x = document.getElementById("sticky_navbar");

    if (document.body.scrollTop > 54 || document.documentElement.scrollTop > 54) {
        // document.getElementById("sticky_navbar").className = "sticky-navbar-properties";

            x.style.display = "flex";
            x.style.position = "fixed";
            x.style.background = "linear-gradient(to right,rgb(225, 226, 210),rgb(224, 223, 203),rgb(219, 216, 199),rgb(214, 211, 192))";
            x.style.alignContent = "center";
            x.style.justifyContent = "space-around";
            x.style.width = "100%";
            x.style.minHeight = "8vh";
            x.style.top = "0";
            x.style.left = "-80";
        
    } else {
        // document.getElementById("sticky_navbar").className = "";
        x.style.display = "none";
    }
}
// ----------------------------------------------------------------------------------------------------------------------------



// ---------------------------------Burger sign------------------------------------------------------------------------------
const navSlide = () => {
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        nav.style='background:linear-gradient(to right,rgb(225, 226, 210),rgb(224, 223, 203),rgb(219, 216, 199),rgb(214, 211, 192))';

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
                nav.style='background:rgba(0,0,0,0)';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
        
    });

}

navSlide();
// ----------------------------------------------------------------------------------------------------------------------------


