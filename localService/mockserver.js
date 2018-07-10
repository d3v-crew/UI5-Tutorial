sap.ui.define(
    ["sap/ui/core/util/MockServer"],
    function(MockServer){
        "use strict";
        return {
            init: function(){
                var oMockServer = new MockServer({rootUri:"https://services.odata.org/V2/Northwind/Nortwind.svc"});
                var oUriParameters = jQuery.sap.getUriParameters();
                MockServer.config({
                    autoRespond: true, 
                    autoRespondAfter: oUriParameters.get("ServerDelay") || 1000
                });
                var sPath = jQuery.sap.getModulePath("sap.ui.demo.walkthrough.localService");
                oMockServer.simulate(sPath+"/metadata.xml", sPath+"/mocdata");
                oMockServer.start();
            }
        };
    });