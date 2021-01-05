import { PLANETS, PEOPLE }  from "../App"

const Navbar = ({ setPage }) => (
  <nav>
    <button onClick={() => setPage(PLANETS)}>Planets</button>
    <button onClick={() => setPage(PEOPLE)}>People</button>
  </nav>
)

export default Navbar
