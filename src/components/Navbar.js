const Navbar = () => {
  return <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://fintz.com.br">
      <img src="logo_darktext.png"/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <a class="navbar-item">
        Início
      </a>

      <a class="navbar-item">
        Sobre
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Soluções
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            Fundos
          </a>
          <a class="navbar-item">
            Futuros
          </a>
          <a class="navbar-item">
            Debêntures
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            CRIs
          </a>
        </div>
      </div>

      <a class="navbar-item">
        Contato
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Log in</strong>
          </a>
          <a class="button is-light">
            Registrar
          </a>
        </div>
      </div>
    </div>
  </div>
  </nav>
}

export default Navbar