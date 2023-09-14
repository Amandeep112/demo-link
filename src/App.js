import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    var isiOS =
        navigator.userAgent.match("iPad") ||
        navigator.userAgent.match("iPhone") ||
        navigator.userAgent.match("iPod"),
      isAndroid = navigator.userAgent.match("Android");

    var isSafari =
      navigator.userAgent.indexOf("Safari") !== -1 &&
      navigator.userAgent.indexOf("Chrome") === -1;
    var fallbackLink = isAndroid
      ? "market://details?id=com.beerstore" +
        window.location.search +
        window.location.hash
      : "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone" +
        window.location.search +
        window.location.hash;
    var webURL =
      /iPhone|iPad|iPod/i.test(navigator.userAgent) && isSafari
        ? "https://tbsecomd.wpengine.com/openApp"
        : "thebeerstore://";
    window.open(fallbackLink, "_blank");
    window.location.href = fallbackLink;
    try {
      // window.open(
      //   "https://tbsecomd.wpengine.com/deep-linking/bs-deep-linking.html",
      //   "_blank"
      // );
      // window.location.href =
      //   "https://tbsecomd.wpengine.com/deep-linking/bs-deep-linking.html" +
      //   window.location.search +
      //   window.location.hash;
      // window.setTimeout(function () {
      //   window.location.replace(
      //     "https://tbsecomd.wpengine.com/deep-linking/bs-deep-linking.html"
      //   );
      //   window.alert("fallback detected");
      // }, 1000);
      // window.alert("enter IN safari");

      if (isiOS || isAndroid) {
        alert(webURL);
        window.location.href = webURL;
        window.location.href = document.getElementById("loader").src =
          webURL + window.location.search + window.location.hash;

        window.alert("mobile detected");
        setTimeout(function () {
          window.open(fallbackLink);
          window.location.href(fallbackLink);
          window.alert("fallback detected");
        }, 1000);
      } else {
        window.location.href =
          "https://www.thebeerstore.ca/" +
          window.location.search +
          window.location.hash;
        window.alert("window or mac detected");
      }
    } catch {
      window.open(
        "https://www.thebeerstore.ca/" +
          window.location.search +
          window.location.hash,
        "_blank"
      );
      window.location.href =
        "https://www.thebeerstore.ca/" +
        window.location.search +
        window.location.hash;
    }
  }, []);

  return (
    <div className="App">
      <iframe id="loader" style={{ display: "none" }}></iframe>
    </div>
  );
}

export default App;
