import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  // eslint-disable-next-line no-undef
  useEffect(() => {
     window.alert('hello')
    var fallbackLink =
      "https://itunes.apple.com/ca/app/the-beer-store/id1623374239?platform=iphone" +
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
