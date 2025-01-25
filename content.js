(function () {
  function tweakDOM() {
    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.setAttribute("data-cm-color-scheme", "dark");
      bodyElement.setAttribute("data-cm-dark-launched", "true");
    }

    const elementsWithClass = document.querySelectorAll(".cm-md1");
    elementsWithClass.forEach((element) => {
      element.classList.replace("cm-md1", "cm-gm2");
    });
  }

  const observer = new MutationObserver(() => {
    tweakDOM();
  });

  chrome.storage.sync.get("isEnabled", ({ isEnabled }) => {
    if (isEnabled === undefined) {
      chrome.storage.sync.set({ isEnabled: true });
      isEnabled = true;
    }
    if (isEnabled) {
      tweakDOM();
      observer.observe(document, { childList: true, subtree: true });
    }
  });
})();
