import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"
import ErrorPage from "./pages/ErrorPage"

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
        path: "/Contact",
        element: <Contact />,
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
