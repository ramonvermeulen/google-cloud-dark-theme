const toggleButton = document.getElementById("toggleButton");

chrome.storage.sync.get("isEnabled", ({ isEnabled }) => {
  const state = isEnabled !== false;
  toggleButton.textContent = state ? "Disable" : "Enable";
});

toggleButton.addEventListener("click", () => {
  chrome.storage.sync.get("isEnabled", ({ isEnabled }) => {
    const newState = !isEnabled;
    chrome.storage.sync.set({ isEnabled: newState }, () => {
      toggleButton.textContent = newState ? "Disable" : "Enable";
    });
  });
});
