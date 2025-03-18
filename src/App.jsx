import { createContext, useEffect, useRef, useState } from "react";

import Layout from "./layout";
import { getPage } from "./helper";
import { supabase } from "../supabaseClient";

export const DataContext = createContext();
const App = () => {
  const isFirstLogin = useRef(true);
  const [router, setRouter] = useState(location.hash.substring(1) || "/login");
  const [loginSession, setLoginSession] = useState(null);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    if (loginSession && isFirstLogin) {
      location.hash = "/home";
    } else if (!loginSession) {
      location.hash = "/login";
    }
  }, [loginSession]);

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    window.addEventListener("hashchange", () => setRouter(location.hash.substring(1) || "/home"));

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "INITIAL_SESSION") {
        // handle initial session
      } else if (event === "SIGNED_IN") {
        if (isFirstLogin.current) {
          setLoginSession(session);
          isFirstLogin.current = false;
        }
      } else if (event === "SIGNED_OUT") {
        isFirstLogin.current = true;
        setLoginSession(null);
      } else if (event === "PASSWORD_RECOVERY") {
        // handle password recovery event
      } else if (event === "TOKEN_REFRESHED") {
        // handle token refreshed event
      } else if (event === "USER_UPDATED") {
        // handle user updated event
      }
    });

    return () => {
      data.subscription.unsubscribe();
      window.removeEventListener("hashchange", () => setRouter(location.hash.substring(1) || "/home"));
      window.removeEventListener("resize", setScreenSize(window.innerWidth));
    };
  }, []);

  return (
    <DataContext.Provider value={{ loginSession, screenSize }}>
      {loginSession ? <Layout>{getPage(router)}</Layout> : getPage("/login")}
    </DataContext.Provider>
  );
};

export default App;
