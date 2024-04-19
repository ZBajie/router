import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contacts/Contact"
import Layout from "./pages/Layout/Layout"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import Counter from "./components/Header/Counter/Counter"
import FormComponent from "./pages/FormComponent/FormComponent"

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/form",
        element: <FormComponent />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/counter",
        element: <Counter />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
