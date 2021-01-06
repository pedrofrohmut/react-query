import { useState } from "react"
import { useQuery } from "react-query"

import Planet from "./Planet"

const fetchPlanets = async ({ queryKey }) => {
  const [, args] = queryKey
  const response = await fetch(`https://swapi.dev/api/planets/?page=${args.page}`)
  const data = await response.json()
  return data
}

const Planets = () => {
  const [page, setPage] = useState(1)
  const { data, status } = useQuery(
    ["planets", { greeting: "hello, ninjas", page }],
    fetchPlanets,
    {
      staleTime: 3000,
      cacheTime: 300000
    }
  )
  const hasNext = data ? data.next !== null : false
  const hasPrevious = data ? data.previous !== null : false
  return (
    <>
      <h1>Planets</h1>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <>
          <button disabled={!hasPrevious} onClick={() => setPage(page - 1)}>Previous</button>
          <button disabled={!hasNext} onClick={() => setPage(page + 1)}>Next</button>
          <div>
            {data.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default Planets
