import React, { useEffect } from "react";

let deferredPrompt;

export default function InstallBtn() {
  let [Loading, setLoading] = React.useState(false);
  const handleInstallClick = () => {
    if (deferredPrompt) {
      setLoading(true);
      // Show the install prompt
      deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice
        .then(({ outcome }) => {
          setLoading(false);

          // Optionally, send analytics event with the outcome of user choice
          console.log(`User response to the install prompt: ${outcome}`);

          // If the user accepted the prompt, reset deferredPrompt to null
          if (outcome === "accepted") {
            deferredPrompt = null;
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error during installation:", error);
        });
    }
  };

  useEffect(() => {
    const buttonInstall = document.getElementById("btnInit");

    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      console.log(`'beforeinstallprompt' event was fired.`);
    };

    buttonInstall.addEventListener("click", handleInstallClick);
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      // Clean up event listeners on component unmount
      buttonInstall.removeEventListener("click", handleInstallClick);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  return (
    <button
      id="btnInit"
      className="btn btn-success"
      onClick={handleInstallClick}
      disabled={Loading}
    >
      {Loading ? (
        <div className="custom-loader mx-auto">
          <i className="bi bi-arrow-repeat"></i>
        </div>
      ) : (
        "Install"
      )}
    </button>
  );
}
