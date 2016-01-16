Nehan.setStyles({
  "body":{
    "oncreate":function(ctx){
      $(ctx.dom).fadeTo("fast", 1.0);
    }
  },
  "p":{
    "margin-after":0
  }
});

// font-awesome icon
Nehan.addSingleTagName("fa");
Nehan.setStyle("fa", {
  display:"inline",
  width:"1em",
  height:"1em",
  oncreate:function(ctx){
    var $i = document.createElement("i");
    var names = ctx.box.context.style.markup.getAttr("name").replace(/\s+/g, " ").split(" ");
    var icon_names = ["fa"];
    for(var i = 0; i < names.length; i++){
      icon_names.push("fa-" + names[i]);
    }
    $i.className = icon_names.join(" ");
    ctx.dom.appendChild($i);
    if(ctx.box.context.style.isTextVertical()){
      ctx.dom.style.textAlign = "center";
    }
  },
  onload:function(ctx){
    ctx.getMarkup().setAttr("lazy", true);
  }
});

/* (for ver<= 5.4.0)
// font-awesome icon
Nehan.LexingRule.addSingleTagByName("fa");
Nehan.setStyle("fa", {
  display:"inline",
  width:"1em",
  height:"1em",
  onload:function(ctx){
    var markup = ctx.getMarkup();
    var icon_names = markup.getAttr("name").replace(/\s+/g, " ").split(" ");
    var fa_icon_names = ["fa"].concat(_.map(icon_names, function(icon_name){
      return (icon_name === "fa")? "" : ((icon_name.indexOf("fa-") < 0)? "fa-" + icon_name : icon_name);
    }));
    markup.setContent("<i class='" + fa_icon_names.join(" ") + "'></i>");
    markup.setAttr("pasted", true);
  }
});
*/
