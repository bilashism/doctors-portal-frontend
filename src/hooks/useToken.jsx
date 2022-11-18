import { useEffect, useState } from "react";
import { APP_SERVER } from "../utilities/utilities";

// todo: bad setState warning
const useToken = email => {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`${APP_SERVER}/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        })
        .catch(err => console.error(err));
    }
  }, [email]);
  return [token];
};
export default useToken;
