import React from "react"
import ReactDOM from "react-dom/client"
import "./style/style.scss"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./state/store"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
