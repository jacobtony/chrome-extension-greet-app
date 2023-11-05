chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed")
})
chrome.bookmarks.onCreated.addListener((bookmark) => {
    console.log(bookmark)
})

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, "Hellow")
})