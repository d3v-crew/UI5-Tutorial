sap.ui.define(
    ["sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/walkthrough/controller/HelloDialog"],
    function(UIComponent,JSONModel, HelloDialog) {
        "use strict";
        return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
            metadata:{
                manifest: "json"
            },
            init: function(){
                UIComponent.prototype.init.apply(this, arguments);
                var oData = {
                   recipient: {name: "World"}
               };
                var oModel = new JSONModel(oData);     //added full namespace instead
                this.setModel(oModel);
                this._helloDialog = new HelloDialog(this.getRootControl());
            },
            exit: function(){
                this._helloDialog.destroy();
                delete this._helloDialog;
            },
            openHelloDialog: function(){
                this._helloDialog.open();
            }
        });
    });