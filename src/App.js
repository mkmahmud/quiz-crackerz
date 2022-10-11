import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <div>Home Page</div>
    }
  ])
  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
