$(document).ready(function() {
    $('[data-item="block.radio"]').on('click', function () {
        data_town = $(this).attr('data-town');
        const el = document.querySelector('div.partners-town[data-town="'+data_town+'"]');
        el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
    });
    $('[data-item="scroll.into"]').on('click', function () {
        data_town = $(this).attr('data-town');
        const el = document.querySelector('div.partners-town[data-town="'+data_town+'"]');
        el.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
    });
    
    tooltips = document.querySelectorAll('.map-tooltip-default');
    tooltips.forEach(element => {
        element.classList.add("block");
        const elementRect = element.getBoundingClientRect();
        const elementHidesLeft = elementRect.left < 0;
        const elementHidesRight = elementRect.right > window.innerWidth;
        element.classList.remove("block");
        if (elementHidesLeft) {
            element.style.transform = "none";
        } else if (elementHidesRight) {
            element.style.transform = "translateX(-100%)";
        }
    });
});