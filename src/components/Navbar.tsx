import '../styles/nav/nav.css'
export const Navbar = () => {
  return (
    <div className='nav'>
      <header className='navHeader'>
        Terra station
      </header>
      <hr/>
      <body className='bodyContent'>
        <ul>
          <li>Tablero de mandos</li>
          <li>Cartera</li>
          <li>Histórico</li>
          <li>Estacar</li>
          <li>Intercambio</li>
          <li>Gobernanza</li>
          <li>Contratos</li>
        </ul>
      </body>
    </div>
  )
}
