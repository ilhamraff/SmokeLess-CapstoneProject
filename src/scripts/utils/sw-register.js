/**
 * swRegister adalah fungsi asinkron untuk mendaftarkan Service Worker.
 */
const swRegister = async () => {
  // Memeriksa apakah browser mendukung Service Worker
  if (!('serviceWorker' in navigator)) {
    console.log('Service Worker not supported in the browser');
    return;
  }

  // Mencoba mendaftarkan Service Worker
  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

export default swRegister;
