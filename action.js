var theBody = document.querySelector('body');


var counter = 0;

while (counter < 15) {
    var theDiv = document.createElement('div');

    var redBackground = getRandomInt(0,255);
    var greenBackground = getRandomInt(0,255);
    var blueBackground = getRandomInt(0,255);

    theDiv.style.backgroundColor = `rgb(${redBackground}, ${greenBackground},${blueBackground})`;


    var redBorder = getRandomInt(0,255);
    var greenBorder = getRandomInt(0,255);
    var blueBorder = getRandomInt(0,255);

    theDiv.style.borderColor = `rgb(${redBorder}, ${greenBorder},${blueBorder})`;


    theBody.appendChild(theDiv);

    counter += 1;
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}














