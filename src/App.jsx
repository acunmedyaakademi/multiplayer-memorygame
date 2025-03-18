import { useEffect, useState } from "react";

import { getPage } from "./helper";

const App = () => {
  const [router, setRouter] = useState(location.hash.substring(1) || "/home");

  useEffect(() => {
    location.hash = location.hash || "/home";
    window.addEventListener("hashchange", () => setRouter(location.hash.substring(1) || "/home"));
  }, []);

  return <>{getPage(router)}</>;
};

export default App;
