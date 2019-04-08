"use strict";
exports.__esModule = true;
exports.getObjectProperty = function (obj, path, defaultValue) {
    var newObj = {};
    var defaultReturn = typeof defaultValue !== 'undefined' ? defaultValue : undefined;
    if (!obj || typeof obj !== 'object' || typeof path !== 'string') {
        return defaultReturn;
    }
    var paths = path.split('.');
    var property = paths[0];
    if (paths.length === 1) {
        return obj.hasOwnProperty(property) ? obj[property] : defaultReturn;
    }
    paths.shift();
    newObj = obj.hasOwnProperty(property) ? obj[property] : {};
    return exports.getObjectProperty(newObj, paths.join('.'), defaultReturn);
};
