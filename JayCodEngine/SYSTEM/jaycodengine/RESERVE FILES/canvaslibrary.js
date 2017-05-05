    window.canvas = (function(){
        
        /*SAMPLE CANVAS
         * dom.co(st.h.dv,"thecanvas");
         * var a = canvas("paper","thecanvas",500,500);
         * a.fstyle("black");
         * a.frect(0,0,a.w,a.h);
         * a.sstyle("white");
         * a.linew(5);
         * a.bpath();
         * a.move(100,100);
         * a.line(150,200);
         * a.cpath();
         * a.stroke();
         * a.font("20px Helvetica");
         * a.ftext("fuck",50,50);
         * a.circle(50,50,50); */
        
        return function(name,attach,width,height) {
            dom.us("CANVAS",name,attach);
            dom.s(name,"width",width + "px");
            dom.s(name,"height",height + "px");
            var thecanvas = document.getElementById(name);
            var c = thecanvas.getContext("2d");
            var f = {};
            
            f.w = thecanvas.width;
            f.h = thecanvas.height;
            //for fills
            f.fill =  function() {c.fill();};
            f.fstyle = function(color) {c.fillStyle = color;};
            f.frect = function(posx,posy,thewidth,theheight) {
                c.fillRect(posx,posy,thewidth,theheight);
            };
            //for strokes
            f.stroke =  function() {c.stroke();};
            f.sstyle = function(color){c.strokeStyle = color;};
            f.srect = function(posx,posy,thewidth,theheight) {
                c.strokeRect(posx,posy,thewidth,theheight);
            };
            //for lines
            f.linew = function(width){c.lineWidth = width;};
            f.line = function(posx,posy) {c.lineTo(posx,posy);};
            f.move = function(posx,posy) {c.moveTo(posx,posy);};
            //for path
            f.bpath =  function() {c.beginPath();};
            f.cpath =  function() {c.closePath();};
            f.restore = function() {c.restore();};
            //for text
            f.font = function(font) {c.font = font;};
            f.ftext = function(txt,posx,posy) {c.fillText(txt,posx,posy);};
            
            //for shapes
            f.arc = function(posx,posy,radius,radiusstart,reverse) {
                c.arc(posx,posy,radius,radiusstart,Math.PI * 2, reverse);
            };
            f.circle = function(posx,posy,radius,color) {
                c.arc(posx,posy,radius,0,Math.PI * 2, false);
                if (typeof(color)==="undefined") {c.fill();}else if (typeof(color)==="string"){c.fillStyle = color;c.fill();}; 
            };

            return f; 
        };
    }());