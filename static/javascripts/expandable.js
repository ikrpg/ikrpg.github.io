(function() {
  function addListener(elem, event, f) {
    if (elem.addEventListener) elem.addEventListener(event, f, false);
    else elem.attachEvent("on"+event, f);
  }
  
  function expand() {
    var jsOnloads = document.querySelectorAll("a.js-expandable");
    
    for(var index = 0; index < jsOnloads.length; index++) {
      var jsOnload = jsOnloads.item(index)
        , body = document.querySelector("body")
        , availableWidth = parseFloat(window.getComputedStyle(body)["width"], 10)
        , article = body.querySelector("article")
        , style = window.getComputedStyle(article)
        , iniWidth = parseFloat(style["width"], 10)
        , paddingLeft = parseFloat(style["paddingLeft"], 10)
        , maxWidth = availableWidth - 2 * paddingLeft;
      
      function resize(event) {
        event.preventDefault();
        var width = parseFloat(style["width"], 10)
          , newWidth = (width >= maxWidth-30) ? iniWidth : maxWidth
          , text = (width >= maxWidth-30) ? "&#xE012;" : "&#xE014;";
        
        article.style["width"] = newWidth.toString()+"px";
        jsOnload.innerHTML = text;
      }
      
      function over(event) {
        event.preventDefault();
        var width = parseFloat(style["width"], 10);
        
        if (width == iniWidth)
          article.style["width"] = (iniWidth+30).toString()+"px";
        else if (width == maxWidth)
          article.style["width"] = (maxWidth-30).toString()+"px";
      }
      
      function out(event) {
        event.preventDefault();
        var width = parseFloat(style["width"], 10);
        
        if (width == iniWidth+30)
          article.style["width"] = iniWidth.toString()+"px";
        else if (width == maxWidth-30)
          article.style["width"] = maxWidth.toString()+"px";
      }
      
      addListener(jsOnload, "mouseover", over);
      addListener(jsOnload, "mouseout", out);
      addListener(jsOnload, "click", resize);
    }
  }
  
  if (window.addEventListener) window.addEventListener("DOMContentLoaded", expand, false);
  else window.attachEvent("onload", expand);
}());