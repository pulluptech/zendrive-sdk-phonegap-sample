cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.plugin.ActivityIndicator/www/activityIndicator.js",
        "id": "org.apache.cordova.plugin.ActivityIndicator.ActivityIndicator",
        "clobbers": [
            "ActivityIndicator"
        ]
    },
    {
        "file": "plugins/com.zendrive.phonegap.sdk/www/zendrive.js",
        "id": "com.zendrive.phonegap.sdk.ZendriveCordovaPlugin",
        "clobbers": [
            "Zendrive"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.plugin.ActivityIndicator": "1.0.0",
    "com.zendrive.phonegap.sdk": "2.0.2",
    "com.google.playservices": "21.0.0",
    "android.support.v4": "21.0.1"
}
// BOTTOM OF METADATA
});