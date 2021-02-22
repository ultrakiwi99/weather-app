export function getFromStorage(stateData) {
  const storage = window.localStorage;
  const state = storage.getItem("weather-app", stateData);
  
  return JSON.parse(state);
}

export function saveToStorage(stateData) {
  const storage = window.localStorage;
  storage.setItem("weather-app", JSON.stringify(stateData));
}

export function storageExists() {
  return !!window.localStorage;
}
