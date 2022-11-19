import { useEffect, useState } from "react";
import { APP_SERVER } from "../utilities/utilities";

const useAdmin = email => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`${APP_SERVER}/users/admin/${email}`)
        .then(res => res.json())
        .then(data => {
          setIsAdmin(data?.isAdmin);
          setIsAdminLoading(false);
        })
        .catch(err => console.error(err));
    }
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
