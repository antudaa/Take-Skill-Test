import './App.css';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Main from './Layouts/Main';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Topics from './Components/Topics/Topics';
import Error from './Components/Error/Error';
import Statistics from './Components/Statistics/Statistics';
import Quiz from './Components/Quiz/Quiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader : async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home> 
        },
        {
          path: '/topics',
          loader : async() => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:id',
          loader: async({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/statistics',
          loader : async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        }
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
