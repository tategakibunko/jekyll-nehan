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

