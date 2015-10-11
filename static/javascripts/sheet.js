// global
// var ikrpg

var ikrpg = ikrpg || {};

(function() {
  
  ikrpg.sheet = ikrpg.sheet || {};
  var sheet = ikrpg.sheet;
  
  
  ikrpg.cards.init();
  
  
  // # Manage characters # \\
  (function() {
      
    var db2 = new PouchDB('characters.ikrpg');
    
    var hero = ikrpg.cards.data;
    
    listCharacters();
  
    function saveHero() {
      ikrpg.cards.updateData();
      hero = ikrpg.cards.data;
    
      var _id = hero["hero-name"].replace(/["']/g, "");
    
      db2.get(_id, function(error, doc) {
        if(error) { // hero not in db yet
          doc = hero;
          doc["_id"] = _id;
          db2.put(doc);
        } else { // hero already in db
          hero["_id"] = doc["_id"];
          hero["_rev"] = doc["_rev"];
          db2.put(hero);
        }
        listCharacters();
      });
    }
  
    function listCharacters() {
      $("#characters > tbody").remove();
    
      $("#characters").append("<tbody>");
    
      db2.allDocs({include_docs: true}, function(error, results) {
        var rows = results.rows;
        
        $.each(rows, function(index, row) {
          var character = row.doc;
            
          function appendTr() {
            $("#characters > tbody").append("<tr>");
          }
            
          function appendTd() {
            $("#characters > tbody > tr:last-of-type").append("<td>");
          }
            
          function lastTd() {
            return $("#characters > tbody > tr:last-of-type > td:last-of-type");
          }
            
          appendTr();
          appendTd();
          lastTd().text(character["hero-name"]);
          appendTd();
          lastTd().text(character["archetype"]);
          appendTd();
          lastTd().text(character["race"]);
          appendTd();
          lastTd().text(character["careers"]);
          appendTd();
          lastTd().html("<a href=\"javascript:ikrpg.sheet.showCharacter('"+character["_id"]+"')\">Load</a>");
          appendTd();
          lastTd().html("<a href=\"javascript:ikrpg.sheet.deleteCharacter('"+character["_id"]+"', '"+character["_rev"]+"')\"><strong>Delete</strong></a>");
        });
      });
    }
    
    function fill(error, character) {
      if(!error) {
        ikrpg.cards.data = $.extend(ikrpg.cards.data, character);
        ikrpg.cards.init();
        ikrpg.cards.switchWeapons();
        ikrpg.cards.heroNameHack();
        ikrpg.cards.setPortrait();
      }
    }
    
    function showCharacter(characterId) {
      db2.get(characterId, sheet.fill);
    }
    
    function deleteCharacter(characterId, characterRev) {
      if(confirm("This will delete your character. Do you want to proceed?")) {
        db2.remove(characterId, characterRev, function(error, code) {
          listCharacters();
        });
      }
    }
    
    
    // ## Initialize variables ## \\
    sheet.saveHero = saveHero;
    sheet.fill = fill;
    sheet.showCharacter = showCharacter;
    sheet.deleteCharacter = deleteCharacter;
    
  })();
  
})();