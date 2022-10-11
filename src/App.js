import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Layout from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout></Layout>,
      children:[
        {
          path:'/home',
          element: <div>Home </div>
        },
        {
          path:'/about',
          element: <div>About </div>
        },
        {
          path:'/statistics',
          element: <div>Statistics </div>
        },
        {
          path:'/contact',
          element: <div>Countact </div>
        },
        {
          path:'/quizes',
          element: <div>Quizes </div>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
