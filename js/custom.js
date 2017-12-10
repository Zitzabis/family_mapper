function logo() {
    var relativeOffset = anime.timeline();
    relativeOffset
    .add({
        targets: '.logoCaption',
        translateY: '100',
        easing: 'easeOutExpo',
        duration: 500
    })
    .add({
        targets: '.logo',
        rotate: '180deg',
        duration: 1000,
        offset: '-=300' // Starts 600ms before the previous animation ends
    })
    .add({
        targets: '.logo',
        rotate: '0deg',
        duration: 1000,
        offset: '-=400' // Starts 600ms before the previous animation ends
    })
    .add({
        targets: '.logoCaption',
        translateY: '0',
        duration: 500,
        easing: 'easeOutExpo',
        offset: '-=600', // Starts 600ms before the previous animation ends,
        complete: function(anim) {
            window.location.href = "home.php";
        }
    })
}

function buttonInflate(inflate) {
    var basicTimeline = anime.timeline();

    if (inflate) {
        basicTimeline
        .add({
            targets: '.continueButton',
            scale: 1.5
        })
    }
    else {
        basicTimeline
        .add({
            targets: '.continueButton',
            scale: 1
        })
    }
}

$(document).ready(function() {
    function toggleSidebar() {
        $(".button").toggleClass("active");
        $("main").toggleClass("move-to-left");
        $(".sidebar-item").toggleClass("active");
    }

    $(".button").on("click tap", function() {
        toggleSidebar();
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            toggleSidebar();
        }
    });

});

