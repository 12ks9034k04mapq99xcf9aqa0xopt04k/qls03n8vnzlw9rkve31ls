//=========================================================================
//=========================== INITIALIZATION ==============================
//=========================================================================
    window.onload = function() {
        document.body.setAttribute("id", "thebody"); //SHORTCUT = st.d.b
        dom.ac("thebody");
        dom.co(st.h.dv, st.d.mi); //SHORTCUT = sid
        dom.us(st.h.br,"",st.d.b);
        dom.co(st.h.dv,st.d.mlg);
        rv.cr();
        setInterval(system.resize,500);
    };
//=========================================================================
//==================== VARS = VARIABLES FOR SYSTEM ========================
//=========================================================================
    (function(window){
        var vars = {
            windowsize: 0,
            hidemore: true,
            tawidth: "20em",
            taheight: "5em",
            theme: ["black","darkblue"],
            themelib: ["gray","green"],
            themeBC: 1,
            currentrv: 0,
            input: "",
            lib: 0,
            mlibrary: ["","",""],
            tempmlibrary: ["","",""],
            library: "",
            commands:"",
            log: "",
            extra:"",
            extraid:0,
            mextra:["","","",""],
            logpresent: false,
            logopen: false,
            rvhd: false, //Tells if the receiver is hidden or unhidden
            loghd: false //Tells if the log is hidden or unhidden
        };
        if(typeof(window.vars)==="undefined"){window.vars = vars;};
    })(window);
//=========================================================================
//=================== SHORTCUT FOR COMMON STRINGS =========================
//=========================================================================
    (function(window){
        var st = {};
        st.d = {b:"thebody", mi:"maininputdiv",ba:"buttonarea", rv:"recieverdiv", lr:"librarydiv", lg:"logdiv", mlg:"malogdiv", cmd:"commandsdivision", mr: "morebuttonsdivision", ex:"extradivision"};
        st.h = {dv:"DIV",bn:"BUTTON",in:"INPUT",ta:"TEXTAREA",p:"P",h1:"H1",br:"BR"};
        st.a = {oc:"onclick"};
        st.s = {ta:"textAlign", dp:"display", bg:"backgroundColor", co:"color",mg:"margin", fs:"fontSize",sz:"size",pd:"padding"};
        if(typeof(window.st)==="undefined"){window.st = st;};
    })(window); 
