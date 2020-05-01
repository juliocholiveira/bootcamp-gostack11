import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/'
});

export default api;

/**
 * iOS with Emulator: localhost
 * iOS device: mac's IP
 * Android with simulator: localhost (adb reverse tcp:3333 tcp:3333)
 * Android with Emulator: 10.0.2.2 (Android Studio) 
 * Android with Emulator: 10.0.3.2 (Genymotion)
 * Android device: mac's IP
 */