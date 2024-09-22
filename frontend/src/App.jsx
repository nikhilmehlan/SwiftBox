import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import InboxM from "./components/InboxM";
import SendEmail from "./components/SendEmail";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Body from "./components/body";
import Mail from "./components/Mail";

const appRouter= createBrowserRouter([
{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element: <InboxM/>
    },
    {
      path:"/mail/:id",
      element: <Mail/>
    },
  ]
}

])

function App() {
  return (
    <div className="bg-F7F8FD">
      <Navbar />
      <RouterProvider router={appRouter} />
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail/>
      </div>
    </div>

  );
}

export default App;
