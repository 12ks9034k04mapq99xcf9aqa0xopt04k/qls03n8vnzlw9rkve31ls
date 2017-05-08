(function(window){
    function builderfunctions() {
        var f = {};
        
        Array.prototype.arraytrim = function arraytrim(container) {
            var s = "";
            for (i=0;i < this.length; i++) {
                s = this[i].trim(); container.push(s);
                if (i >= this.length) {return container;};
            };
            var mystring = "";
        };
        f.g = function (instructions,components,separatorarray) {
            var theinstructions = instructions;
            var thecomponents = components;
            var output = "";
            
            if (theinstructions === undefined || thecomponents === undefined || separatorarray === undefined) {
                output = "ERROR: You need to enter the instruction(s), component(s), and seperator listed in array with a max length of 3";
            }else if (theinstructions !== undefined && thecomponents !== undefined && separatorarray !== undefined) {
                var engine = new builder.engine(theinstructions,thecomponents,separatorarray);
                output = engine.getcode();
            };
            
            return output;
        };
        f.engine = function(instructions,components,separatorarray) {
            alert("Start Engine");
            var a = new builder.instruction(instructions);
            alert("Start Components");
            var b = new builder.component(components,separatorarray);
            alert("Start Components");
            var c = a.getinstruction();
            alert("Engine C: " + c);
            var d = b.getnames();
            alert("Engine D: " + d);
            var e = b.getvalues();
            alert("Engine E: " + e);
            var f = new Array;
            var g = "";
                
            for (a=0;a<c.length;a++) {
                var n = d.indexOf(c[a]);
                if (n !== -1) { 
                    alert(c[a] + " do exist!! with the value of " + e[n] );
                    f.push(e[n]);
                    g = f.join("");
                    alert(g);
                }else{
                    alert(c[a] + " DON'T exist!!");
                };
            };
                
            this.getcode = function() {return g;};
        };
        f.instruction = function(input) {
                var ir = input.split(",");
                var ia = new Array();
                for (i=0;i < ir.length; i++) {var s = ir[i].trim();alert("Instruction " + s); ia.push(s);};
                this.getinstruction = function() {return ia;};
        };
        f.component = function(input,separatorarray) {
            var separator1 = separatorarray[0];
            var separator2 = separatorarray[1];
            var separator3 = separatorarray[2];
            
            var cr = input.split(separator3);
            var ca = new Array(); var cna = ""; var cna2 = new Array(); var cn = new Array(); var cv = new Array();
                
            for (i=0; i < cr.length; i++) {
                alert("Component: " + cr[i]);
                ca = cr[i].split(separator2);
                alert("ca: " + ca);
                cna = ca[0].trim();
                cna2 = cna.split(separator1);
                cna2.reverse();
                cn.push(cna2[0].trim());
                cv.push(ca[1]);
                alert("Component CNA: " + cna);
                alert("Component CNA2: " + cna2);
                alert("Component CN: " + cn);
                alert("Component CV: " + cv);
            };
               
            this.getnames = function() {alert("Getting Names" + cn); return cn;};
            this.getvalues = function() {alert("Getting Values" + cv); return cv;};
        };
            
        return f;
    };
    
    
    if(typeof(window.builder)){window.builder = builderfunctions();};
})(window);