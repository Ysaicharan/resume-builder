export const state = {
  name: "",
  title: "",
  email: "",
  summary: "",
  skills: []
};

export function updateState(key, value) {
  state[key] = value;
  localStorage.setItem("resume", JSON.stringify(state));
}

export function loadState() {
  const saved = JSON.parse(localStorage.getItem("resume"));

  if (saved) {
    Object.assign(state, saved);
  }
}