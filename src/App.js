import { useState } from "react"

import Navbar from "./components/Navbar"
import Planets from "./components/Planets"
import People from "./components/People"

export const PLANETS = "PLANETS"
export const PEOPLE = "PEOPLE"

const App = () => {
  const [page, setPage] = useState(PLANETS)
  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === PLANETS && <Planets />}
        {page === PEOPLE && <People />}
      </div>
    </div>
  )
}

export default App
