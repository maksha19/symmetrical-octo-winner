"use strict";
exports.__esModule = true;
exports.formatTimestamp = void 0;
var date_fns_tz_1 = require("date-fns-tz");
var payment_qr_parser_1 = require("@rationally-app/payment-qr-parser");
var formatTimestamp = function (localDate, dateFormat) {
    if (dateFormat === void 0) { dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"; }
    var x = new Date(localDate.toUTCString());
    var s = (0, date_fns_tz_1.utcToZonedTime)(x, "Asia/Singapore");
    return (0, date_fns_tz_1.format)(s, dateFormat, { timeZone: "Asia/Singapore" });
};
exports.formatTimestamp = formatTimestamp;
var helloWorld = function () {
    var x = (0, exports.formatTimestamp)(new Date());
    console.log(x);
    try {
        (0, payment_qr_parser_1.parseAndValidateSGQR)("cs");
    }
    catch (err) {
        console.log(err);
    }
    console.log("Hello world!");
};
exports["default"] = helloWorld;
helloWorld();
