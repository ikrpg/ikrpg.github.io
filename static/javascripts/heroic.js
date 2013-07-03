function Heroic(Hero) {
  var self = this;
  self.search = "";
  self.url = function() {
  //var root = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
    document.location.search = self.search;
  //return root+"?"+self.search;
  };
  self.redirect = function(link) {
    link.href = self.url();
    link.click();
  //var sheet = document.querySelector("div.sheet");
  //var parent = sheet.parentNode;
  //var content = parent.innerHTML;
  //parent.innerHTML = content+'<a href="'+self.url()+'">Link to this sheet</a>';
  };
  self.bind = function() {
    var query = window.location.search;
    var Query = (query == "") ? {} : JSON.parse(unescape(query.substring(1)));

    for (attr in Query) Hero[attr] = Query[attr];

    var isArray = function(someVar) { return Object.prototype.toString.call(someVar) === "[object Array]"; };
    var isBoolean = function(someVar) { return Object.prototype.toString.call(someVar) === "[object Boolean]"; };
    var isDefined = function(someVar) { return typeof someVar !== "undefined" && someVar != null; };
    var isString = function(someVar) { return typeof someVar === "string"; };
    var isNumber = function(someVar) { return typeof someVar === "number"; };
    var isObject = function(someVar) { return typeof someVar === "object";  };

    var observe;
    if (window.attachEvent) observe = function (element, event, handler) { element.attachEvent('on'+event, handler); };
    else observe = function (element, event, handler) { element.addEventListener(event, handler, false); };

    var resizeTextarea = function(textarea) {
        return function() {
            textarea.style.height = "auto";
            textarea.style.height = (textarea.scrollHeight)+"px";
        };
    };
    var delayedTextareaResize = function(textarea) {
        return function() { window.setTimeout(resizeTextarea(textarea), 0); };
    };
    var autoresizableTextarea = function(textarea) {
        observe(textarea, "change", resizeTextarea(textarea));
        observe(textarea, "cut", delayedTextareaResize(textarea));
        observe(textarea, "paste", delayedTextareaResize(textarea));
        observe(textarea, "drop", delayedTextareaResize(textarea));
        observe(textarea, "keydown", delayedTextareaResize(textarea));
    };

    var redirect = function() {
      //document.location.search = encodeURIComponent(JSON.stringify(Hero));
      self.search = encodeURIComponent(JSON.stringify(Hero));
      console.log(self.search);
    };

    var switchWeapons = function() {
        var r1m1 = Hero.r1m1;
        var r2m1 = Hero.r2m1;
        var r1m2 = Hero.r1m2;
        var r2 = Hero.r2;
        var m2 = Hero.m2;
        if (r1m1 == true) { Hero.r1m1 = false; Hero.r2m1 = true; }
        else if (r2m1 == true) { Hero.r2m1 = false; Hero.r1m2 = true; }
        else if (r1m2 == true) { Hero.r1m2 = false; Hero.r2 = true; }
        else if (r2 == true) { Hero.r2 = false; Hero.m2 = true; }
        else if (m2 == true) { Hero.m2 = false; Hero.r1m1 = true; }
        else { Hero.r1m1 = true; }
        redirect();
    };

    var initialize = function() {
        var textareas = document.querySelectorAll("textarea");
        var fillOut = function(attribute, value) {
            if (isString(value) || isNumber(value)) {
                var element = document.querySelector("input#"+attribute);
                if (element != null && isDefined(element.value)) {
                    element.value = value;
                    if (element.nodeName == "TEXTAREA") resizeTextarea(element)();
                }
            } else if (isObject(value)) {
                var parent = document.querySelector("#"+attribute);
                for (key in value) {
                    var child = parent.querySelector("input."+key+", textarea."+key);
                    if (child != null && isDefined(child.value)) {
                        child.value = value[key];
                        if (child.nodeName == "TEXTAREA") resizeTextarea(child)();
                    }
                }
            }
        };
        var saveOnChange = function(attribute, value) {
            var updateSearchString;
            if (isString(value) || isNumber(value)) {
                var input = document.querySelector("input#"+attribute);
                updateSearchString = function() {
                    Hero[attribute] = input.value;
                    Hero["focus"] = attribute;
                    redirect();
                };
                if (isDefined(input)) { input.addEventListener("change", updateSearchString, false); }
            } else if (isObject(value)) {
                var parent = document.querySelector("#"+attribute);
                updateSearchString = function(key, input) {
                    return function() {
                        Hero[attribute][key] = input.value;
                        Hero["focus"] = attribute;
                        redirect();
                    };
                };
                for (key in value) {
                    var child = parent.querySelector("input."+key+", textarea."+key);
                    if (isDefined(child)) { observe(child, "change", updateSearchString(key, child)); }
                }
            }
        };
        var showWeapons = function(hero) {
            var setDisplay = function(element, bool) { if (isDefined(element.style)) element.style.display = (bool) ? "block" : "none"; };
            var showElement = function(element) { setDisplay(element, true); };
            var hideElement = function(element) { setDisplay(element, false); };
            var showElements = function(array) { if (isDefined(array.forEach)) array.forEach(showElement); };
            var hideElements = function(array) { if (isDefined(array.forEach)) array.forEach(hideElement); };
            var r1m1 = document.querySelector("div#r1m1");
            var r2m1 = document.querySelector("div#r2m1");
            var r1m2 = document.querySelector("div#r1m2");
            var r2 = document.querySelector("div#r2");
            var m2 = document.querySelector("div#m2");
            var rat1 = document.querySelector("div#rat1");
            var rat2 = document.querySelector("div#rat2");
            var mat1 = document.querySelector("div#mat1");
            var mat2 = document.querySelector("div#mat2");
            var mat3 = document.querySelector("div#mat3");
            if (isBoolean(hero.r1m1) && hero.r1m1 == true) {
                showElements([ r1m1, rat1, mat2 ]);
                hideElements([ r2m1, r1m2, r2, m2, mat1, rat2, mat3 ]);
            } else if (isBoolean(hero.r2m1) && hero.r2m1 == true) {
                showElements([ r2m1, rat1, rat2, mat3 ]);
                hideElements([ r1m1, r1m2, r2, m2, mat1, mat2 ]);
            } else if (isBoolean(hero.r1m2) && hero.r1m2 == true) {
                showElements([ r1m2, rat1, mat2, mat3 ]);
                hideElements([ r1m1, r2m1, r2, m2, mat1, rat2 ]);
            } else if (isBoolean(hero.r2) && hero.r2 == true) {
                showElements([ r2, rat1, rat2 ]);
                hideElements([ r1m1, r2m1, r1m2, m2, mat1, mat2, mat3 ]);
            } else if (isBoolean(hero.m2) && hero.m2 == true) {
                showElements([ m2, mat1, mat2 ]);
                hideElements([ r1m1, r2m1, r1m2, r2, rat1, rat2, mat3 ]);
            }
        };
        var focusLastInput = function(hero) {
            if (isDefined(hero["focus"])) {
                var input = document.querySelector("input#"+hero["focus"]);
                if (input == null) input = document.querySelector("#"+hero["focus"]+" input");
                if (input != null) { input.focus(); input.scrollIntoView(); }
            }
        };

        for (var i = 0; i < textareas.length; i++) { autoresizableTextarea(textareas[i]); }
        showWeapons(Hero);
        for (attribute in Hero) { fillOut(attribute, Hero[attribute]); }
        for (attribute in Hero) { saveOnChange(attribute, Hero[attribute]); }
        focusLastInput(Hero);
        
        var names = document.querySelectorAll("section > input.name");
        for (name in names) { names[name].value = Hero["name"]; }
        
        redirect();
    };

    document.addEventListener("DOMContentLoaded", initialize, false);
  };
}