import "./App.css";
import { useEffect } from "react";
import branch from "branch-sdk";

function App() {
  useEffect(() => {
    // Initialize the Branch SDK
    branch.init("YOUR_BRANCH_KEY", function (err, data) {
      if (err) {
        console.error(err);
        redirectToWebsite();
        return;
      }

      // Generate a deep link URL for your app
      var deepLinkURL = "thebeerstore://";

      // Create a Branch deep link
      var branchLinkData = {
        channel: "website",
        data: {
          $og_title: "The Beer Store",
          $deeplink_path: deepLinkURL,
        },
      };

      branch.link(branchLinkData, function (err, link) {
        if (err) {
          console.error(err);
          redirectToWebsite();
          return;
        }

        // Redirect the user to the generated deep link URL
        window.location.href = link;
      });
    });

    // Function to redirect to the website
    function redirectToWebsite() {
      window.location.href = "https://www.thebeerstore.ca/";
    }
  }, []);

  return <div className="App"></div>;
}

export default App;
