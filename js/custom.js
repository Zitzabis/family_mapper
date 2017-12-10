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
        offset: '-=600' // Starts 600ms before the previous animation ends
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