//=========================================================================
//========================= RECIEVER INTERFACE ============================
//=========================================================================
    (function(window){
        function rvfunctions() {
            var f = {};
            f.cr = function () {
                dom.ac(st.d.mi);
                dom.us(st.h.dv, st.d.rv, st.d.mi); //Create RECIEVER division
                dom.s(st.d.b,st.s.ta,"center");
                dom.s(st.d.mi,st.s.dp,"inline-block");
                dom.s(st.d.rv,st.s.pd,"2px");
                dom.us(st.h.ta, "rv.i",st.d.rv);
                dom.s("rv.i", "width", vars.tawidth); dom.s("rv.i", "height", vars.taheight);
                dom.s(st.d.rv, st.s.bg, vars.theme[vars.themeBC]); dom.s("rv.i", "backgroundColor", vars.theme[vars.themeBC]); dom.s("rv.i", "color", "white");
                dom.us(st.h.br,"",st.d.rv);
                dom.us(st.h.dv, st.d.ba, st.d.rv);
                dom.us(st.h.dv, st.d.mr, st.d.rv);
                rv.btns();
                dom.ac(st.d.mr);
                if (vars.hidemore === false) { rv.more(); dom.uat("rvm","Less...");}else if(vars.hidemore === true){dom.uat("rvm","More...");};
                vars.currentrv = 1;
                //Reload Any Previous Inputs
                // Always this put on the last part.
                // Any code below this reload part will not work.
                var reload = dom.g("rv.i");
                reload.value = vars.input;
                /////////////////////////
            };
            f.msg = function() {
                dom.ac(st.d.rv);
                dom.uc(st.h.p, "message", "Executing Code...", st.d.rv);
                dom.s("message", "color", "white");
                dom.s("message","padding", "8px");
            };
            f.btns = function() { 
                dom.ac(st.d.ba);
                dom.uca(st.h.bn, "rvex", "Compile", st.d.ba, st.a.oc, "rv.ex()");
                dom.s("rvex","padding", "2px");
                dom.s("rvex","margin", "2px");
		dom.s("rvex", "backgroundColor", vars.theme[vars.themeBC]);
		dom.s("rvex", "color", "white");
                dom.uca(st.h.bn, "rvcl", "Clear", st.d.ba, st.a.oc, "rv.cl()");
                dom.s("rvcl","padding", "2px");
                dom.s("rvcl","margin", "2px");
		dom.s("rvcl", "backgroundColor", vars.theme[vars.themeBC]);
		dom.s("rvcl", "color", "white");
		dom.uca(st.h.bn, "rvrl", "Reload",st.d.ba, st.a.oc, "rv.rl()");
                dom.s("rvrl","padding", "2px");
                dom.s("rvrl","margin", "2px");
		dom.s("rvrl", "backgroundColor", vars.theme[vars.themeBC]);
		dom.s("rvrl", "color", "white");
                dom.uca(st.h.bn, "rvhd", "Hide", st.d.ba, st.a.oc, "rv.hd()");
                dom.s("rvhd","padding", "2px");
		dom.s("rvhd","margin", "2px");
		dom.s("rvhd", "backgroundColor", vars.theme[vars.themeBC]);
		dom.s("rvhd", "color", "white");
		dom.uca(st.h.bn, "rvm", "More...", st.d.ba, st.a.oc, "rv.rmore()");
                dom.s("rvm","padding", "2px");
                dom.s("rvm","margin", "2px");
		dom.s("rvm", "backgroundColor", vars.theme[vars.themeBC]);
		dom.s("rvm", "color", "white");
            };
            f.rmore = function () {
                dom.ac(st.d.mr);
                if (vars.hidemore === true) {
                    vars.hidemore = false;
                    dom.uat("rvm","Less...");
                    rv.more();
                }else if (vars.hidemore === false) {
                    vars.hidemore = true;
                    dom.uat("rvm","More...");
                }
            };
            f.more = function () {
                dom.uca(st.h.bn, "mrba", "Library", st.d.mr, st.a.oc, "lr.rv()");
                dom.s("mrba","padding", "2px");
                dom.s("mrba","margin", "2px");
                dom.s("mrba", "backgroundColor", vars.theme[vars.themeBC]);
                dom.s("mrba", "color", "white");
                dom.uca(st.h.bn, "mrbb", "Data", st.d.mr, st.a.oc, "ex.rv()");
                dom.s("mrbb","padding", "2px");
                dom.s("mrbb","margin", "2px");
                dom.s("mrbb", "backgroundColor", vars.theme[vars.themeBC]);
                dom.s("mrbb", "color", "white");
                dom.uca(st.h.bn, "mrbc", "Log", st.d.mr, st.a.oc, "log.open()");
                dom.s("mrbc","padding", "2px");
                dom.s("mrbc","margin", "2px");
                dom.s("mrbc", "backgroundColor", vars.theme[vars.themeBC]);
                dom.s("mrbc", "color", "white");
                dom.uca(st.h.bn, "mrbd", "Commands", st.d.mr, st.a.oc, "commandinterface.rv()");
                dom.s("mrbd","padding", "2px");
                dom.s("mrbd","margin", "2px");
                dom.s("mrbd", "backgroundColor", vars.theme[vars.themeBC]);
                dom.s("mrbd", "color", "white");
            };
            f.ex = function () {
                vars.input = dom.gv("rv.i");
                var data = dom.gv("rv.i");
                var txt0 = " ";
                var txt1 = "rv.msg();setTimeout(function(){rv.cr();";
                var txt2 = "},1000);";
                var txt3 = txt0.concat(data);
                var txt4 = txt1.concat(vars.library);
                var txt5 = txt4.concat(txt3);
                var txt6 = txt5.concat(txt2);
                vars.input = dom.gv("rv.i");
                dom.ac(st.d.rv);
                dom.us(st.h.dv, st.d.ba, st.d.rv);
                dom.s(st.d.ba,"margin", "5px");
                dom.uca(st.h.bn, "rvex", "Execute", st.d.ba, st.a.oc, txt6);
		dom.s("rvex","padding", "3px");
                dom.s("rvex","margin", "2px");
		dom.s("rvex", "backgroundColor", vars.theme[vars.themeBC]);
		dom.s("rvex", "color", "white");
		dom.uca(st.h.bn, "rvbk", "Back", st.d.ba, st.a.oc, "rv.cr();");
		dom.s("rvbk","padding", "3px");
                dom.s("rvbk","margin", "2px");
		dom.s("rvbk", "backgroundColor", vars.theme[vars.themeBC]);
		dom.s("rvbk", "color", "white");
            };
            f.cl = function () {
                var reload = dom.g("rv.i");
                reload.value = "";
                vars.input = dom.gv("rv.i");
            };
            f.rl = function () {
                var reload = dom.g("rv.i");
                reload.value = vars.input;
            };
            f.hd = function () {
                if (vars.rvhd === false) {
                    vars.rvhd = true;
                    var rvi = dom.g("rv.i");
                    vars.input = rvi.value;
                    dom.ac(st.d.mi);
                    dom.uca(st.h.bn, "rv.uh", "Unhide", st.d.mi, st.a.oc, "rv.uh()");
                };
            };
            f.uh = function () {
                if (vars.rvhd === true) {
                    vars.rvhd = false;
                    dom.ac(st.d.mi);
                    rv.cr();
                    var reload = dom.g("rv.i");
                    reload.value = vars.input;
                };
            };
            
            return f;
        };
        
        if(typeof(window.rv)==="undefined") {window.rv = rvfunctions();};
    })(window);
