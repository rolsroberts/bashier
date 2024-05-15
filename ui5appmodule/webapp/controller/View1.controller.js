 sap.ui.define([
        "sap/ui/core/mvc/Controller"
    ],
        /**
         * @param {typeof sap.ui.core.mvc.Controller} Controller
         */
        function (Controller) {
            "use strict";
    
            return Controller.extend("ikor.ui5appmodule.controller.View1", {
                onInit: function () {
                    debugger;
                    var oJsonModel = this.getOwnerComponent().getModel("initJsonModel");
                    var oDataModel = this.getOwnerComponent().getModel("oDataMainModel")
    
                    this.getView().setModel(oJsonModel, "dataModel");
                    oDataModel.attachEventOnce("requestCompleted", function (oEvent) {
                        // execute code after the first request of the model is completed
                        this.getView().setModel(oDataMainModel, "oDataMainModel");
                    });
                }
            });
        });