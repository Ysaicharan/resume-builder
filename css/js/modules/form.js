import { state, updateState } from "../core/state.js";
import { renderPreview } from "./preview.js";

export function initForm() {

  // Bind all inputs
  document.querySelectorAll("[data-bind]").forEach(input => {
    const key = input.dataset.bind;

    input.value = state[key] || "";

    input.addEventListener("input", (e) => {
      updateState(key, e.target.value);
      renderPreview();
    });
  });

  // Skills
  const skillInput = document.getElementById("skillInput");

  if (skillInput) {
    skillInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();

        const value = skillInput.value.trim();
        if (!value) return;

        state.skills.push(value);
        skillInput.value = "";

        renderSkills();
        renderPreview();
      }
    });
  }

  renderSkills();
}

function renderSkills() {
  const container = document.getElementById("skillsList");

  if (!container) return;

  container.innerHTML = state.skills.map((s, i) => `
    <span class="tag">
      ${s}
      <button data-index="${i}">×</button>
    </span>
  `).join("");

  container.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      const i = btn.dataset.index;
      state.skills.splice(i, 1);
      renderSkills();
      renderPreview();
    });
  });
}