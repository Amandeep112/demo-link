import React, { useEffect } from 'react';
import branch from 'branch-sdk';

function App() {
 useEffect(() => {
    // Initialize the Branch SDK
    branch.isAppInstalled("1623374239", function (err, isInstalled) {
      if (err) throw err;

      if (isInstalled) {
        // The app is installed, you can take some action
        console.log("App is installed");
      } else {
        // The app is not installed, you can redirect the user to the App Store or Play Store
        console.log("App is not installed");
      }
    });
  }, []);

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
}

export default App;
