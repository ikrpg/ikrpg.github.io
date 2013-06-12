(function() {
  function addListener(elem, event, f) {
    if (elem.addEventListener) elem.addEventListener(event, f, false);
    else elem.attachEvent("on"+event, f);
  }
  
  function opaque() {
    var jsOnloads = document.querySelectorAll("a.js-opaquable");
    
    for(var index = 0; index < jsOnloads.length; index++) {
      var jsOnload = jsOnloads.item(index)
        , body = document.querySelector("body")
        , article = body.querySelector("article")
        , content = article.querySelector("section.content")
        , style = window.getComputedStyle(article)
        , iniColor = style["color"]
        , minColor = "#2C2C2C"
        , iniBackgroundColor = style["backgroundColor"]
        , minBackgroundColor = "rgba(252, 253, 246, 0.50)";
      
      function recolor(event) {
        event.preventDefault();
        var backgroundColor = style["backgroundColor"]
          , alpha = parseFloat(backgroundColor.replace(/^.*,(.+)\)/,'$1'), 10)
          , newBackgroundColor = (alpha > 0.7) ? minBackgroundColor : iniBackgroundColor
          , newColor = (alpha > 0.7) ? minColor : iniColor
          , text = (alpha > 0.7) ? "&#xE05C;" : "&#xE05D;";
        
        article.style["backgroundColor"] = newBackgroundColor;
        body.style["color"] = newColor;
        jsOnload.innerHTML = text;
      }
      
      function over(event) {
        event.preventDefault();
        var backgroundColor = style["backgroundColor"];
        var minus = "rgba(252, 253, 246, 0.75)";
        var plus = "rgba(252, 253, 246, 0.60)";
        
        var alpha = parseFloat(backgroundColor.replace(/^.*,(.+)\)/,'$1'), 10);
        
        if (alpha > 0.8)
          article.style["backgroundColor"] = minus;
        else if (alpha < 0.7)
          article.style["backgroundColor"] = plus;
      }
      
      function out(event) {
        event.preventDefault();
        var backgroundColor = style["backgroundColor"];
        var minus = "rgba(252, 253, 246, 0.75)";
        var plus = "rgba(252, 253, 246, 0.60)";
        
        var alpha = parseFloat(backgroundColor.replace(/^.*,(.+)\)/,'$1'), 10);
        
        if (alpha > 0.7)
          article.style["backgroundColor"] = iniBackgroundColor;
        else if (alpha > 0.55)
          article.style["backgroundColor"] = minBackgroundColor;
      }
      
      addListener(jsOnload, "mouseover", over);
      addListener(jsOnload, "mouseout", out);
      addListener(jsOnload, "click", recolor);
    }
  }
  
  if (window.addEventListener) window.addEventListener("DOMContentLoaded", opaque, false);
  else window.attachEvent("onload", expand);
}());