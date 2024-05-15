/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ikor/ui5appmodule/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
