import '../styles/nav/nav.css'
export const Navbar = () => {
  return (
    <div className='nav'>
      <header className='navHeader'>
        <p className='strong'>Terra</p><p className='ligth'>Station</p>
      </header>
      <hr />
      <body className='bodyContent'>
        <ul>
          <li><span className="material-symbols-outlined navIcon">dashboard</span> <h4>Tablero de mandos</h4></li>
          <li><span className="material-symbols-outlined navIcon">account_balance_wallet</span><h4>Cartera</h4></li>
          <li><span className="material-symbols-outlined navIcon">subject</span><h4>Histórico</h4></li>
          <li><span className="material-symbols-outlined navIcon">crop</span><h4>Estacar</h4></li>
          <li><span className="material-symbols-outlined navIcon">timeline</span><h4>Intercambio</h4></li>
          <li><span className="material-symbols-outlined navIcon">inventory</span><h4>Gobernanza</h4></li>
          <li><span className="material-symbols-outlined navIcon">conversion_path</span><h4>Contratos</h4></li>
        </ul>
      </body>
    </div>
  )
}
