import routes from "../routes"
import { NavLink } from "react-router"

export default function Header() {
  return (
    <header>
      <h1>Näslund Bygg & Luftbehandling</h1>
      <nav>
        {routes.map(({ path, label }) => (
          <NavLink to={path} key={path}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}