
import "./App.css";
import { useEffect } from "react";

function App() {
  // eslint-disable-next-line no-undef
    useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.branch.io/branch-latest.min.js";
    script.async = true;

    document.body.appendChild(script);
    // Initialize the Branch SDK
    script.init("YOUR_BRANCH_KEY", function (err, data) {
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

      script.link(branchLinkData, function (err, link) {
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
      window.alert('hi')
  }, []);

  return <div className="App">
      <iframe
        id="l"
        width="1"
        height="1"
        style={{ visibility: "hidden" }}
      ></iframe>
    </div>;
}

export default App;
