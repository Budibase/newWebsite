(() => {
  function init(rootId) {
    const root = document.getElementById(rootId);
    if (!root) return;
    const tabs = Array.from(root.querySelectorAll('.tabs-left [role="tab"]'));
    const products = Array.from(root.querySelectorAll(".product"));
    const modeButtons = Array.from(root.querySelectorAll("[data-mode-toggle]"));
    let mode = "builders";

    function setActive(index) {
      tabs.forEach((t, i) => {
        const active = i === index;
        t.setAttribute("aria-selected", active ? "true" : "false");
        t.setAttribute("tabindex", active ? "0" : "-1");
        t.classList.toggle("is-active", active);
      });
      products.forEach((p, i) => {
        const active = i === index;
        p.classList.toggle("is-active", active);
        p.setAttribute("aria-hidden", active ? "false" : "true");
      });
      if (tabs[index]) tabs[index].focus();
    }

    // Save on root for manual triggering
    root.__bbSetActive = setActive;

    function allowed(label) {
      if (mode === "users") {
        return label && ["chat", "apps"].includes(label.toLowerCase());
      }
      return true; // builders see all
    }

    function applyMode(newMode) {
      mode = newMode;
      // toggle mode buttons state
      modeButtons.forEach((b) => {
        const isActive = b.getAttribute("data-mode-toggle") === mode;
        b.classList.toggle("is-active", isActive);
        b.setAttribute("aria-pressed", isActive ? "true" : "false");
      });

      // show/hide tabs and panels
      tabs.forEach((t, i) => {
        const label = t.getAttribute("data-label") || "";
        const show = allowed(label);
        t.style.display = show ? "" : "none";
        if (!show) {
          t.setAttribute("tabindex", "-1");
          t.classList.remove("is-active");
        }
        const p = products[i];
        if (p) {
          p.style.display = show ? "" : "none";
          p.setAttribute(
            "aria-hidden",
            show
              ? p.classList.contains("is-active")
                ? "false"
                : "true"
              : "true",
          );
          // switch variant image if both are present
          const builder = p.querySelector(".variant.img-builder");
          const user = p.querySelector(".variant.img-user");
          if (builder) builder.classList.toggle("is-active", mode !== "users");
          if (user) user.classList.toggle("is-active", mode === "users");
        }
      });

      // ensure an active visible tab
      let activeIdx = tabs.findIndex(
        (t) => t.classList.contains("is-active") && t.style.display !== "none",
      );
      if (activeIdx < 0) {
        const firstVisible = tabs.findIndex((t) => t.style.display !== "none");
        if (firstVisible >= 0) setActive(firstVisible);
      }
    }

    root.addEventListener("click", (e) => {
      const btn =
        e.target && e.target.closest
          ? e.target.closest('button[role="tab"]')
          : null;
      if (btn && root.contains(btn)) {
        const idx = tabs.indexOf(btn);
        if (idx >= 0 && btn.style.display !== "none") setActive(idx);
        return;
      }
      const modeBtn =
        e.target && e.target.closest
          ? e.target.closest("[data-mode-toggle]")
          : null;
      if (modeBtn && root.contains(modeBtn)) {
        applyMode(modeBtn.getAttribute("data-mode-toggle"));
      }
    });

    root.addEventListener("keydown", (e) => {
      const visible = tabs
        .map((t, i) => ({ t, i }))
        .filter(({ t }) => t.style.display !== "none");
      const activeIdx = visible.findIndex(({ t }) =>
        t.classList.contains("is-active"),
      );
      if (visible.length === 0) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = visible[(activeIdx + 1) % visible.length].i;
        setActive(next);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev =
          visible[(activeIdx - 1 + visible.length) % visible.length].i;
        setActive(prev);
      }
    });

    setActive(0);
    applyMode("builders");
  }

  window.__bbImageSwitcherInit = init;
  window.__bbImageSwitcherSetActive = function (rootId, index) {
    const root = document.getElementById(rootId);
    const setActive = root && root.__bbSetActive;
    if (typeof setActive === "function") setActive(index);
  };

  const script = document.currentScript;
  if (script) {
    const rootId = script.getAttribute("data-root");
    if (rootId) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => init(rootId));
      } else {
        init(rootId);
      }
    }
  }
})();
