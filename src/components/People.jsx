import { useQuery } from "react-query"

import Person from "./Person"

const fetchPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people/")
  const data = await response.json()
  return data
}

const People = () => {
  const { data, status } = useQuery("people", fetchPeople)
  return (
    <>
      <h1>People</h1>
      {status === "error" && <div>Error fetching data</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
        </div>
      )}
    </>
  )
}

export default People
