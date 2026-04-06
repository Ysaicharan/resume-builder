import { state } from "../core/state.js";

export function runAnalyzer() {

  const role = document.getElementById("jobRole").value.toLowerCase();
  const desc = document.getElementById("jobDesc").value.toLowerCase();

  const jobKeywords = extract(role + " " + desc);
  const resumeText = JSON.stringify(state).toLowerCase();

  const matched = jobKeywords.filter(k => resumeText.includes(k));

  const keywordMatch = matched.length / jobKeywords.length || 0;

  const skillsScore = state.skills.length >= 6 ? 1 : state.skills.length / 6;
  const summaryScore = state.summary.length > 80 ? 1 : 0.5;

  const score = Math.round(
    (keywordMatch * 0.4 +
     skillsScore * 0.3 +
     summaryScore * 0.2 +
     0.1) * 100
  );

  document.getElementById("analysisOutput").innerHTML = `
    <h2>${score}/100</h2>
    <p>Match: ${Math.round(keywordMatch * 100)}%</p>
    <p>Missing: ${jobKeywords.slice(0,10).join(", ")}</p>
  `;
}

function extract(text) {
  return [...new Set(text.match(/\b[a-z]{3,}\b/g) || [])];
}