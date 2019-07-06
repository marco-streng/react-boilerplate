export const registerServiceWorker = () => {
  // register serviceWorker only in production
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(registrationError => {
        console.log('SW registration failed: ', registrationError)
      })
    })
  }
}
