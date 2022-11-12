import { useEffect } from "react";
import { APP_NAME } from "../utilities/utilities";

/**
 * UseTitle is a function that takes a pageName as an argument and sets the document title to the
 * pageName and the APP_NAME.
 */
const useTitle = pageName => {
  useEffect(() => {
    document.title = `${pageName} - ${APP_NAME}`;
  }, [pageName, APP_NAME]);
};

export default useTitle;
