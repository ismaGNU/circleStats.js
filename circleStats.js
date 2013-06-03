/*
	Draw a canvas circle filling up to a percentage
	
	by @IsmaGNU

	@options array()
		- Canvas
		- Percentage 
		- Speed to fill the circle
		- Background color
		- Foreground color
        - Circle's radius
*/

var CircleStat = function(options) {
	
	this.canvas = options['canvas'];
	this.context = this.canvas.getContext("2d");
	this.percentage = options['percentage'];
	this.fill_value = this.fill_value_tmp = -1.5;
	this.speed = options['speed'];
	this.background = options['background'];
	this.foreground = options['foreground'];
    this.center = this.canvas.width / 2;
    this.radius = options['radius'];


	if (this.percentage <= 25){
            this.fill_value = ((this.percentage * 1.5) / 25) - 1.5;
    } else {
            this.fill_value = ((this.percentage * 1.5) / 100) * Math.PI;
    }


	this.animate = function() {
        reqAnimFrame = window.mozRequestAnimationFrame    ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame     ||
                window.oRequestAnimationFrame
                ;

        that.fill_value_tmp += that.speed*Math.PI;

        if (that.fill_value_tmp > that.fill_value){
                that.fill_value_tmp = that.fill_value;
                that.draw();
        }
        else {
                that.draw();
                reqAnimFrame(that.animate);
        }
    }

    this.draw = function() {
        that.context.clearRect(0,0,that.canvas.width,that.canvas.height);
        that.context.beginPath();

        that.context.lineWidth=15;
        that.context.strokeStyle = that.background;
        that.context.arc(that.center, that.center, that.radius,0,2*Math.PI);
        that.context.closePath();
        that.context.stroke();

        that.context.beginPath();
        that.context.lineWidth=15;
        that.context.strokeStyle = that.foreground;
        that.context.arc(that.center, that.center, that.radius, 1.5 * Math.PI, that.fill_value_tmp,true);
        that.context.stroke();
    
        that.context.closePath();
         
    }
    var that = this;

    this.animate();
}