import { Link } from "react-router-dom"

function NavBar() {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/" >Home</Link>
        </li>
        <li>
          <Link to="/company" >Empresa</Link>
        </li>
        <li>
          <Link to="newproject" >Novo Projeto</Link>
        </li>
        <li>
          <Link to="contact" >Contatos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar