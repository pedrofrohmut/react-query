import { useQuery } from "react-query"

import Planet from "./Planet"

const fetchPlanets = async () => {
  const response = await fetch("https://swapi.dev/api/planets/")
  const data = await response.json()
  return data
}

const Planets = () => {
  const { data, status } = useQuery("planets", fetchPlanets, {
    staleTime: 3000
  })
  return (
    <>
      <h1>Planets</h1>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </>
  )
}

export default Planets
