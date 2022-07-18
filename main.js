function decodeJapaneseUrl() {
    const url = decodeURI(location.href);
	var listener = function(e){
		e.clipboardData.setData("text/plain" , url);    
		e.preventDefault();
		document.removeEventListener("copy", listener);
	}
	document.addEventListener("copy" , listener);
	document.execCommand("copy");
};
chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: branchNameClip
	});
});