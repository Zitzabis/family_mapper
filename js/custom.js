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

