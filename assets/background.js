// For now, I'm going  to bring in the scripts seperately into the global score.
// Will change when I bring in Handlebars or React.
// https://stackoverflow.com/questions/9901082/what-is-this-javascript-require
// const Granim = require("../node_modules/granim/dist/granim");

const granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#ff9966', '#ff5e62'],
                ['#00F260', '#0575E6'],
                ['#e1eec3', '#f05053']
            ]
        }
    }
});