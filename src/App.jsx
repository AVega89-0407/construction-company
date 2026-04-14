import { Outlet } from "react-router"

import Header from "./partial/Header"
import Footer from "./partial/Footer"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}