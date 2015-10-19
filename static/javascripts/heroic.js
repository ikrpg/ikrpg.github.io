// global
// var ikrpg

var ikrpg = ikrpg || {};

(function() {
  //'use strict';
  
  ikrpg.cards = ikrpg.cards || {};
  
  ikrpg.cards.cleanData = function() {
    
    function clean(object) {
      $.each(object, function(key, value) {
        if($.type(value) === "object") {
          object[key] = clean(value);
        } else {
          object[key] = "";
        }
      });
      
      return object;
    }
    
    clean(ikrpg.cards.data);
    
  };
  
  ikrpg.cards.data = {
    "portrait": { "url": "", "top": 0, "left": 0, "width": 0 },
    "hero-name": "Hero's name",
    "sex": "", // sheet
    "definingcharacteristics": "", // sheet
    "weight": "", // sheet
    "archetype": "Archetype",
    "race": "Race",
    "level": "Level",
    "careers": "Careers",
    "faith": "", // sheet
    "playername": "", // sheet
    "height": "", // sheet
    "phy": 0,
    "phymax": 0, // sheet
    "spd": 0,
    "spdmax": 0, // sheet
    "str": 0,
    "strmax": 0, // sheet
    "agl": 0,
    "aglmax": 0, // sheet
    "poi": 0,
    "poimax": 0, // sheet
    "prw": 0,
    "prwmax": 0, // sheet
    "int": 0,
    "intmax": 0, // sheet
    "arc": 0,
    "arcmax": 0, // sheet
    "per": 0,
    "permax": 0, // sheet
    "defracialmodifier": 0, // sheet
    "defequipmentmodifiers": 0, // sheet
    "def": 0,
    "iniequipmentmodifiers": 0, // sheet
    "iniadditionalmodifiers": 0, // sheet
    "ini": 0,
    "cmdcommandskill": 0, // sheet
    "cmdabilitymodifier": 0, // sheet
    "cmd": 0,
    "armshieldmodifier": 0, // sheet
    "armarmormodifiers": 0, // sheet
    "armothermodifiers": 0, // sheet
    "arm": 0,
    "wil": 0,
    "rat1": { "name": "Weapon name", "rat": 0, "rng": 0, "aoe": 0, "pow": 0, "notes": "", "ammo": "" },
    "rat2": { "name": "Weapon name", "rat": 0, "rng": 0, "aoe": 0, "pow": 0, "notes": "", "ammo": "" },
    "mat1": { "name": "Weapon name", "mat": 0, "pow": 0, "ps": 0, "notes": "" },
    "mat2": { "name": "Weapon name", "mat": 0, "pow": 0, "ps": 0, "notes": "" },
    "mat3": { "name": "Weapon name", "mat": 0, "pow": 0, "ps": 0, "notes": "", "free": "" },
    "feats": 0,
    "ini_mod": 0,
    "def_mod": 0,
    "arm_mod": 0,
    "cmd_mod": 0,
    "xp": 0,
    "r1m1": true,
    "r2m1": false,
    "r1m2": false,
    "r2": false,
    "m2": false,
    "ability1": { "title": "ability/benefit", "description": "", "page": "" },
    "ability2": { "title": "", "description": "", "page": "" },
    "ability3": { "title": "", "description": "", "page": "" },
    "ability4": { "title": "", "description": "", "page": "" },
    "ability5": { "title": "", "description": "", "page": "" },
    "ability6": { "title": "", "description": "", "page": "" },
    "ability7": { "title": "", "description": "", "page": "" },
    "ability8": { "title": "", "description": "", "page": "" },
    "ability9": { "title": "", "description": "", "page": "" },
    "ability10": { "title": "", "description": "", "page": "" },
    "ability11": { "title": "", "description": "", "page": "" },
    "ability12": { "title": "", "description": "", "page": "" },
    "ability13": { "title": "", "description": "", "page": "" },
    "ability14": { "title": "", "description": "", "page": "" },
    "ability15": { "title": "", "description": "", "page": "" },
    "ability16": { "title": "", "description": "", "page": "" },
    "ability17": { "title": "", "description": "", "page": "" },
    "ability18": { "title": "", "description": "", "page": "" },
    "ability19": { "title": "", "description": "", "page": "" },
    "ability20": { "title": "", "description": "", "page": "" },
    "s1": { "title": "skill", "stat": "INT", "base": "0", "lvl": "0", "sum": "0" },
    "s2": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s3": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s4": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s5": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s6": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s7": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s8": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s9": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s10": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s11": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s12": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s13": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s14": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s15": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s16": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s17": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s18": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s19": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s20": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "s21": { "title": "", "stat": "", "base": "", "lvl": "", "sum": "" },
    "benefit1": { "title": "benefit/feat", "description": "description", "page": "" },
    "benefit2": { "title": "", "description": "", "page": "" },
    "benefit3": { "title": "", "description": "", "page": "" },
    "benefit4": { "title": "", "description": "", "page": "" },
    "benefit5": { "title": "", "description": "", "page": "" },
    "benefit6": { "title": "", "description": "", "page": "" },
    "benefit7": { "title": "", "description": "", "page": "" },
    "benefit8": { "title": "", "description": "", "page": "" },
    "benefit9": { "title": "", "description": "", "page": "" },
    "benefit10": { "title": "", "description": "", "page": "" },
    "benefit11": { "title": "", "description": "", "page": "" },
    "spell1": { "title": "spell", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell2": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell3": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell4": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell5": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell6": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell7": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell8": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell9": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell10": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "spell11": { "title": "", "cost": "", "rng": "", "aoe": "", "pow": "", "up": "", "off": "", "description": "" },
    "gear1": { "title": "gear", "benefit": "" },
    "gear2": { "title": "", "benefit": "" },
    "gear3": { "title": "", "benefit": "" },
    "gear4": { "title": "", "benefit": "" },
    "gear5": { "title": "", "benefit": "" },
    "gear6": { "title": "", "benefit": "" },
    "gear7": { "title": "", "benefit": "" },
    "gear8": { "title": "", "benefit": "" },
    "gear9": { "title": "", "benefit": "" },
    "gear10": { "title": "", "benefit": "" },
    "gear11": { "title": "", "benefit": "" },
    "gear12": { "title": "", "benefit": "" },
    "gear13": { "title": "", "benefit": "" },
    "gear14": { "title": "", "benefit": "" },
    "gear15": { "title": "", "benefit": "" },
    "gear16": { "title": "", "benefit": "" },
    "gear17": { "title": "", "benefit": "" },
    "gear18": { "title": "", "benefit": "" },
    "gear19": { "title": "", "benefit": "" },
    "gear20": { "title": "", "benefit": "" },
    "gear21": { "title": "", "benefit": "" },
    "gear22": { "title": "", "benefit": "" },
    "gear23": { "title": "", "benefit": "" },
    "wornarmor1": { "name": "", "notes": "", "spd": "", "def": "", "arm": "" }, // sheet
    "wornarmor2": { "name": "", "notes": "", "spd": "", "def": "", "arm": "" }, // sheet
    "wornarmor3": { "name": "", "notes": "", "spd": "", "def": "", "arm": "" }, // sheet
    "wornarmor4": { "name": "", "notes": "", "spd": "", "def": "", "arm": "" }, // sheet
    "connection1": { "name": "", "notes": "", "page": "" }, // sheet
    "connection2": { "name": "", "notes": "", "page": "" }, // sheet
    "connection3": { "name": "", "notes": "", "page": "" }, // sheet
    "connection4": { "name": "", "notes": "", "page": "" }, // sheet
    "arcanetradition": "", // sheet
    "mechanika1": { "housing": "", "runeplate": "", "capacitor": "", "note": "" }, // sheet
    "mechanika2": { "housing": "", "runeplate": "", "capacitor": "", "note": "" }, // sheet
    "mechanika3": { "housing": "", "runeplate": "", "capacitor": "", "note": "" }, // sheet
    "mechanika4": { "housing": "", "runeplate": "", "capacitor": "", "note": "" }, // sheet
    "mechanika5": { "housing": "", "runeplate": "", "capacitor": "", "note": "" }, // sheet
    "runeplate1": { "title": "", "benefit": "" }, // sheet
    "runeplate2": { "title": "", "benefit": "" }, // sheet
    "runeplate3": { "title": "", "benefit": "" }, // sheet
    "runeplate4": { "title": "", "benefit": "" }, // sheet
    "capacitor1": { "title": "", "charges": "" }, // sheet
    "capacitor2": { "title": "", "charges": "" }, // sheet
    "capacitor3": { "title": "", "charges": "" }, // sheet
    "capacitor4": { "title": "", "charges": "" }, // sheet
    "note1": { "title": "Permanent Injuries", "text": "" },
    "note2": { "title": "Spoken Languages", "text": "" },
    "note3": { "title": "Religious Beliefs", "text": "" },
    "note4": { "title": "Connections", "text": "" },
    "note5": { "title": "Gold", "text": "" },
    "note6": { "title": "", "text": "" },
    "note7": { "title": "", "text": "" },
    "note8": { "title": "", "text": "" },
    "note9": { "title": "", "text": "" },
    "note10": { "title": "", "text": "" },
    "note11": { "title": "", "text": "" },
    "note12": { "title": "", "text": "" },
    "permanentinjury1": "", // sheet
    "permanentinjury2": "", // sheet
    "permanentinjury3": "", // sheet
    "spokenlanguage1": "", // sheet
    "spokenlanguage2": "", // sheet
    "spokenlanguage3": "", // sheet
    "religiousbelief1": "", // sheet
    "religiousbelief2": "", // sheet
    "religiousbelief3": "", // sheet
    "gold": 0 // sheet
  };
  
  ikrpg.cards.updateData = function() {
    var data = ikrpg.cards.data;
    for(var key in data) {
      var value = data[key];
      
      if(key == "hero-name") {
        var currentData = $(".hero-name").val();
        ikrpg.cards.data["hero-name"] = currentData;
      } else if(typeof value === "object") {
        for (var subkey in value) {
          var subvalue = value[subkey];
          var currentData = $("#"+key+" ."+subkey).val();
          ikrpg.cards.data[key][subkey] = currentData;
        }
      } else { // not object
        var currentData = $("#"+key).val();
        ikrpg.cards.data[key] = currentData;
      }
    }
  };
  
  ikrpg.cards.switchWeapons = function(event) {
    if(event) event.preventDefault();
    
    var data = ikrpg.cards.data;
    if (data.r1m1 == true) { data.r1m1 = false; data.r2m1 = true; }
    else if (data.r2m1 == true) { data.r2m1 = false; data.r1m2 = true; }
    else if (data.r1m2 == true) { data.r1m2 = false; data.r2 = true; }
    else if (data.r2 == true) { data.r2 = false; data.m2 = true; }
    else if (data.m2 == true) { data.m2 = false; data.r1m1 = true; }
    else { data.r1m1 = true; }

    ikrpg.cards.data = data;

    var showElements = function(array) { $.each(array, function(i, e) { e.show(); }); };
    var hideElements = function(array) { $.each(array, function(i, e) { e.hide(); }); };
    var r1m1 = $("div#r1m1:first");
    var r2m1 = $("div#r2m1:first");
    var r1m2 = $("div#r1m2:first");
    var r2 = $("div#r2:first");
    var m2 = $("div#m2:first");
    var rat1 = $("div#rat1:first");
    var rat2 = $("div#rat2:first");
    var mat1 = $("div#mat1:first");
    var mat2 = $("div#mat2:first");
    var mat3 = $("div#mat3:first");
    if (data.r1m1) {
      showElements([ r1m1, rat1, mat2 ]);
      hideElements([ r2m1, r1m2, r2, m2, mat1, rat2, mat3 ]);
    } else if (data.r2m1) {
      showElements([ r2m1, rat1, rat2, mat3 ]);
      hideElements([ r1m1, r1m2, r2, m2, mat1, mat2 ]);
    } else if (data.r1m2) {
      showElements([ r1m2, rat1, mat2, mat3 ]);
      hideElements([ r1m1, r2m1, r2, m2, mat1, rat2 ]);
    } else if (data.r2) {
      showElements([ r2, rat1, rat2 ]);
      hideElements([ r1m1, r2m1, r1m2, m2, mat1, mat2, mat3 ]);
    } else if (data.m2) {
      showElements([ m2, mat1, mat2 ]);
      hideElements([ r1m1, r2m1, r1m2, r2, rat1, rat2, mat3 ]);
    }
  };
  
  ikrpg.cards.weaponSwitch = function() {
    $("a#weapons-switch:first").on("click", ikrpg.cards.switchWeapons);
  };
  
  ikrpg.cards.resize = function(textarea) {
    return function() {
      textarea.css("height", "auto");
      var height = Math.max($(textarea)[0].scrollHeight, "24");
      textarea.css("height", height+"px");
    };
  };
  
  ikrpg.cards.resizableTextareas = function() {
    var resize = ikrpg.cards.resize;
    var delayedResize = function(textarea) {
      return function() { window.setTimeout(resize(textarea), 0); };
    };
    
    $("textarea").each(function(index, elem) {
      var textarea = $(elem);
      textarea.on("change", resize(textarea));
      textarea.on("cut", delayedResize(textarea));
      textarea.on("paste", delayedResize(textarea));
      textarea.on("drop", delayedResize(textarea));
      textarea.on("keydown", delayedResize(textarea));
    });
  };
  
  ikrpg.cards.fillOut = function() {
    for (var attribute in ikrpg.cards.data) { fill(attribute, ikrpg.cards.data[attribute]); }
    
    function fill(attribute, value) {
      if (typeof value === "object") {
        var parent = $("#"+attribute+":first");
        for (var key in value) {
          var child = $("#"+attribute+":first input."+key+", #"+attribute+":first textarea."+key);
          if (child && child.length > 0) {
            child[0].value = value[key];
            if (child[0].nodeName == "TEXTAREA") ikrpg.cards.resize(child)();
          }
        }
      } else {
        var element = $("input#"+attribute+":first");
        if (element && element[0]) {
          element.val(value);
        } else {
          element = $("input."+attribute);
          if (element) {
            element.val(value);
          }
        }
      }
    }
  };

  ikrpg.cards.generateSeed = function() {
    $("#generate-seed").on("click", function(event) {
      event.preventDefault();
      
      ikrpg.cards.updateData();
      
      var json = JSON.stringify(ikrpg.cards.data);
      var compressed = LZString.compressToBase64(json);
      $("#seed").val(compressed);
            
      return false;
    });
  };
  
  ikrpg.cards.updateSeed = function() {
    $("#update-seed").on("click", function(event) {
      event.preventDefault();
      
      var seed = $("#seed").val();
      var decompressed = LZString.decompressFromBase64(seed);
      var json = JSON.parse(decompressed);
      ikrpg.cards.data = json;
      
      ikrpg.cards.fillOut();
      ikrpg.cards.switchWeapons();
      ikrpg.cards.heroNameHack();
      
      ikrpg.cards.setPortrait();
      
      return false;
    });
  };
  
  ikrpg.cards.heroNameHack = function() {
    var heroNames = $("input.hero-name");
    heroNames.each(function(index, input) {
      $(input).on("change", function() {
        var val = $(input).val();
        heroNames.val(val);
        ikrpg.cards.data["hero-name"] = val;
      });
    });
  };
  
  ikrpg.cards.setupPortrait = function() {
    var zoom_in = function(event) {
      var width = $(this).width() * 1.2;
      $(this).animate({ width: width });
      $("#portrait input.width").val(width);

      return false;
    };
    var zoom_out = function() {
      var width = $(this).width() / 1.2;
      $(this).animate({ width: width });
      $("#portrait input.width").val(width);

      return false;
    };
    var show_url = function() {
      $("#portrait input.url").show().focus();
    };
    var hide_url = function() {
      $("#portrait input.url").hide();
    };
    var set_img_src = function() {
      var val = $("#portrait input.url").val();
      var img = $("#pic > img");
      if(val && img.attr("src") != val) {
        img.attr("src", val);
        $("#portrait input.top").val(0);
        $("#portrait input.left").val(0);
      }
    };
    
    var portrait = $("#pic > img");
    portrait.draggable({
      cursor: "crosshair",
      stop: function(event, ui) {
        var pos = ui.position;
        $("#portrait input.top").val(pos.top);
        $("#portrait input.left").val(pos.left);
      }
    });
    portrait.on("click", zoom_in);
    portrait.on("dblclick", zoom_out);
    portrait.on("contextmenu", zoom_out);
    portrait.on("mouseover", show_url);
    portrait.on("mouseout", function() {
      hide_url();
      set_img_src();
    });
  };
  
  ikrpg.cards.setPortrait = function() {
    var img = $("#pic > img");
    if(img) {
      var portrait = ikrpg.cards.data["portrait"];
      img.attr("src", portrait["url"]);
      img.css("top", portrait["top"]+"px");
      img.css("left", portrait["left"]+"px");
      img.css("width", portrait["width"]+"px");
    }
  };
  
  
  ikrpg.cards.init = function() {
    ikrpg.cards.fillOut();
    ikrpg.cards.resizableTextareas();
    ikrpg.cards.weaponSwitch();
    ikrpg.cards.heroNameHack();
    ikrpg.cards.generateSeed();
    ikrpg.cards.updateSeed();
    ikrpg.cards.setupPortrait();
  };
})();