import { state, updateState } from "../core/state.js";
import { renderPreview } from "./preview.js";

export function initForm() {

  document.querySelectorAll("[data-bind]").forEach(input => {
    const key = input.dataset.bind;

    input.value = state[key] || "";

    input.addEventListener("input", e => {
      updateState(key, e.target.value);
      renderPreview();
    });
  });

  // Skill Input
  const skillInput = document.getElementById("skillInput");

  skillInput.addEventListener("keydown", e => {
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

  renderSkills();


function renderSkills() {
  const container = document.getElementById("skillsList");

  container.innerHTML = state.skills
    .map((s, i) => `<span class="tag">${s} <button data-i="${i}">x</button></span>`)
    .join("");

  container.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
      state.skills.splice(btn.dataset.i, 1);
      renderSkills();
      renderPreview();
    };
  });
}

// Improve Summary
document.getElementById("improveSummary").onclick = () => {
  const text = state.summary;

  if (!text) {
    alert("Write summary first");
    return;
  }

  // Simple enhancement logic
  const improved = "Results-driven " + text +
    ". Proven ability to deliver high-impact solutions and collaborate effectively.";

  state.summary = improved;

  document.querySelector("[data-bind='summary']").value = improved;

  renderPreview();
};

document.getElementById("addExp").onclick = () => {
  state.experience.push({
    role: "Role",
    company: "Company",
    duration: "2023-2024",
    desc: ["Did something impactful"]
  });

  renderPreview();
};

}