function Bird() {
    this.y = height-25;// Ball position in pixel
    this.x = 64;
    this.targetLevel = 0;
    // this.increment = setInterval(this.addGravity, 0);
    this.gravity = 0.8;
    // bird up
    this.lift = -13;
    this.velocity = 0;

    this.show = function() {
        background(200);
        //var h = -this.targetLevel/40*height + height-25;
        image(img, width/3, this.y, img.width/5, img.height/5);
        //ellipse(width/2, this.y, 32, 32);
    }

    this.up = function() {
        this.velocity = 0;
        var g = -5;
        this.velocity += g;
        this.y += this.velocity;
    }


    this.update = function() {
        var spectrum = fft.analyze(2048);
        spectrum.splice(200, spectrum.length);
        var maxSpectrum = indexOfMax(spectrum)-20;
        //if (spectrum[maxSpectrum] < 230)
           // maxSpectrum = 0;
        //this.micLevel = maxSpectrum;
        this.targetLevel = maxSpectrum;


        var limit = 50;
        var g = 0.3;
        

        //Ball Position in index form
        var ball_y = ((height-this.y)/height)*limit;
        //console.log(this.targetLevel, ball_y, this.y, this.velocity);


        if (ball_y > 2 && ball_y >= (this.targetLevel - 1) && ball_y <= (this.targetLevel + 1))
        {
            this.velocity = 0;
            //this.y = -25+(height-(this.targetlevel/50)*height);
        }

        if(ball_y < this.targetLevel)
        {
            this.velocity += g;

            this.y -= this.velocity;
        }
        else if(ball_y > this.targetLevel)
        {
            this.velocity += g;
            this.y += this.velocity;
        }



        if (this.y > height-25) {
            this.y = height-25;
            this.velocity = 0;
        }
        // Top limit
        if (this.y < 25) {
            this.y = 25;
            this.velocity = 0;
        }

    }

}