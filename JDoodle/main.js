const source = document.getElementById("source");
const target = document.getElementById("target");

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === "childList") {
      target.textContent = mutation.target.textContent;
    }
  });
});

observer.observe(source, { childList: true });
