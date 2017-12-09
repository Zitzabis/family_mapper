<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
        <link rel="stylesheet" href="css/custom.css">
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    </head>

    <script src="js/granim.min.js"></script>
    <script src="js/anime.js"></script>

    <body>
        <!-- Create a <canvas> element -->
        <div class="pageContent">
            <h1>Hello World!</h1>
        </div>
        <canvas id="granim-canvas" class="backgroundCanvas"></canvas>
        
    </body>

    <!-- Create a Granim instance -->
    <script>
        var granimInstance = new Granim({
        element: '#granim-canvas',
        name: 'granim',
        opacity: [1, 1],
        states : {
            "default-state": {
                gradients: [
                    ['#834D9B', '#D04ED6'],
                    ['#1CD8D2', '#93EDC7']
                ]
            }
        }
        });
    </script>
</html>