import { Suspense } from "react"
import { RouterProvider } from "react-router"

import routes from "./routes";


function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={routes} />
    </Suspense>
  )
}

export default App
