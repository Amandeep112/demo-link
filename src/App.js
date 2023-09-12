import React, { useEffect } from 'react';
import branch from 'branch-sdk';

function App() {
  useEffect(() => {
    async function checkAndOpenApp() {
      // Initialize the Branch SDK with your Branch.io key
      branch.init('YOUR_BRANCH_KEY', async (err, data) => {
        if (err) {
          console.error(err);
          redirectToWebsite();
          return;
        }

        // Generate a deep link URL for your app
        const deepLinkURL = 'thebeerstore://';

        try {
          // Check if the app is installed
          const isAppInstalled = await branch.isAppInstalled();
          
          if (isAppInstalled) {
            // App is installed, open the app
            window.location.href = deepLinkURL;
          } else {
            // App is not installed, redirect to the website
            redirectToWebsite();
          }
        } catch (error) {
          console.error(error);
          // An error occurred while checking app installation status, redirect to the website
          // redirectToWebsite();
          window.location.href = 'https://www.thebeerstore.ca/';
        }
      });

      // Function to redirect to the website
      function redirectToWebsite() {
        window.location.href = 'https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone';
      }
    }

    // Call the checkAndOpenApp function when the component mounts
    checkAndOpenApp();
  }, []);

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
}

export default App;
