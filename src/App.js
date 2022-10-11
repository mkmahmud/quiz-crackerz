import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import SingelQuiz from "./components/Home/SingelQuiz/SingelQuiz";
import Layout from "./components/Layout/Layout";
import Statistics from "./components/Statistics/Statistics";

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
          loader: () =>  fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        },
        {
          path:'/quizes',
          element: <div>Quizes </div>
        },
      ]
    },
    {
      path:'*',
      element: <div className="not-found">404 - OPS! Not Found  </div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
