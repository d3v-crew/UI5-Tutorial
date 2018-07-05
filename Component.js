sap.ui.define(
    ["sap/ui/core/UIComponent"
    //,"sap/ui/model/json/JSONModel"       //  That does not work.
    ],
    function(UIComponent) {
        "use strict";
        return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
            metadata:{
                manifest: "json"
            },
           init: function(){
               UIComponent.prototype.init.apply(this, arguments);
               var oData = {
                   recipient: {name: ""}
               };
               var oModel = new sap.ui.model.json.JSONModel(oData);     //added full namespace instead
               this.setModel(oModel);
            } 
        });
    });