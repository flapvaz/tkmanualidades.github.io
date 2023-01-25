class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<header>
<div class="logo">
<a href="index.html">
  <img src="imagens/tklogo.webp">
</a>
</div>
<div class="logo2">
<a href="index.html">
  <img src="imagens/tklogo2.webp">
</a>
</div>
<input type="checkbox" id="menu-check">
<label id="icone" for="menu-check">
<div class="menu-icon" onclick="myFunction(this)">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
</label>
<div class="menu-bar">
<nav>
<a href="/"><div class="menu-link mhome">Início</div></a>
<a href="sobre.html"><div class="menu-link">Sobre</div></a>
<a href="contato.html"><div class="menu-link">Contato</div></a>
</nav>
<div class="social-fixo"><div class="social-menu">
<a href="" target="_blank"><img src="imagens/instagram.png"></a>
<a href="" target="_blank"><img src="imagens/twitter.png"></a>
<a href="" target="_blank"><img src="imagens/facebook.png"></a>
<a href="https://wa.me/5511911222977" target="_blank"><img src="imagens/whatsapp.png"></a>
<a href="" target="_blank"><img src="imagens/email.png"></a>
</div></div>
</header>
    `;
  }
}

customElements.define('header-primario', Header);

function myFunction(x) {
  x.classList.toggle("change");
}