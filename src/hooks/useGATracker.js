import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGATracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-ETD44RELSZ", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default useGATracker;
