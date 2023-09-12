import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import branch from "branch-sdk";

function App() {
  useEffect(() => {
    async function checkAndOpenApp() {
      // Initialize the Branch SDK with your Branch.io key
      branch.init("YOUR_BRANCH_KEY", async (err, data) => {
        if (err) {
          console.error(err);
          redirectToWebsite();
          return;
        }

        // Generate a deep link URL for your app
      });

      // Function to redirect to the website
      function redirectToWebsite() {
        const deepLinkURL = "thebeerstore://";
        try {
          // Check if the app is installed
          const isAppInstalled = /iPhone|iPad|iPod/i.test(navigator.userAgent);

          if (isAppInstalled) {
            // App is installed, open the app
            window.location.href = deepLinkURL;
            setTimeout(function () {
              // If the app does not open, fall back to the browser
              window.open(
                "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone",
                "_blank"
              );
              window.location.href =
                "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone";
            }, 1000);
          } else {
            // App is not installed, redirect to the website
            redirectToWebsite();
          }
        } catch (error) {
          console.error(error);
          // An error occurred while checking app installation status, redirect to the website
          window.location.href = "https://www.thebeerstore.ca/";
        }
      }
    }

    // Call the checkAndOpenApp function when the component mounts
    checkAndOpenApp();
  }, []);

  return <div className="App"></div>;
}

export default App;
