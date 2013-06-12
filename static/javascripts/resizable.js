(function() {
  function addListener(elem, event, f) {
    if (elem.addEventListener) elem.addEventListener(event, f, false);
    else elem.attachEvent("on"+event, f);
  }
  
  function resizing() {
    var jsOnloads = document.querySelectorAll("a.js-resizable");
    
    for(var index = 0; index < jsOnloads.length; index++) {
      var jsOnload = jsOnloads.item(index)
        , article = document.querySelector("body > article")
        , style = window.getComputedStyle(article)
        , fontSize0 = parseFloat(style["fontSize"], 10)
        , fontSize1 = fontSize0 * 1.1
        , fontSize15 = fontSize0 * 1.15
        , fontSize2 = fontSize0 * 1.2
        , fontSize25 = fontSize0 * 1.25
        , fontSize3 = fontSize0 * 1.3;
      
      function resize(event) {
        event.preventDefault();
        var fontSize = parseFloat(style["fontSize"], 10)
          , newFontSize = (fontSize < fontSize15) ? fontSize3 : fontSize0
          , text = (fontSize < fontSize15) ? "&#xE0EB;" : "&#xE0EA;";
        
        article.style["fontSize"] = newFontSize+"px";
        jsOnload.innerHTML = text;
      }
      
      function over(event) {
        event.preventDefault();
        var fontSize = parseFloat(style["fontSize"], 10);
        
        if (fontSize < fontSize15)
          article.style["fontSize"] = fontSize1+"px";
        else if (fontSize > fontSize25)
          article.style["fontSize"] = fontSize2+"px";
      }
      
      function out(event) {
        event.preventDefault();
        var fontSize = parseFloat(style["fontSize"], 10);
        
        if (fontSize > fontSize15)
          article.style["fontSize"] = fontSize3+"px";
        else if (fontSize < fontSize25)
          article.style["fontSize"] = fontSize0+"px";
      }
      
      addListener(jsOnload, "mouseover", over);
      addListener(jsOnload, "mouseout", out);
      addListener(jsOnload, "click", resize);
    }
  }
  
  if (window.addEventListener) window.addEventListener("DOMContentLoaded", resizing, false);
  else window.attachEvent("onload", expand);
}());