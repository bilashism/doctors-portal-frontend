import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "react-day-picker/dist/style.css";
import "./App.css";
import { router } from "./routes/router";

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
