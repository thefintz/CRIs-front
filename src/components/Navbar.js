const Navbar = () => {
  return <nav class="navbar pl-5" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://fintz.com.br">
      <img src="./icon.png" style={{minHeight:"2.2rem"}}/>
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">

      <a class="navbar-item is-size-5" href="https://fintz.com.br">
        Início
      </a>

      <a class="navbar-item is-size-5" href="https://fintz.com.br/#/produtos">
        Soluções
      </a>

      <a class="navbar-item is-size-5" href="https://fintz.com.br/#/contato">
        Contato
      </a>
    </div>

    {/* <div class="navbar-end">
      <div class="navbar-item">
        <a class="button is-primary">
          <strong>Log in</strong>
        </a>
      </div>
      <div class="navbar-item">
        <a class="button is-light">
          Registrar
        </a>
      </div>
    </div> */}
  </div>
  </nav>
}

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

export default Navbar