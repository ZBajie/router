import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header-main">
      <h1>Header</h1>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
    </header>
  )
}

export default Header
