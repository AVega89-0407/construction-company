import { NavLink } from "react-router"

export default function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()} <p>NBL</p> · Alla rättigheter förbehållna
      <NavLink to='/integritetspolicy' style={{ color: 'white'}}>Integritetspolicy</NavLink>
    </footer>
  )
}