import { state } from "../core/state.js";

export function renderPreview() {
  const el = document.getElementById("preview");

  el.innerHTML = `
    <div class="resume">

      <!-- HEADER -->
      <div class="header">
        <h1>${state.name || "Your Name"}</h1>
        <p class="role">${state.title || "Software Engineer"}</p>
        <p class="contact">
          ${state.email || "email@example.com"} |
          ${state.phone || "Phone"} |
          ${state.linkedin || "LinkedIn"}
        </p>
      </div>

      <!-- SUMMARY -->
      <div class="section">
        <h3>SUMMARY</h3>
        <p>${state.summary || "Write a strong professional summary..."}</p>
      </div>

      <!-- SKILLS -->
      <div class="section">
        <h3>SKILLS</h3>
        <div class="skills">
          ${state.skills.length
            ? state.skills.map(s => `<span>${s}</span>`).join("")
            : "<span>Add skills</span>"}
        </div>
      </div>

      <!-- EXPERIENCE -->
      <div class="section">
        <h3>EXPERIENCE</h3>
        ${
          state.experience.length
            ? state.experience.map(exp => `
              <div class="item">
                <div class="item-header">
                  <strong>${exp.role}</strong> — ${exp.company}
                  <span>${exp.duration}</span>
                </div>
                <ul>
                  ${exp.desc.map(d => `<li>${d}</li>`).join("")}
                </ul>
              </div>
            `).join("")
            : "<p>Add experience</p>"
        }
      </div>

      <!-- PROJECTS -->
      <div class="section">
        <h3>PROJECTS</h3>
        ${
          state.projects.length
            ? state.projects.map(p => `
              <div class="item">
                <strong>${p.title}</strong>
                <p>${p.desc}</p>
              </div>
            `).join("")
            : "<p>Add projects</p>"
        }
      </div>

      <!-- EDUCATION -->
      <div class="section">
        <h3>EDUCATION</h3>
        ${
          state.education.length
            ? state.education.map(e => `
              <div class="item">
                <strong>${e.degree}</strong> — ${e.institution}
                <span>${e.year}</span>
              </div>
            `).join("")
            : "<p>Add education</p>"
        }
      </div>

    </div>
  `;
}