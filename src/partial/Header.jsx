import routes from "../routes"
import { NavLink, useNavigate } from "react-router"

export default function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <section>
      <img src="/images/logo.png" alt="Company logo" onClick={() => navigate('/')} />
      <h1>Näslund Bygg & Luftbehandling</h1>
      <nav>
        {routes.map(({ path, label }) => (
          <NavLink to={path} key={path}>
            {label}
          </NavLink>
        ))}
        </nav>
      </section>
    </header>
  )
}