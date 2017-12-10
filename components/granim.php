<canvas id="granim-canvas" class="backgroundCanvas"></canvas>
<!-- Create a Granim instance -->
<script>
    var granimInstance = new Granim({
    element: '#granim-canvas',
    name: 'granim',
    opacity: [1, 1],
    states : {
        "default-state": {
            gradients: [
                ['#00796b', '#388e3c'],
                ['#9ccc65', '#004d40']
            ]
        }
    }
    });
</script>