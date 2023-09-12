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
    try {
      if (isiOS || isAndroid) {
        window.location.href = "thebeerstore://";
        document.getElementById("loader").src =
          "thebeerstore://" + window.location.search + window.location.hash;
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
          "https://www.thebeerstore.ca/" +
          window.location.search +
          window.location.hash;
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
