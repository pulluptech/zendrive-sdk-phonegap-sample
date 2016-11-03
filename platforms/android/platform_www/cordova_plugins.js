cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.plugin.ActivityIndicator/www/activityIndicator.js",
        "id": "org.apache.cordova.plugin.ActivityIndicator.ActivityIndicator",
        "pluginId": "org.apache.cordova.plugin.ActivityIndicator",
        "clobbers": [
            "ActivityIndicator"
        ]
    },
    {
        "file": "plugins/com.zendrive.phonegap.sdk/www/zendrive.js",
        "id": "com.zendrive.phonegap.sdk.ZendriveCordovaPlugin",
        "pluginId": "com.zendrive.phonegap.sdk",
        "clobbers": [
            "Zendrive"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.plugin.ActivityIndicator": "1.0.0",
    "com.zendrive.phonegap.sdk": "2.3.3",
    "cordova-plugin-multidex": "1.0.0"
}
// BOTTOM OF METADATA
});