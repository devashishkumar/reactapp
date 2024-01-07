import { useEffect, useState } from "react";

const useOnlineStatus = (resId) => {
    const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
        setOnlineStatus(true);
    });
    window.addEventListener("offline", () => {
        setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
