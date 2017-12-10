function logo() {
    var basicTimeline = anime.timeline();
    basicTimeline
    .add({
        targets: '.logo',
        rotate: '180deg',
        duration: 2000
    })
    .add({
        targets: '.logo',
        rotate: '0deg',
        duration: 2000
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

