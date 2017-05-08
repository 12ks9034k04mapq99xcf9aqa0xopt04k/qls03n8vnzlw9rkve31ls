    (function(window){
        function cryptosystemfunctions () {
            var f = {};
            
            var idsb = 0;
            var idtb = 0;
            var idnlb = 0;
                
            Array.prototype.arraytoint = function arraytoint(container) {
                for (i=0;i < this.length; i++) {
                     var n = parseInt(this[i]); container.push(n);
                     if (i >= this.length) {return container;};
                 };
            };
        
                 
            f.encrypt = function(symbols,input) {
                holder();
                var a = document.getElementById("theoutput");
                var b = symbols;
                var c = input;
                var d = b.split("");
                var e = c.split("");
                if (b === "" || b === " " || b === "    " || b === "\n") {
                    a.value = "ERROR: Please enter your Crypt Symbols stupid!!";
                }else if (c === "" || c === " " || c === "    " || c === "\n") {
                    a.value = "ERROR: Really? You don't have any Input? What will I decrypt then?, your ass? Enter some Input IDIOT!";
                }else {
                    a.value = "STARTING ENCRYPTION... " + "\n" + "Please wait ..." + "\n" + "READ THIS!: The longer the Input the longer it takes to encrypt." + "\n" + "READ THIS!: Don't do anything it might INTERRUPT THE ENCRYPTION!";
                    setTimeout(function(){
                
                        var f = [];
                        var s; 
                        var r = 0;
                        do {
                            var n = d.indexOf(e[r]);
                            if (n >= 0) {
                                //alert(e[r] + " was found!");
                                s = getpos(e[r],symbols);
                                //alert (s);
                                f.push(s);
                                //alert(f);
                            }else if (n <= -1){
                                //alert(e[r] + " was not found!");
                                if (e[r] === " ") {
                                    //e[r] = "SPACE BAR (It might look empty but it is still a symbol!) ";
                                    e[r] = idsb;
                                    f.push(e[r]);
                                }else if (e[r] === "	") {
                                    //e[r] = "TAB BAR (It might look empty but it is still a symbol!) ";
                                    e[r] = idtb;
                                    f.push(e[r]);
                                }else if (e[r] === "\n") {
                                    //e[r] = "NEW LINE (It might look empty but it is still a symbol!) ";
                                    e[r] = idnlb;
                                    f.push(e[r]);
                                }else {
                                    var txt1 = "[ERROR: This symbol ";
                                    var txt2 = "was not found!. Please recheck your Crypt Symbols. It must be complete!]";
                                    var txt3 = e[r];
                                    var txt4 = txt1.concat(txt3);
                                    var txt5 = txt4.concat(txt2);
                                    f.push(txt5);
                                };
                                //alert(f);
                            }; 
                            r++;
                        }while(r < e.length);

                        f.join();
                        a.value = f;
                 
                    },5);
                };                                  
            };
            
            f.getsym = function(position,symbols) {
                var b = symbols;
                var d = b.split("");
                idsb = d.length + 1;
                idtb = idsb + 1;
                idnlb = idtb + 1;
                var pos = position;
                for (i=0; i < d.length; i++) {
                    if (pos === i) {
                        if (i === idsb) {
                            var n = " ";
                            //alert(pos + " has a symbol position of " + n);
                            i = d.length + 1;
                            return n;
                        }else if (i === idtb) {
                            var n = "	";
                            //alert(pos + " has a symbol position of " + n);
                            i = d.length + 1;
                            return n;
                        }else if (i === idnlb) {
                            var n = "\n";
                            //alert(pos + " has a symbol position of " + n);
                            i = d.length + 1;
                            return n;
                        }else {
                            var n = d[i];
                            //alert(pos + " has a symbol position of " + n);
                            i = d.length + 1;
                            return n;
                        } 
                    }
                }
                
            };

            f.getpos = function(symbol,symbols) {
                var b = symbols;
                var d = b.split("");
                idsb = d.length + 1;
                idtb = idsb + 1;
                idnlb = idtb + 1;
                //alert(d);
                var sym = symbol;
                for (i=0; i < d.length; i++) {
                    if (sym === d[i]) {
                        var n = i.toString();
                        //alert(sym + " has a number position of " + n);
                        i = d.length + 1;
                        return n;
                    }
                }
            };
            
            f.decrypt = function(symbols,input) {
                holder();
                var a = document.getElementById("theoutput");
                var b = symbols;
                var c = input;
                var d = b.split("");
                var e = c.split(",");
                
                if (b === "" || b === " " || b === "    " || b === "\n") {
                    a.value = "ERROR: Please enter your Crypt Symbols stupid!!";
                }else if (c === "" || c === " " || c === "    " || c === "\n") {
                    a.value = "ERROR: Really? You don't have any Input? What will I decrypt then?, your ass? Enter some Input IDIOT!";
                }else {
                    a.value = "STARTING DECRYPTION... " + "\n" + "Please wait ..." + "\n" + "READ THIS!: The longer the Input the longer it takes to decrypt." + "\n" + "READ THIS!: Don't do anything it might INTERRUPT THE DECRYPTION!";
                    setTimeout(function(){ 
                        var f = [];
                        e.arraytoint(f);
                        var g = 0;
                        var h = "";
                        var x = "";
                        var z = "";
                        do {
                            //alert(f[g]);
                            h = getsym(f[g],symbols);
                            //alert(h);
                            var l = z.concat(h);
                            if (l === "undefined") {
                                if (f[g] === idsb) {
                                    h = " ";
                                }else if (f[g] === idtb) {
                                    h = "	";
                                }else if (f[g] === idnlb) {
                                    h = "\n";
                                }else {
                                    var txt1 = " [CRITICAL ERROR: The number ";
                                    var txt2 = " does not have a symbol equivalent.Please check your symbols and make sure your input is correct] ";
                                    var txt3 = txt1.concat(f[g]);
                                    var txt4 = txt3.concat(txt2);
                                    h = txt4;
                                }
                            };
                            var y = x.concat(h);
                            x = y;
                            g++;
                            
                        }while(g < f.length);
                            a.value = x;
                    },5);
                };
            };
           
            f.holder = function() {
                dom.co(st.h.dv,"outputholder");
                dom.us(st.h.dv, "holder", "outputholder");
                dom.ac("holder");
                dom.s(st.d.b,st.s.ta,"center");
                dom.s("holder",st.s.dp,"inline-block");
                dom.s("holder",st.s.pd,"3px");
                dom.s("holder","margin","5px");
                dom.us(st.h.ta, "theoutput","holder");
                dom.s("theoutput", "width", vars.tawidth); 
                dom.s("theoutput", "height", vars.taheight);
                dom.us(st.h.br,"","holder");
                dom.uca(st.h.bn, "close", "Close", "holder", st.a.oc, "dom.ac('outputholder')");      
            };
            
            return f;
        };
        if(typeof(window.cryptosystem)==="undefined") {window.cryptosystem = cryptosystemfunctions();};
    })();
 
 
 
 
              var idsb = 0;
              var idtb = 0;
              var idnlb = 0;
                
            Array.prototype.arraytoint = function arraytoint(container) {
                for (i=0;i < this.length; i++) {
                     var n = parseInt(this[i]); container.push(n);
                     if (i >= this.length) {return container;};
                 };
            };
        
                 
            function encrypt(symbols,input) {
                holder();
                var a = document.getElementById("theoutput");
                var b = symbols;
                var c = input;
                var d = b.split("");
                var e = c.split("");
                if (b === "" || b === " " || b === "    " || b === "\n") {
                    a.value = "ERROR: Please enter your Crypt Symbols stupid!!";
                }else if (c === "" || c === " " || c === "    " || c === "\n") {
                    a.value = "ERROR: Really? You don't have any Input? What will I decrypt then?, your ass? Enter some Input IDIOT!";
                }else {
                a.value = "STARTING ENCRYPTION... " + "\n" + "Please wait ..." + "\n" + "READ THIS!: The longer the Input the longer it takes to encrypt." + "\n" + "READ THIS!: Don't do anything it might INTERRUPT THE ENCRYPTION!";
                setTimeout(function(){
                
                 var f = [];
                 var s; 
                 var r = 0;
                 do {
                     var n = d.indexOf(e[r]);
                     if (n >= 0) {
                         //alert(e[r] + " was found!");
                         s = getpos(e[r],symbols);
                         //alert (s);
                         f.push(s);
                         //alert(f);
                     }else if (n <= -1){
                         //alert(e[r] + " was not found!");
                         if (e[r] === " ") {
                             //e[r] = "SPACE BAR (It might look empty but it is still a symbol!) ";
                             e[r] = idsb;
                             f.push(e[r]);
                         }else if (e[r] === "	") {
                             //e[r] = "TAB BAR (It might look empty but it is still a symbol!) ";
                             e[r] = idtb;
                             f.push(e[r]);
                         }else if (e[r] === "\n") {
                              //e[r] = "NEW LINE (It might look empty but it is still a symbol!) ";
                              e[r] = idnlb;
                              f.push(e[r]);
                         }else {
                             var txt1 = "[ERROR: This symbol ";
                            var txt2 = "was not found!. Please recheck your Crypt Symbols. It must be complete!]";
                            var txt3 = e[r];
                            var txt4 = txt1.concat(txt3);
                            var txt5 = txt4.concat(txt2);
                            f.push(txt5);
                        }
                         //alert(f);
                     } 
                     r++;
                 }while(r < e.length);

                 
                 
                 f.join();
                 a.value = f;
                 
                },5);
                };                                  
            };
            
            function getsym(position,symbols) {
                var b = symbols;
                var d = b.split("");
                 idsb = d.length + 1;
                idtb = idsb + 1;
                idnlb = idtb + 1;
                var pos = position;
                for (i=0; i < d.length; i++) {
                    if (pos === i) {
                        if (i === idsb) {
                            var n = " ";
                            //alert(pos + " has a symbol position of " + n);
                            i = d.length + 1;
                            return n;
                        }else if (i === idtb) {
                            var n = "	";
                            //alert(pos + " has a symbol position of " + n);
                            i = d.length + 1;
                            return n;
                        }else if (i === idnlb) {
                            var n = "\n";
                            //alert(pos + " has a symbol position of " + n);
                            i = d.length + 1;
                            return n;
                        }else {
                            var n = d[i];
                            //alert(pos + " has a symbol position of " + n);
                            i = d.length + 1;
                            return n;
                        } 
                    }
                }
                
            };

            function getpos(symbol,symbols) {
                var b = symbols;
                var d = b.split("");
                idsb = d.length + 1;
                idtb = idsb + 1;
                idnlb = idtb + 1;
                //alert(d);
                var sym = symbol;
                for (i=0; i < d.length; i++) {
                    if (sym === d[i]) {
                        var n = i.toString();
                        //alert(sym + " has a number position of " + n);
                        i = d.length + 1;
                        return n;
                    }
                }
            };
            
            function decrypt(symbols,input) {
                holder();
                var a = document.getElementById("theoutput");
                var b = symbols;
                var c = input;
                var d = b.split("");
                var e = c.split(",");
                
                if (b === "" || b === " " || b === "    " || b === "\n") {
                    a.value = "ERROR: Please enter your Crypt Symbols stupid!!";
                }else if (c === "" || c === " " || c === "    " || c === "\n") {
                    a.value = "ERROR: Really? You don't have any Input? What will I decrypt then?, your ass? Enter some Input IDIOT!";
                }else {
                a.value = "STARTING DECRYPTION... " + "\n" + "Please wait ..." + "\n" + "READ THIS!: The longer the Input the longer it takes to decrypt." + "\n" + "READ THIS!: Don't do anything it might INTERRUPT THE DECRYPTION!";
                setTimeout(function(){ 
                var f = [];
                e.arraytoint(f);
                var g = 0;
                var h = "";
                var x = "";
                var z = "";
                do {
                    //alert(f[g]);
                     h = getsym(f[g],symbols);
                        //alert(h);
                        var l = z.concat(h);
                        if (l === "undefined") {
                            if (f[g] === idsb) {
                            h = " ";
                            }else if (f[g] === idtb) {
                            h = "	";
                            }else if (f[g] === idnlb) {
                            h = "\n";
                            }else {
                             var txt1 = " [CRITICAL ERROR: The number ";
                            var txt2 = " does not have a symbol equivalent.Please check your symbols and make sure your input is correct] ";
                            var txt3 = txt1.concat(f[g]);
                            var txt4 = txt3.concat(txt2);
                            h = txt4;
                            }
                            //var txt1 = " [CRITICAL ERROR: The number ";
                            //var txt2 = " does not have a symbol equivalent.Please check your symbols and make sure your input is correct] ";
                            //var txt3 = txt1.concat(f[g]);
                            //var txt4 = txt3.concat(txt2);
                            //h = txt4;
                            //alert(" [CRITICAL ERROR: The number " + f[g] + " does not have a symbol equivalent.Please check your symbols and make sure your input is correct!.] ");
                        };
                         var y = x.concat(h);
                         x = y;
                   

                    g++;
                }while(g < f.length);
                a.value = x;
                },5);
                };
            };
           
            function holder() {

                      dom.co(st.h.dv,"outputholder");
                dom.us(st.h.dv, "holder", "outputholder");
                    dom.ac("holder");
                    dom.s(st.d.b,st.s.ta,"center");
                    dom.s("holder",st.s.dp,"inline-block");
                    dom.s("holder",st.s.pd,"3px");
                    dom.s("holder","margin","5px");
                    dom.us(st.h.ta, "theoutput","holder");
                    dom.s("theoutput", "width", vars.tawidth); 
                    dom.s("theoutput", "height", vars.taheight);
                    dom.us(st.h.br,"","holder");
                    dom.uca(st.h.bn, "close", "Close", "holder", st.a.oc, "dom.ac('outputholder')");
                    

                    
            };