import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.3.2:3333"
});

export default api;

/**
 * Configure localhost to any emulator using adb: adb reverse tcp:3333 tcp:3333
 */
