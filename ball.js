var mic, fft, h;
var gravity, velocity;



function setup() {
    createCanvas(710,400);
    noFill();

    gravity = 0.3;
    velocity = 0;

    mic = new p5.AudioIn();
    mic.start();
    fft = new p5.FFT(0.6, 1024);
    fft.setInput(mic);
}

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

function update()
{

}

var spectrum2 = null;
function draw() {
    background(200);
    var spectrum = fft.analyze();
    spectrum.splice(200, spectrum.length);
    var maxSpectrum = indexOfMax(spectrum);
    if (spectrum[maxSpectrum] < 254.6)
        maxSpectrum = 0;
    console.log(maxSpectrum);


    beginShape();
    //for(i = 0; i<spectrum.length; i++) {
    h = (i, map(spectrum[i], 0, 255, height, 0) );
    ellipse(width/2, -maxSpectrum/50*height + height-25, 50, 50);
    //break;
    //}
    endShape();
}