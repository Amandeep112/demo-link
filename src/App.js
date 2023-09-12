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
    if (isiOS || isAndroid) {
      document.getElementById("loader").src =
        "thebeerstore://" + window.location.search + window.location.hash;
      fallbackLink = isAndroid
        ? "market://details?id=com.beerstore"
        : "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone";
    }
    window.setTimeout(function () {
      window.location.replace(fallbackLink);
    }, 1);
  }, []);

  return (
    <div className="App">
      <iframe
        style={{ display: "none" }}
        height="0"
        width="0"
        id="loader"
      ></iframe>
    </div>
  );
}

export default App;
