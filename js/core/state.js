export const state = {
  name: "",
  title: "",
  email: "",
  phone: "",
  linkedin: "",
  summary: "",
  skills: [],
  experience: [],
  projects: [],
  education: []
};

export function updateState(key, value) {
  state[key] = value;
  localStorage.setItem("resume", JSON.stringify(state));
}

export function loadState() {
  const saved = JSON.parse(localStorage.getItem("resume"));
  if (saved) Object.assign(state, saved);
}