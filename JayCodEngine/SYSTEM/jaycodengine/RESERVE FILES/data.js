//=========================================================================
//============================ LOG INTERFACE ==============================
//=========================================================================
    (function(window){
        function datafunctions() {
            var f = {};
            //dom.co(st.h.dv,"logdivision"); //Shortcut >> sld
            f.open = function() {
                    vars.input = dom.gv("rv.i");
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
                    dom.s("exhd", "backgroundColor", vars.theme[vars.themeBC]);
                    dom.s("exhd", "color", "white");
                    var previnput = dom.g("ex.i"); previnput.value = vars.extra;
                    vars.currentrv = 4;
            };
            f.save = function() {
                var reload = dom.g("ex.i");
                vars.extra = reload.value;
                dom.ac(st.d.mi);
                rv.cr();
            };
            f.clear = function () {
                var reload = dom.g("ex.i");
                reload.value = "";
                vars.extra = dom.gv("ex.i");
            };
            f.reload = function () {
                var reload = dom.g("ex.i");
                reload.value = vars.extra;
            };
            f.hide = function () {
                if (vars.rvhd === false) {
                    vars.rvhd = true;
                    var logi = dom.g("ex.i");
                    vars.extra = logi.value;
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
                    reload.value = vars.extra;
                };
            };
            f.val = function() {
                return vars.extra;
            };
            return f;
        };
        
        if(typeof(window.ex)==="undefined") {window.ex = datafunctions();};
    })(window);