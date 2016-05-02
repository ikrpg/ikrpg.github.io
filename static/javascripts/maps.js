// global
// var ikrpg

var ikrpg = ikrpg || {};

(function() {
  
  var db2 = new PouchDB('maps.ikrpg');
  
  listMaps();
  
  fillLibrary();
  
  makeRemover($('#img-library'));
  
  $('#img-library .lib-img.tile').each(function(index, el) {
    var $el = $(el);
    makeDraggableCreator(8, '#map-area .tile', 90, 250)($el);
  });
  
  $('#img-library .lib-img.token, #img-library .lib-img.base').each(function(index, el) {
    var $el = $(el);
    makeDraggableCreator(1, '#map-area .token, #map-area .base', 22.5, 125)($el);
  });
  
  makeMapSaver($('#save-as'));
  
  
  
  function fillLibrary() {
    appendTiles();
    append10x3tokens();
    append1x1Stokens();
    append4x3tokens();
    append1x1Ltokens();
    appendSmallBases();
    appendMediumBases();
  
    function appendTiles() {
      $.each(['01', '02', '03', '04', '05', '06', '07', '08', '09'], function(i, id) {
        $.each(['A', 'B'], function(j, key) {
          $('#tiles').append('\
            <li class="tile">\
              <h4>HW Board '+key+id+'</h4>\
              <img class="lib-img tile" src="/static/images/maps/tiles/HW-Board-'+key+id+'.png" />\
            </li>\
          ');
        });
      });
    }
  
    function append10x3tokens() {
      $.each(['03', '10', '17', '24'], function(i, id) {
        $.each(['A', 'B'], function(j, key) {
          $('#tokens10x3').append('\
            <li class="token10x3">\
              <h4>HW '+key+id+'</h4>\
              <img class="lib-img token token10x3" src="/static/images/maps/tokens/elongated/HW-'+key+id+'.png" />\
            </li>\
          ');
        });
      });
    }
  
    function append1x1Stokens() {
      $.each(['04', '05', '06', '07', '11', '12', '13', '14', '18', '19', '20', '21', '25', '26', '27', '28'], function(i, id) {
        $.each(['A', 'B'], function(j, key) {
          $('#tokens1x1s').append('\
            <li class="token1x1s">\
              <h4>HW '+key+id+'</h4>\
              <img class="lib-img token token1x1s" src="/static/images/maps/tokens/small/HW-'+key+id+'.png" />\
            </li>\
          ');
        });
      });
    }
  
    function append4x3tokens() {
      $.each(['02', '09', '16', '23'], function(i, id) {
        $.each(['A', 'B'], function(j, key) {
          $('#tokens4x3').append('\
            <li class="token4x3">\
              <h4>HW Board '+key+id+'</h4>\
              <img class="lib-img token token4x3" src="/static/images/maps/tokens/medium/HW-'+key+id+'.png" />\
            </li>\
          ');
        });
      });
    }
  
    function append1x1Ltokens() {
      $.each(['01', '08', '15', '22'], function(i, id) {
        $.each(['A', 'B'], function(j, key) {
          $('#tokens1x1l').append('\
            <li class="token1x1l">\
              <h4>HW '+key+id+'</h4>\
              <img class="lib-img token token1x1l" src="/static/images/maps/tokens/large/HW-'+key+id+'.png" />\
            </li>\
          ');
        });
      });
    }
  
    function appendSmallBases() {
      $.each(['Farrow-Brigand', 'Gullin', 'Knor', 'Lurk', 'Razor-Boar', 'Slaughterhouser', 'Warlord-Morrg', 'Zocha'], function(i, name) {
        $('#bases-small').append('\
          <li class="base-small">\
            <img class="lib-img base base-small" src="/static/images/maps/bases/small/'+name+'.png" />\
          </li>\
        ');
      });
    }
  
    function appendMediumBases() {
      $.each(['Longchops'], function(i, name) {
        $('#bases-medium').append('\
          <li class="base-medium">\
            <img class="lib-img base base-medium" src="/static/images/maps/bases/medium/'+name+'.png" />\
          </li>\
        ');
      });
    }
  }
  
  function makeRemover($el) {
    $el.droppable({
      accept: 'img',
      drop: function(event, ui) {
        $(ui.draggable).remove();
      }
    })
  }
  
  function makeDraggableCreator(step, stackSelector, angle, duration) {
    return function($el) {
      $el.click(function(event) {
        var $img = createImg($el.attr('class'), $el.attr('src'));
    
        $img.offset({
          top: event.pageY - $img.height() / 2,
          left: event.pageX - $img.width() / 2
        });
    
        makeDraggable(step, stackSelector)($img);
        makeRotateable(angle, duration)($img);
        disableContextMenu($img);
      });
    };
  }
  
  function makeMapSaver($el) {
    $el.click(function(event) {
      event.preventDefault();
      var map = currentMapData();
      var _id = $('#map-name').val();
      
      var json = { '_id': _id, 'data': map };
      
      db2.get(_id, function(error, doc) {
        if(error) { // map not in db yet
          doc = json;
          doc["_id"] = _id;
          db2.put(doc);
        } else { // map already in db
          json["_id"] = doc["_id"];
          json["_rev"] = doc["_rev"];
          db2.put(json);
        }
        listMaps();
        $('#map-area img').remove();
        setTimeout(function() {
          fill(false, json);
        }, 300);
      });
    });
  }
  
  function listMaps() {
    $("#load-maps > tbody").remove();

    $("#load-maps").append("<tbody>");

    db2.allDocs({include_docs: true}, function(error, results) {
      if(!error) {
        var rows = results.rows;
    
        $.each(rows, function(index, row) {
          var map = row.doc;
        
          function appendTr() {
            $("#load-maps > tbody").append("<tr>");
          }
        
          function appendTd() {
            $("#load-maps > tbody > tr:last-of-type").append("<td>");
          }
        
          function lastTd() {
            return $("#load-maps > tbody > tr:last-of-type > td:last-of-type");
          }
        
          appendTr();
          appendTd();
          lastTd().text(map["_id"]);
          appendTd();
          lastTd().html("<a href=\"#\">Load</a>");
          lastTd().find('a').click(showMap(map['_id']));
          appendTd();
          lastTd().html("<a href=\"#\"><strong>Delete</strong></a>");
          lastTd().find('a').click(deleteMap(map['_id'], map['_rev']));
        });
      }
    });
  }

  function showMap(_id) {
    return function(event) {
      event.preventDefault();
      $('#map-name').val(_id);
      db2.get(_id, fill);
    };
  };
  
  function fill(error, json) {
    if(!error) {
      var map = json.data;
      $('#map-area img').remove();
      var mapAreaOffset = $('#map-area').offset();
            
      $.each(map, function(index, img) {
        var top = img.top;
        var left = img.left;
        var angle = img.angle;
        var src = img.src;
        var classes = img.classes;
        
        var $img = createImg(classes, src);
        
        console.log('up', mapAreaOffset.top, mapAreaOffset.left)
        
        // TODO: SUUUPER dirty! Refactor this!
        if(classes.indexOf('tile') > 0) {
          makeDraggable(8, '#map-area .tile')($img);
          makeRotateable(90, 250)($img);
        } else if(classes.indexOf('token') > 0 || classes.indexOf('base') > 0) {
          makeDraggable(1, '#map-area .token, #map-area .base')($img);
          makeRotateable(22.5, 125)($img);
        }
        
        $img.offset({
          top: top + $('#map-area').offset().top,
          left: left + $('#map-area').offset().left
        });
        
        $img.css({ transform: "rotate(" + angle + "deg)" });
        $img.data('angle', angle);
        
        disableContextMenu($img);
      });
    }
  }

  function deleteMap(_id, _rev) {
    return function(event) {
      event.preventDefault();
      if(confirm("This will delete your map. Do you want to proceed?")) {
        db2.remove(_id, _rev, function(error, code) {
          var map = currentMapData();
          listMaps();
          $('#map-area img').remove();
          var json = { 'data': map };
          setTimeout(function() {
            fill(false, json);
          }, 300);
        });
      }
    };
  };
  
  function createImg(classes, src) {
    var $img = $('<img />');
    $img.addClass(classes);
    $img.attr('src', src);
    $('#map-area').append($img);
    return $img;
  }
  
  function makeDraggable(step, stackSelector) {
    return function($el) {
      $el.draggable({
        cursor: 'crosshair',
        cursorAt: { left: $el.width() / 2, top: $el.height() / 2 },
        opacity: 0.5,
        drag: grid(),
        stack: stackSelector
      });
    
      function grid() {
        var $parent = $el.parent();
        var parentOffset = $parent.offset();
      
        var compensation = {
          top: parentOffset.top % step,
          left: parentOffset.left % step
        };
      
        return function(event, ui) {
          var remainder = {
            top: ui.position.top % step,
            left: ui.position.left % step
          };
        
          ui.position = {
            top: ui.position.top - remainder.top + compensation.top,
            left: ui.position.left - remainder.left + compensation.left
          };
        };
      };
    };
  };
  
  function makeRotateable(degree, duration) {
    return function($el) {
      // Idea: If $el is clicked but not moved, it is rotated
      
      $el.data('angle', 0);
      
      $el.mousedown(function(event) {
        var offset = $el.offset();
        $el.data('moved', false);
      });
      $el.mousemove(function(event) {
        $el.data('moved', true);
      });
      $el.mouseup(function(event) {
        var offset = $el.offset();
        if(!$el.data('moved')) {
          // Rotate element clockwise if it did not move. On right click, rotate counterclockwise.
          rotateElement($el, event.button === 2 ? -degree : degree, duration);
        }
        $el.removeData('moved');
      });
    
      return $el;
    };
  
    function rotateElement($el, degree, duration) {
      var w = $el.css('width');
      var h = $el.css('height');
    
      var currentAngle = getCurrentRotationAngle($el);
      var angle = currentAngle + degree;
      
      $({deg: currentAngle}).animate({deg: angle}, {
        duration: duration,
        step: function(now){
            $el.css({ transform: "rotate(" + now + "deg)" });
        }
      });
      
      $el.data('angle', angle);
    }
  
    function getCurrentRotationAngle($el) {
      var st = window.getComputedStyle($el[0], null);
      var tr = st.getPropertyValue("-webkit-transform") ||
               st.getPropertyValue("-moz-transform") ||
               st.getPropertyValue("-ms-transform") ||
               st.getPropertyValue("-o-transform") ||
               st.getPropertyValue("transform") ||
               'none';
        
      if(tr === 'none') {
        tr = 'matrix(0.0, 0.0, 0.0, 0.0, 0px, 0px)';
      }
        
      var values = tr.split('(')[1].split(')')[0].split(',');
      var a = values[0];
      var b = values[1];

      var scale = Math.sqrt(a*a + b*b);
      var sin = b/scale;
      var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        
      return angle;
    }
  };
  
  function disableContextMenu($el) {
    $el[0].oncontextmenu = function() { return false; }
  }
  
  function currentMapData($mapArea) {
    var data = [];
    
    var $mapArea = $('#map-area');
    
    var areaOffset = $mapArea.offset();
    $mapArea.find('img').each(function(i, img) {
        var $img = $(img);
        $img.css('width', 0);
        $img.css('height', 0);
        $img.css({ transform: 'rotate(0deg)' });
        var imgOffset = $img.offset();
        
        console.log('down', areaOffset.top, areaOffset.left)
        
        var entry = {
            top: imgOffset.top - areaOffset.top,
            left: imgOffset.left - areaOffset.left,
            angle: $img.data('angle'),
            src: $img.attr('src'),
            classes: $img.attr('class')
        };
    
        data.push(entry);
    });
    
    return data;
  }
  
})();