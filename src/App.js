import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import SingelQuiz from "./components/Home/SingelQuiz/SingelQuiz";
import Layout from "./components/Layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout></Layout>,
      children:[
        {
          path:'/home',
          loader: () =>  fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>,
        },
        {
          path:'/quiz/singel-quiz/:qid',
          loader:({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.qid}`)
          },
          element:<SingelQuiz></SingelQuiz>
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
