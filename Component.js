sap.ui.define(
    ["sap/ui/core/UIComponent"
    //,"sap/ui/model/json/JSONModel"         That does not work.
    //,"sap/ui/model/resource/ResourceModel"
    ],
    function(UIComponent) {
        "use strict";
        return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
            metadata:{
                rootView: {
                    "viewName": "sap.ui.demo.walkthrough.view.App",
                    "type": "XML",
                    "async": true,
                    "id": "app"
                }
            },
           init: function(){
               UIComponent.prototype.init.apply(this, arguments);
               var oData = {
                   recipient: {name: "World"}
               };
               var oModel = new sap.ui.model.json.JSONModel(oData);     //added full namespace instead
               this.setModel(oModel);
               var i18nModel = new sap.ui.model.resource.ResourceModel({ 
                   bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
               });
               this.setModel(i18nModel, "i18n"); 
           } 
        });
    });