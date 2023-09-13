import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    var fallbackLink =
      "http://example.com/my-web-app/" +
      window.location.search +
      window.location.hash;
    var isiOS =
        navigator.userAgent.match("iPad") ||
        navigator.userAgent.match("iPhone") ||
        navigator.userAgent.match("iPod"),
      isAndroid = navigator.userAgent.match("Android");
    // var appleExpression = /Apple/i.test(navigator.userAgent);
    var safariExpression = /Safari/i.test(navigator.userAgent);
    // if (safariExpression) {
    //   window.open("https://tbsecomd.wpengine.com/openApp","_blank");
    // }else{
    // }

    try {
      if (isiOS || isAndroid) {
        window.location.href = "https://tbsecomd.wpengine.com/openApp";
        // document.getElementById("loader").src =
        //   "thebeerstore://" + window.location.search + window.location.hash;
        fallbackLink = isAndroid
          ? "market://details?id=com.beerstore" +
            window.location.search +
            window.location.hash
          : "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone" +
            window.location.search +
            window.location.hash;
        window.setTimeout(function () {
          window.location.replace(fallbackLink);
        }, 1);
      } else {
        window.location.href =
          "https://tbsecomd.wpengine.com/openApp" +
          window.location.search +
          window.location.hash;
      }
    } catch {
      window.open(
        "https://tbsecomd.wpengine.com/openApp" +
          window.location.search +
          window.location.hash,
        "_blank"
      );
      window.location.href =
        "https://tbsecomd.wpengine.com/openApp" +
        window.location.search +
        window.location.hash;
    }
  }, []);

  return (
    <div className="App">
      // <iframe
      //   style={{ display: "none" }}
      //   height="0"
      //   width="0"
      //   id="loader"
      // ></iframe>
    </div>
  );
}

export default App;
