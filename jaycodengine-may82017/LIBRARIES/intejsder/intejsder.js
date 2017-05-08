//=========================================================================
//===================== BUILDER SYSTEM LIBRARY ============================
//=========================================================================
    (function(window){
    function buildersystemfunctions() {
        var f = {};
        
        Array.prototype.arraytrim = function arraytrim(container) {
            var s = "";
            for (i=0;i < this.length; i++) {
                s = this[i].trim(); container.push(s);
                if (i >= this.length) {return container;};
            };
            var mystring = "";
        };
        f.engine = function(instructions,components,separatorarray) {
            var a = new buildersystem.instruction(instructions);
            var b = new buildersystem.component(components,separatorarray);
            var c = a.getinstruction();
            var d = b.getnames();
            var e = b.getvalues();
            var f = new Array;
            var g = "";
                
            for (a=0;a<c.length;a++) {
                var n = d.indexOf(c[a]);
                if (n !== -1) { 
                    f.push(e[n]);
                    g = f.join("");
                };
            };
                
            this.getcode = function() {return g;};
        };
        f.instruction = function(input) {
                var ir = input.split(",");
                var ia = new Array();
                for (i=0;i < ir.length; i++) {var s = ir[i].trim();ia.push(s);};
                this.getinstruction = function() {return ia;};
        };
        f.component = function(input,separatorarray) {
            var separator1 = separatorarray[0];
            var separator2 = separatorarray[1];
            var separator3 = separatorarray[2];
            
            var cr = input.split(separator3);
            var ca = new Array(); var cna = ""; var cna2 = new Array(); var cn = new Array(); var cv = new Array();
                
            for (i=0; i < cr.length; i++) {
                ca = cr[i].split(separator2);
                cna = ca[0].trim();
                cna2 = cna.split(separator1);
                cna2.reverse();
                cn.push(cna2[0].trim());
                cv.push(ca[1]);
            };
               
            this.getnames = function() {return cn;};
            this.getvalues = function() {return cv;};
        };
            
        return f;
    };
    
    
    if(typeof(window.buildersystem)){window.buildersystem = buildersystemfunctions();};
})(window);
    window.builder = (function(){
    /************************************************************
    SET UP
    var i = system.library(1);
    var c = system.library(2);
    var s = ["separator1symbol","separator2symbol","separator3symbol"];
    var o = builder.g(i,c,s);
    var t = "****Result****\n\n";
    var m = t.concat(o);
    log.clear();
    log.w(m);

    INPUT
    system.libary(1) = a,a,a,a

    COMPONENTS  
    system.library(2)= separator1symbol a separator2symbol var a; separator3symbol;

    OUTPUT
    ****Result****

    var a;var a;var a;var a;

    TIPS
    - Use the Javascript Comment symbol for your COMPONENTS separatorsymbol in order to prevent 
      Javascript Syntax Errors

**************************************************************************/
        return function (instructions,components,separatorarray) {
            var theinstructions = instructions;
            var thecomponents = components;
            var output = "";
            
            if (theinstructions === undefined || thecomponents === undefined || separatorarray === undefined) {
                output = "ERROR: You need to enter the instruction(s), component(s), and seperator listed in array with a max length of 3";
            }else if (theinstructions !== undefined && thecomponents !== undefined && separatorarray !== undefined) {
                var engine = new buildersystem.engine(theinstructions,thecomponents,separatorarray);
                output = engine.getcode();
            };
            
            return output;
        };
}());
//=========================================================================
//======================== END OF JAVASCRIPT ==============================
//=========================================================================