// This optional code is used to register a service worker.
// register() is not called by default.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.

// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://cra.link/PWA

const isLocalhost = Boolean(
  window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config) {
  return new Promise((resolve, reject) => {
    function onDomContentLoaded() {
      if (
        process.env.NODE_ENV === "production" &&
        "serviceWorker" in navigator
      ) {
        const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
        if (publicUrl.origin !== window.location.origin) {
          return reject(
            "Service worker won't work if PUBLIC_URL is on a different origin."
          );
        }

        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

        if (isLocalhost) {
          checkValidServiceWorker(swUrl, config);
          navigator.serviceWorker.ready.then(() => {
            resolve(); // Resolve the promise when service worker is ready
          });
        } else {
          registerValidSW(swUrl, config).then(() => {
            resolve(); // Resolve the promise when service worker is ready
          });
        }
      } else {
        resolve(); // Resolve the promise if service worker is not supported or in development mode
      }
    }

    // Check if the document is already parsed
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", onDomContentLoaded);
    } else {
      onDomContentLoaded();
    }
  });
}

function registerValidSW(swUrl, config) {
  return new Promise((resolve, reject) => {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
              resolve(); // Resolve the promise when service worker is installed
            }
          };
        };
      })
      .catch((error) => {
        reject(`Error during service worker registration: ${error}`);
      });
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: { "Service-Worker": "script" },
  })
    .then((response) => {
      // Ensure service worker exists, and that we really are getting a JS file.
      const contentType = response.headers.get("content-type");
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf("javascript") === -1)
      ) {
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    });
}
// Initialize deferredPrompt for use later to show browser install prompt.
// let deferredPrompt;
// window.addEventListener("beforeinstallprompt", (e) => {
//   // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI notify the user they can install the PWA
//   // Optionally, send analytics event that PWA install promo was shown.
//   console.log(`'beforeinstallprompt' event was fired.`);
// });
// export default InstallBtn function() {
//   // Hide the app provided install promotion
//   // hideInstallPromotion();
//   // Show the install prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   const { outcome } = await deferredPrompt.userChoice;
//   // Optionally, send analytics event with outcome of user choice
//   console.log(`User response to the install prompt: ${outcome}`);
//   // We've used the prompt, and can't use it again, throw it away
//   deferredPrompt = null;
// };
window.addEventListener("appinstalled", () => {
  // Optionally, send analytics event to indicate successful install
  console.log("PWA was installed");
});
export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
