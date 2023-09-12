import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  // eslint-disable-next-line no-undef
   useEffect(() => {
   
        // var webURL;
        // if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        //   webURL =
        //     "https://itunes.apple.com/us/app/the-beer-store/id1623374239?platform=iphone";
        // } else {
        //   webURL = `market://details?id=com.beerstore`;
        // }
        // window.open(webURL, "_blank");
        // window.location.href = webURL;
        // var isMobile =
        //   /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        //     navigator.userAgent
        //   ) && !window.MSStream;

        // var deepLinkURL = `thebeerstore://`;
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          window.location.href = `thebeerstore://`;

          setTimeout(function () {
            // Link to the App Store should go here -- only fires if deep link fails
            window.open('https://itunes.apple.com/us/app/the-beer-store/id1623374239?platform=iphone', "_blank");
            window.location.href = 'https://itunes.apple.com/us/app/the-beer-store/id1623374239?platform=iphone';
          }, 500);
        } else {
          // Open in the browser on non-mobile devices
          window.open(
            "https://itunes.apple.com/us/app/the-beer-store/id1623374239?platform=iphone",
            "_blank"
          );
          window.location.href =
            "https://itunes.apple.com/us/app/the-beer-store/id1623374239?platform=iphone";
        }
      
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
