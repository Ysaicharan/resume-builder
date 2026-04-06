import { loadState } from "./core/state.js";
import { initForm } from "./modules/form.js";
import { renderPreview } from "./modules/preview.js";
import { runAnalyzer } from "./modules/analyzer.js";

window.addEventListener("DOMContentLoaded", () => {
  loadState();
  initForm();
  renderPreview();

  // Analyzer toggle
  const drawer = document.getElementById("analyzerDrawer");
  document.getElementById("analyzerBtn").onclick = () => {
    drawer.classList.toggle("open");
  };

  document.getElementById("analyzeBtn").onclick = runAnalyzer;
});