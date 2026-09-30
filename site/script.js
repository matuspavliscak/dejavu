const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
const next = document.querySelector("#next-step");
const count = document.querySelector("#story-count");
let active = 0;

function selectStep(index, focus = false) {
  active = (index + tabs.length) % tabs.length;
  tabs.forEach((tab, i) => {
    tab.setAttribute("aria-selected", String(i === active));
    tab.tabIndex = i === active ? 0 : -1;
    panels[i].hidden = i !== active;
  });
  count.textContent = `0${active + 1} / 03`;
  next.firstChild.textContent =
    active === 2 ? "Back to the start " : "Next chapter ";
  if (focus) tabs[active].focus();
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectStep(index));
  tab.addEventListener("keydown", (event) => {
    let target;
    if (event.key === "ArrowDown") target = active + 1;
    if (event.key === "ArrowUp") target = active - 1;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = tabs.length - 1;
    if (target !== undefined) {
      event.preventDefault();
      selectStep(target, true);
    }
  });
});
next.addEventListener("click", () => selectStep(active + 1, true));
