export const registerServiceWorker = () => {
  // register serviceWorker only in production
  // note: serviceWorker will only work with https!
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
    })
  }
}
