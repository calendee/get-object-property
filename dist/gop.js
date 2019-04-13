"use strict";
exports.__esModule = true;
exports.getObjectProperty = function (obj, path, defaultValue) {
    var defaultReturn = typeof defaultValue !== "undefined" ? defaultValue : undefined;
    if (!obj || typeof obj !== "object" || typeof path !== "string") {
        return defaultReturn;
    }
    var paths = path.split(".");
    var currentProperty = paths[0];
    if (paths.length === 1) {
        return obj.hasOwnProperty(currentProperty)
            ? obj[currentProperty]
            : defaultReturn;
    }
    paths.shift();
    var newObj = obj.hasOwnProperty(currentProperty)
        ? obj[currentProperty]
        : undefined;
    return exports.getObjectProperty(newObj, paths.join("."), defaultReturn);
};
