function searchWord(info) {
  selectedText = info.selectionText;

  chrome.tabs.create({
    url: "https://dictionary.chriswebsite.page/search/" + selectedText,
  });
}

chrome.contextMenus.create({
  id: "searchWord",
  title: "Dictionary Search: %s",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(searchWord);
