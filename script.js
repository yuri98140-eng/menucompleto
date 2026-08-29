function switchTab(tabId, element) {
  // Esconde todas as paginas
  const pages = document.querySelectorAll('.tab-page');
  pages.forEach(page => page.classList.remove('active'));

  // Desativa todos os botoes laterais
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Ativa a pagina e o botao atual
  const targetPage = document.getElementById('tab-' + tabId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  element.classList.add('active');
}