//=========================================================================
//======================== LIBRARY INTERFACE ==============================
//=========================================================================
    (function(window){
         function lrfunctions() {
             var f = {};
             f.rv = function() {
                vars.input = dom.gv("rv.i");
                lr.li();
            };
            //li = Library Interface
            f.li = function () {
                    dom.ac(st.d.mi);
                    dom.us(st.h.dv, st.d.lr, st.d.mi); //Create RECIEVER division ssd = "securitydivision"
                    dom.s(st.d.b,st.s.ta,"center");
                    dom.s(st.d.mi,st.s.dp,"inline-block");
                    dom.s(st.d.lr,st.s.pd,"3px");
                    dom.us(st.h.ta, "srv.i",st.d.lr);
                    dom.s("srv.i", "width", vars.tawidth); dom.s("srv.i", "height", vars.taheight); 
                    dom.s(st.d.lr, st.s.bg, vars.theme[vars.themeBC]);dom.s("srv.i", "backgroundColor", vars.theme[vars.themeBC]); dom.s("srv.i", "color", "white");
                    dom.us(st.h.br,"",st.d.lr);
                    dom.uca(st.h.bn, "sga", "Start", st.d.lr, st.a.oc, "lr.le()");
                    dom.s("sga","padding", "2px");
                    dom.s("sga","margin", "2px");
                    dom.s("sga", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("sga", "color", "white");
                    dom.uca(st.h.bn, "lc", "Clear", st.d.lr, st.a.oc, "lr.lc()");
                    dom.s("lc","padding", "2px");
                    dom.s("lc","margin", "2px");
                    dom.s("lc", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("lc", "color", "white");
                    dom.uca(st.h.bn, "lr", "Reload", st.d.lr, st.a.oc, "lr.lr()");
                    dom.s("lr","padding", "2px");
                    dom.s("lr","margin", "2px");
                    dom.s("lr", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("lr", "color", "white");
                    dom.uca(st.h.bn, "lh", "Hide", st.d.lr, st.a.oc, "lr.lh()");
                    dom.s("lh","padding", "2px");
                    dom.s("lh","margin", "2px");
                    dom.s("lh","marginRight", "6px");
                    dom.s("lh", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("lh", "color", "white");
                    dom.uca(st.h.bn, "l1", "1", st.d.lr, st.a.oc, "lr.ll(0);");
                    dom.s("l1","padding", "2px");
                    dom.s("l1","margin", "2px");
                    dom.s("l1", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("l1", "color", "white");
                    dom.uca(st.h.bn, "l2", "2", st.d.lr, st.a.oc, "lr.ll(1);");
                    dom.s("l2","padding", "2px");
                    dom.s("l2","margin", "2px");
                    dom.s("l2", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("l2", "color", "white");
                    dom.uca(st.h.bn, "l3", "3", st.d.lr, st.a.oc, "lr.ll(2);");
                    dom.s("l3","padding", "2px");
                    dom.s("l3","margin", "2px");
                    dom.s("l3", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("l3", "color", "white");
                    var prevlib = dom.g("srv.i"); prevlib.value = vars.mlibrary[vars.lib];
                    vars.currentrv = 2;
                    lr.ll(vars.lib);
		};
		//le = Library Enter
		f.le = function() {
                        var tagetvalue = dom.g("srv.i");
                        vars.tempmlibrary[vars.lib] = tagetvalue.value;
			vars.mlibrary[0] = vars.tempmlibrary[0];
                        vars.mlibrary[1] = vars.tempmlibrary[1];
                        vars.mlibrary[2] = vars.tempmlibrary[2];
			rv.cr();
			var rvi = dom.g("rv.i");
			rvi.value = vars.input;
		};
		//lc = Library Clear
		f.lc = function() {
                        var reload = dom.g("srv.i");
                        reload.value = "";
		};
                //lr = Library Reload
		f.lr = function() {
                        var reload = dom.g("srv.i");
                        reload.value = vars.mlibrary[vars.lib];
		};
                //lh = Library Hide
		f.lh = function () {
                    if (vars.rvhd === false) {
                        vars.rvhd = true;
                        vars.mlibrary[vars.lib] = dom.gv("srv.i");
                        dom.ac(st.d.mi);
                        dom.uca(st.h.bn, "lr.lh", "Unhide", st.d.mi, st.a.oc, "lr.lu()");
                    };
                };
                //lu = Library Unhide
                f.lu = function () {
                    if (vars.rvhd === true) {
                        vars.rvhd = false;
                        dom.ac(st.d.mi);
                        lr.li();
                    };
                };
                f.ll = function(id) {
                    var tagetvalue = dom.g("srv.i");
                    vars.tempmlibrary[vars.lib] = tagetvalue.value;
                    clearInterval();
                    var currentlib = ["l1","l2","l3"];
                    dom.s(currentlib[vars.lib],"backgroundColor",vars.theme[vars.themeBC]);
                    vars.lib = id;
                    setInterval(function(){if(vars.currentrv === 2){dom.s(currentlib[vars.lib],"backgroundColor",vars.themelib[vars.themeBC]);};},500);
                    tagetvalue = dom.g("srv.i");
                    tagetvalue.value = vars.tempmlibrary[vars.lib];
                    
                };
                f.library = function() {
                    
                    var txt1 = vars.mlibrary[0];
                    var txt2 = vars.mlibrary[1]; 
                    var txt3 = vars.mlibrary[2];
                    
                    var txt4 = txt1.concat(txt2);
                    var txt5 = txt4.concat(txt3);
                    
                    return vars.library = txt5;
                };
                
                setInterval(function(){lr.library();},10);
                
                return f;
         };
        
        if (typeof(window.lr)=== "undefined") {window.lr = lrfunctions();};
    })(window);
//=========================================================================
//============================ DATA INTERFACE ==============================
//=========================================================================
    (function(window){
        function datafunctions() {
            var f = {};
            //dom.co(st.h.dv,"logdivision"); //Shortcut >> sld
            f.rv = function() {
                vars.input = dom.gv("rv.i");
                ex.open();
            };
            f.open = function() {
                    dom.ac(st.d.mi);
                    dom.us(st.h.dv, st.d.ex, st.d.mi);
                    dom.ac(st.d.ex);
                    dom.s(st.d.b,st.s.ta,"center");
                    dom.s(st.d.ex,st.s.dp,"inline-block");
                    dom.s(st.d.ex,st.s.pd,"3px");
                    dom.s(st.d.ex,"margin","5px");
                    dom.us(st.h.ta, "ex.i",st.d.ex);
                    dom.s("ex.i", "width", vars.tawidth); dom.s("ex.i", "height", vars.taheight); 
                    dom.s(st.d.ex, st.s.bg, vars.theme[vars.themeBC]);dom.s("ex.i", "backgroundColor", vars.theme[vars.themeBC]); dom.s("ex.i", "color", "white");
                    dom.us(st.h.br,"",st.d.ex);
                    dom.uca(st.h.bn, "exsv", "Save", st.d.ex, st.a.oc, "ex.save()");
                    dom.s("exsv","padding", "2px");
                    dom.s("exsv","margin", "2px");
                    dom.s("exsv", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("exsv", "color", "white");
                    dom.uca(st.h.bn, "excl", "Clear", st.d.ex, st.a.oc, "ex.clear()");
                    dom.s("excl","padding", "2px");
                    dom.s("excl","margin", "2px");
                    dom.s("excl", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("excl", "color", "white");
                    dom.uca(st.h.bn, "exrl", "Reload", st.d.ex, st.a.oc, "ex.reload()");
                    dom.s("exrl","padding", "2px");
                    dom.s("exrl","margin", "2px");
                    dom.s("exrl", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("exrl", "color", "white");
                    dom.uca(st.h.bn, "exhd", "Hide", st.d.ex, st.a.oc, "ex.hide()");
                    dom.s("exhd","padding", "2px");
                    dom.s("exhd","margin", "2px");
                    dom.s("exhd","marginRight", "6px");
                    dom.s("exhd", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("exhd", "color", "white");
                    dom.uca(st.h.bn, "exp1", "1", st.d.ex, st.a.oc, "ex.ll(0)");
                    dom.s("exp1","padding", "2px");
                    dom.s("exp1","margin", "2px");
                    dom.s("exp1", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("exp1", "color", "white");
                    dom.uca(st.h.bn, "exp2", "2", st.d.ex, st.a.oc, "ex.ll(1)");
                    dom.s("exp2","padding", "2px");
                    dom.s("exp2","margin", "2px");
                    dom.s("exp2", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("exp2", "color", "white");
                    dom.uca(st.h.bn, "exp3", "3", st.d.ex, st.a.oc, "ex.ll(2)");
                    dom.s("exp3","padding", "2px");
                    dom.s("exp3","margin", "2px");
                    dom.s("exp3", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("exp3", "color", "white");
                    dom.uca(st.h.bn, "exp4", "4", st.d.ex, st.a.oc, "ex.ll(3)");
                    dom.s("exp4","padding", "2px");
                    dom.s("exp4","margin", "2px");
                    dom.s("exp4", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("exp4", "color", "white");
                    var previnput = dom.g("ex.i"); previnput.value = vars.mextra[vars.extraid];
                    vars.currentrv = 4;
                    ex.ll(vars.extraid);
            };
            f.save = function() {
                var reload = dom.g("ex.i");
                vars.mextra[vars.extraid] = reload.value;
                dom.ac(st.d.mi);
                rv.cr();
            };
            f.clear = function () {
                var reload = dom.g("ex.i");
                reload.value = "";
                vars.mextra[vars.extraid] = dom.gv("ex.i");
            };
            f.reload = function () {
                var reload = dom.g("ex.i");
                reload.value = vars.mextra[vars.extraid];
            };
            f.hide = function () {
                if (vars.rvhd === false) {
                    vars.rvhd = true;
                    var logi = dom.g("ex.i");
                    vars.mextra[vars.extraid] = logi.value;
                    dom.ac(st.d.mi);
                    dom.uca(st.h.bn, "ex.uh", "Unhide", st.d.mi, st.a.oc, "ex.unhide()");
                    dom.s("ex.uh","margin","3px");
                };
            };
            f.unhide = function () {
                if (vars.rvhd === true) {
                    vars.rvhd = false;
                    dom.ac(st.d.mi);
                    ex.open();
                    var reload = dom.g("ex.i");
                    reload.value = vars.mextra[vars.extraid];
                };
            };
            f.ll = function(id) {
                    var tagetvalue = dom.g("ex.i");
                    vars.mextra[vars.extraid] = tagetvalue.value;
                    clearInterval();
                    var currentextra = ["exp1","exp2","exp3","exp4"];
                    dom.s(currentextra[vars.extraid],"backgroundColor",vars.theme[vars.themeBC]);
                    vars.extraid = id;
                    setInterval(function(){if(vars.currentrv === 4){dom.s(currentextra[vars.extraid],"backgroundColor",vars.themelib[vars.themeBC]);};},500);
                    tagetvalue = dom.g("ex.i");
                    tagetvalue.value = vars.mextra[vars.extraid];
                    
                };
                f.extra = function() {
                    
                    var txt1 = vars.mextra[0];
                    var txt2 = vars.mextra[1]; 
                    var txt3 = vars.mextra[2];
                    var txt4 = vars.mextra[3];
                    
                    var txt5 = txt1.concat(txt2);
                    var txt6 = txt5.concat(txt3);
                    var txt7 = txt6.concat(txt4);
                    
                    return vars.extra = txt7;
                };
            f.val = function() {
                return vars.extra;
            };
            return f;
        };
        
        if(typeof(window.ex)==="undefined") {window.ex = datafunctions();};
    })(window);
//=========================================================================
//============================ LOG INTERFACE ==============================
//=========================================================================
    (function(window){
        function logfunctions() {
            var f = {};
            //dom.co(st.h.dv,"logdivision"); //Shortcut >> sld
            f.w = function(text) {
                var write; var message;
                    
                if(vars.logopen === false) {
                    log.open();
                };
                if (vars.loghd === false) {
                    write = dom.g("log.i");
                    if (vars.log.length === 0) {
                        message = vars.log.concat(text);
                    }else if (vars.log.length !== 0) {
                        message = vars.log.concat("\n" + text);
                    };
                    write.value = message;
                    vars.log = message;
                }else if (vars.loghd === true) {
                    if (vars.log.length === 0) {
                        message = vars.log.concat(text);
                    }else if (vars.log.length !== 0) {
                        message = vars.log.concat("\n" + text);
                    };
                    vars.log = message;
                };
               
            };
            f.open = function() {
                if(vars.logopen === false) {
                    dom.ac(st.d.mlg);
                    dom.us(st.h.dv, st.d.lg, st.d.mlg);
                    dom.ac(st.d.lg);
                    dom.s(st.d.b,st.s.ta,"center");
                    dom.s(st.d.lg,st.s.dp,"inline-block");
                    dom.s(st.d.lg,st.s.pd,"3px");
                    dom.s(st.d.lg,"margin","5px");
                    dom.us(st.h.ta, "log.i",st.d.lg);
                    dom.s("log.i", "width", vars.tawidth); dom.s("log.i", "height", vars.taheight); 
                    dom.s(st.d.lg, st.s.bg, vars.theme[vars.themeBC]);dom.s("log.i", "backgroundColor", vars.theme[vars.themeBC]); dom.s("log.i", "color", "white");
                    dom.us(st.h.br,"",st.d.lg);
                    dom.uca(st.h.bn, "logclose", "Close", st.d.lg, st.a.oc, "log.close()");
                    dom.s("logclose","padding", "2px");
                    dom.s("logclose","margin", "2px");
                    dom.s("logclose", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("logclose", "color", "white");
                    dom.uca(st.h.bn, "logc", "Clear", st.d.lg, st.a.oc, "log.clear()");
                    dom.s("logc","padding", "2px");
                    dom.s("logc","margin", "2px");
                    dom.s("logc", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("logc", "color", "white");
                    dom.uca(st.h.bn, "logr", "Reload", st.d.lg, st.a.oc, "log.reload()");
                    dom.s("logr","padding", "2px");
                    dom.s("logr","margin", "2px");
                    dom.s("logr", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("logr", "color", "white");
                    dom.uca(st.h.bn, "logh", "Hide", st.d.lg, st.a.oc, "log.hide()");
                    dom.s("logh","padding", "2px");
                    dom.s("logh","margin", "2px");
                    dom.s("logh", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("logh", "color", "white");
                    var previnput = dom.g("log.i"); previnput.value = vars.log;
                    vars.logpresent = true;
                    vars.logopen = true;
                };
            };
            f.close = function() {
                dom.ac(st.d.mlg);
                vars.logpresent = false;
                vars.logopen = false;
            };
            f.clear = function () {
                var reload = dom.g("log.i");
                reload.value = "";
                vars.log = dom.gv("log.i");
            };
            f.reload = function () {
                var reload = dom.g("log.i");
                reload.value = vars.log;
            };
            f.hide = function () {
                if (vars.loghd === false) {
                    vars.loghd = true;
                    var logi = dom.g("log.i");
                    vars.log = logi.value;
                    dom.ac(st.d.mlg);
                    dom.uca(st.h.bn, "log.uh", "Log Unhide", st.d.mlg, st.a.oc, "log.unhide()");
					dom.s("log.uh","margin","3px");
                };
            };
            f.unhide = function () {
                if (vars.loghd === true) {
                    vars.loghd = false;
                    dom.ac(st.d.mlg);
                    vars.logopen = false;
                    log.open();
                    var reload = dom.g("log.i");
                    reload.value = vars.log;
                };
            };            
            return f;
        };
        
        if(typeof(window.log)==="undefined") {window.log = logfunctions();};
    })(window);
//=========================================================================
//======================== COMMANDS INTERFACE =============================
//=========================================================================
    (function(window){
         function cifunctions() {
             var f = {};
             f.rv = function() {
                vars.input = dom.gv("rv.i");
                commands();
            };
            //li = Library Interface
            f.cr = function (message) {
                    dom.ac(st.d.mi);
                    dom.us(st.h.dv, st.d.cmd, st.d.mi); //Create RECIEVER division ssd = "securitydivision"
                    dom.s(st.d.b,st.s.ta,"center");
                    dom.s(st.d.mi,st.s.dp,"inline-block");
                    dom.s(st.d.cmd,st.s.pd,"3px");
                    dom.us(st.h.ta, "command",st.d.cmd);
                    dom.s("command", "width", vars.tawidth); dom.s("command", "height", vars.taheight); 
                    dom.s(st.d.cmd, st.s.bg, vars.theme[vars.themeBC]);dom.s("command", "backgroundColor", vars.theme[vars.themeBC]); dom.s("command", "color", "white");
                    dom.us(st.h.br,"",st.d.cmd);
                    dom.uca(st.h.bn, "cga", "Close", st.d.cmd, st.a.oc, "rv.cr()");
                    dom.s("cga","padding", "2px");
                    dom.s("cga","margin", "2px");
                    dom.s("cga", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("cga", "color", "white");
                    dom.uca(st.h.bn, "rf", "Refresh", st.d.cmd, st.a.oc, "commandinterface.rf()");
                    dom.s("rf","padding", "2px");
                    dom.s("rf","margin", "2px");
                    dom.s("rf", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("rf", "color", "white");
                    dom.uca(st.h.bn, "chd", "Hide", st.d.cmd, st.a.oc, "commandinterface.hd()");
                    dom.s("chd","padding", "2px");
                    dom.s("chd","margin", "2px");
                    dom.s("chd", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("chd", "color", "white");
                    var prevlib = dom.g("command"); prevlib.value = message;
                    vars.currentrv = 3;
		};
                //lr = Library Reload
		f.rf = function() {
                        commands();
		};
                //lh = Library Hide
		f.hd = function () {
                    if (vars.rvhd === false) {
                        vars.rvhd = true;
                        dom.ac(st.d.mi);
                        dom.uca(st.h.bn, "ci.hd", "Unhide", st.d.mi, st.a.oc, "commandinterface.uh()");
                    };
                };
                //lu = Library Unhide
                f.uh = function () {
                    if (vars.rvhd === true) {
                        vars.rvhd = false;
                        commands();
                    };
                };
                
                return f;
         };
        
        if (typeof(window.commandinterface)=== "undefined") {window.commandinterface = cifunctions();};
    })(window);
    window.commands = (function(){
        return function() {
                  var list = [];
                  vars.commands = "";
                  list[0] = "LIST OF COMMANDS";
                  list[1] = "Please memorize the commands";
                  list[2] = "the command's name >> the command's description";
                  list[3] = "log.w(); >> writes the parameters on the log";
                  list[4] = "log.open(); >> opens the log. no parameters needed";
                  list[5] = "system.reload(); >> reloads the entire page. no parameters.";
                  list[6] = "system.showcodes(); >> returns the input and the library you entered.use log.w(); to view it.";
                  list[7] = "system.showlibrary(); >> returns the library you entered in a presentable way.use log.w(); to view it.";
                  list[8] = "system.library(); >> returns the library you entered.use log.w(); to view it.\n system.library(0,true); >> exclude all libraries in code in the next and later executions.\nsystem.library(0,false); >> include all libraries in code in the next and later executions.";
                  list[9] = "system.library(1,); >> returns the first library you entered.use log.w(); to view it. \nsystem.library(1,true); >> exclude library1 in code in the next and later executions\nsystem.library(1,false); >> include library1 in code in the next and later executions.";
                  list[10] = "system.library(2); >> returns the second library you entered.use log.w(); to view it.\nsystem.library(2,true); >> exclude library2 in code in the next and later executions.\nsystem.library(2,false); >> include library2 in code in the next and later executions.";
                  list[11] = "system.library(3); >> returns the third library you entered.use log.w(); to view it.\nsystem.library(3,true); >> exclude library3 in code in the next and later executions.\nsystem.library(3,false); >> include library3 in code in the next and later executions.";
                  list[12] = "system.screenwidth; >> shows the current screen width. no parameters.";
                  list[13] = "system.screenheight; >> shows the current screen height. no parameters.";
                  for (i=0;i<list.length;i++) {
                      var txt1 = list[i];
                      var txt2 = vars.commands.concat(txt1 + "\n**************************\n");
                      vars.commands = txt2;
                  };
                  return commandinterface.cr(vars.commands);
            };
    }());
//=========================================================================
//========================== INTERNAL SYSTEMS =============================
//=========================================================================
    (function(window){
        function systemfunctions() {
            var f = {};
            f.reload = function() {
                dom.ac(st.d.b);
                setTimeout(function () {
                    dom.uc(st.h.h1,"txt","RELOADING PAGE...",st.d.b);
                    setTimeout(function(){window.location.reload();},1500);
                }, 10);
            };
            f.library = function(id) {
                    if (id === undefined) {
                        return vars.library;
                    }else if (id === 1) {
                        return vars.mlibrary[0];
                    }else if (id === 2) {
                        return vars.mlibrary[1];
                    }else if (id === 3) {
                        return vars.mlibrary[2];
                    };
            };
            f.data = function(id) {
                if (typeof(id) === "undefined") {
                    return ex.extra();
                }else if (typeof(id) !== "undefined" && id !== 1 && id !== 2 && id !== 3) {
                    return ex.extra();
                }else if (typeof(id) !== "undefined" && id === 1) {
                    return vars.mextra[0];
                }else if (typeof(id) !== "undefined" && id === 2) {
                    return vars.mextra[1];
                }else if (typeof(id) !== "undefined" && id === 3) {
                    return vars.mextra[2];
                }
                
            };
            f.screenwidth = window.innerWidth;
            f.screenheight = window.innerHeight;
            f.showlibrary = function() {
                    var txt0 = "/****First Library****/\n\n";
                    var txt1 = vars.mlibrary[0];
                    var txt2 = vars.mlibrary[1];
                    var txt3 = vars.mlibrary[2];
                    var txt4 = txt0.concat(txt1);
                    var txt5 = txt4.concat("\n\n/****Second Library****/\n\n" + txt2 + "\n\n/****Third Library****/\n\n");
                    var txt6 = txt5.concat(txt3);
                    
                    return txt6;
            };
            f.showcodes = function() {
                var txt1 = "************** INPUTS **************\n\n";
                var txt2 = "\n\n*************************************\n\n************** LIBRARY **************\n\n";
                var txt3 = "\n\n*************************************";
                var txt4 = vars.input;
                var txt5 = vars.library;
                if (vars.input.length <= 0) {txt4 = "Input is Empty";};
                if (vars.mlibrary[vars.lib].length <= 0) {txt5 = "Library is Empty";};
                var txt6 = txt1.concat(txt4);
                var txt7 = txt6.concat(txt2);
                var txt8 = txt7.concat(txt5);
                var txt9 = txt8.concat(txt3); 
                return txt9;
            };
            f.savecookie = function(id,value,expiration) {
                var txt1 = id;
                var txt2 = value;
                var txt3 = expiration;
                var txt4 = txt1.concat("=" + txt2);
                var txt5 = txt4.concat(";expires=" + txt3 + ";");
                return document.cookie = txt5;
            };
            f.loadcookie = function(id) {
                var thecookie = document.cookie.split("=");
                if (id === undefined) {
                    return thecookie;
                }else if (id !== undefined) {
                    return thecookie[id];
                }
            };
            f.storageset = function(id,value) {
                localStorage.setItem(id,value);
            };
            f.storageget = function(id) {
                var idtype = typeof(id);
                var txt = "Enter the correct parameters you idiot!!!";
                if (idtype === "string") {
                    txt = localStorage.getItem(id);
                }else if (idtype === "number") {
                    txt = localStorage.getItem(localStorage.key(id));
                };
                return txt;
            };
            f.storageshow = function() {
                var n = localStorage.length;
                var txt1 = "";
                var txt2 = "";
                for (i=0;i<n;i++) {
                    txt2 = (i + ") Key[ " + localStorage.key(i) + " ] Value[ " + localStorage.getItem(localStorage.key(i)) + " ] \n");  
                    txt1 = txt1.concat(txt2);
                };
                
                return txt1;
            };
            f.storageremove = function(id) {
                var idtype = typeof(id);
                if (idtype === "string") {
                    localStorage.removeItem(id);
                }else if (idtype === "number") {
                    localStorage.removeItem(localStorage.key(id));
                }else if (idtype === "undefined") {
                    localStorage.clear();
                };
            };
            f.resize = function() {
                var getw = window.innerWidth;
                if (getw !== vars.windowsize) {
                    vars.windowsize = getw;
                    var w = getw / 20;
                    var h = getw / 80;
                    if (w > 35) {w = 35;};
                    if (h < 6) {
                        h = 6;
                    }else if (h > 9) {
                        h = 9;
                    };	
                    var tw = w.toString();
                    var th = h.toString();
                    var t1 = "em";
                    var t2 = tw.concat(t1);
                    var t3 = th.concat(t1);
                    vars.tawidth = t2;
                    vars.taheight = t3;
                    var tagetvalue;
                    var tavalue;
                    if (vars.logpresent === true && vars.loghd === false) {
                        tagetvalue = dom.g("log.i");
                        tavalue = tagetvalue.value;
                        vars.logopen = false;
                        log.open();
                        tagetvalue = dom.g("log.i");
                        tagetvalue.value = tavalue;
                    };
                    if (vars.currentrv === 1) {
                        tagetvalue = dom.g("rv.i");
                        tavalue = tagetvalue.value;
                        rv.cr();
                        tagetvalue = dom.g("rv.i");
                        tagetvalue.value = tavalue;
                    }else if (vars.currentrv === 2) {
                        tagetvalue = dom.g("srv.i");
                        tavalue = tagetvalue.value;
                        lr.li();
                        tagetvalue = dom.g("srv.i");
                        tagetvalue.value = tavalue;
                    }else if (vars.currentrv === 3) {
                        tagetvalue = dom.g("command");
                        tavalue = tagetvalue.value;
                        commandinterface.cr();
                        tagetvalue = dom.g("command");
                        tagetvalue.value = tavalue;
                    }else if (vars.currentrv === 4) {
                        tagetvalue = dom.g("ex.i");
                        tavalue = tagetvalue.value;
                        ex.open();
                        tagetvalue = dom.g("ex.i");
                        tagetvalue.value = tavalue;
                    };
                };
            };
            
            return f;
        };
        if (typeof(window.system)==="undefined"){window.system = systemfunctions();};
    })(window); 
//=========================================================================
//============= DOCUMENT OBJECT MODEL AND CANVAS LIBRARY ==================
//=========================================================================
    (function(window){
        function domfunctions() {
            var f = {};
            //g = getElementById
            f.g = function(id) {var a = document.getElementById(id); return a;};
            //gv = getElementById.value
            f.gv = function(id) {var a = document.getElementById(id).value; return a;};
            //gi = getElementById.innerHTML
            f.gi = function(id,value) {var a = document.getElementById(id).innerHTML = value; return a;};
            //All Clear
            f.ac = function(id) {var a = document.getElementById(id); while (a.hasChildNodes()){a.removeChild(a.firstChild);};};
            //COntainer
            f.co = function (type, id) {var a = document.createElement(type); a.setAttribute("id", id); document.body.appendChild(a);};
            //UI Add Text
            f.uat = function (id,text) {var a = document.getElementById(id); var b = document.createTextNode(text); if (a.hasChildNodes()===true){a.removeChild(a.firstChild);a.appendChild(b);};};
            // Simple
            f.us = function (type,id,attach) {var a = document.createElement(type); var c = document.getElementById(attach); a.setAttribute("id",id); c.appendChild(a);};
            // Complex
            f.uc = function (type,id,text,attach) {var a = document.createElement(type); var b = document.createTextNode(text); var c = document.getElementById(attach); a.setAttribute("id",id); a.appendChild(b); c.appendChild(a);};
            //Complex + Advance Functions
            f.uca = function (type,id,text,attach,action,func) {var a = document.createElement(type); var b = document.createTextNode(text); var c = document.getElementById(attach); a.setAttribute("id",id); a.setAttribute(action,func); a.appendChild(b); c.appendChild(a);};
            //Complex + Width Height >> For html tags that uses width and height
            f.ubta = function (id,text,attach,width,height) {var a = document.createElement("TEXTAREA"); var b = document.createTextNode(text); var c = document.getElementById(attach); a.setAttribute("id",id);a.appendChild(b); c.appendChild(a);dom.s(id, "width", width); dom.s(id, "height", height);};
            //Canvas
            f.canvas = function(name,attach,width,height) {dom.us("CANVAS",name,attach);dom.s(name,"width",width + "px");dom.s(name,"height",height + "px");};
            //Attribute
            f.a = function (id,type,value) {var a = document.getElementById(id); a.setAttribute(type,value);};
            //Styles
            f.s = function (elementid, theproperty, value) {
                var a = document.getElementById(elementid); 
                switch (theproperty) {
                    // ADD CSS ELEMENTS HERE
                    case "color": a.style.color = value; break;
                    case "textAlign": a.style.textAlign = value; break;
                    case "position":a.style.position = value;break;
                    case "display": a.style.display = value; break;
                    case "backgroundColor": a.style.backgroundColor = value; break;
                    case "size": a.style.size = value; break;
                    case "margin": a.style.margin = value; break;
                    case "marginTop": a.style.marginTop = value; break;
                    case "marginBottom": a.style.marginBottom = value; break;
                    case "marginLeft": a.style.marginLeft = value; break;
                    case "marginRight": a.style.marginRight = value; break;
                    case "padding": a.style.padding = value; break;
                    case "paddingTop": a.style.paddingTop = value; break;
                    case "paddingBottom": a.style.paddingBottom = value; break;
                    case "paddingLeft": a.style.paddingLeft = value; break;
                    case "paddingRight": a.style.paddingRight = value; break;
                    case "fontSize": a.style.fontSize = value; break;
                    case "width": a.style.width = value; break;
                    case "height": a.style.height = value; break;
                    //============================
                    default: alert("property not found");
                }; 
            };
            
            return f;
        };
        
        if(typeof(window.dom)==="undefined") {window.dom = domfunctions();};
        
    })(window);
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
//=========================================================================
//======================== END OF JAVASCRIPT ==============================
//=========================================================================