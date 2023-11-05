console.log("jacob")
chrome.runtime.onMessage.addListener( gotMessage );
function gotMessage( request, sender, sendResponse ){
    console.log(request);
    console.log(sender);
    
    
}