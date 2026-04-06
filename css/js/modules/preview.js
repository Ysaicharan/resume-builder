import { state } from "../core/state.js";

export function renderPreview() {
  const el = document.getElementById("preview");

  el.innerHTML = `
    <div class="resume">

      <header class="resume-header">
        <h1>${state.name || "Your Name"}</h1>
        <h2>${state.title || "Job Title"}</h2>
        <p>${state.email || "email@example.com"}</p>
      </header>

      <section>
        <h3>Professional Summary</h3>
        <p>${state.summary || "Write a strong professional summary..."}</p>
      </section>

      <section>
        <h3>Skills</h3>
        <div class="skills">
          ${state.skills.length
            ? state.skills.map(s => `<span>${s}</span>`).join("")
            : "<p>No skills added</p>"}
        </div>
      </section>

    </div>
  `;
}