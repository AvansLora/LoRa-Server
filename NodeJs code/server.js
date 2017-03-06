var ttn = require('ttn');

//application stuff:
var region = 'eu';
var appId =  'first-tries';
var accessKey = 'ttn-account-v2.yrdIU8rY67uXUQ2R0ZYAWKpn-XZyrrXRREOuWPsuaB8';
    
var client = new ttn.Client(region, appId, accessKey);

client.on('connect', function(connack) {
    console.log('[DEBUG]', 'Connect:', connack);
});
    
client.on('error', function(err) {
    console.log('[ERROR]', err.message);
});

client.on('activation', function(deviceId, data) {
    console.log('[INFO] ', 'Activation:', deviceId, data);
});

client.on('message', function(deviceId, data) {
    console.log('[INFO] ', 'Message:', deviceId, JSON.stringify(data, null, 2));
	var rawData = getData(data);
	var text = convertToText(rawData);
});

function getData(data){
    var message = JSON.parse(data);
    var messageData = message["payload_raw"];
    console.log(messageData);
	return messageData;
}

function convertToText(data){
    //TODO convert ascii string to message

}
