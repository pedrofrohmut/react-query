import React from "react"
import ReactDOM from "react-dom"
import { QueryClientProvider, QueryClient } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"

import App from "./App"

import "./index.css"

// create a client
const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    {/* Provides the client to your app */}
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
