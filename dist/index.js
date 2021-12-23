"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTimestamp = void 0;
const date_fns_tz_1 = require("date-fns-tz");
const formatTimestamp = (localDate, dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx") => {
    const x = new Date(localDate.toUTCString());
    const s = (0, date_fns_tz_1.utcToZonedTime)(x, "Asia/Singapore");
    return (0, date_fns_tz_1.format)(s, dateFormat, { timeZone: "Asia/Singapore" });
};
exports.formatTimestamp = formatTimestamp;
const helloWorld = () => {
    const x = (0, exports.formatTimestamp)(new Date());
    console.log(x);
    console.log("Hello world!");
};
exports.default = helloWorld;
helloWorld();
//# sourceMappingURL=index.js.map