function switchTab(tabId) {
  // Esconde todas as abas de conteúdo
  const pages = document.querySelectorAll('.tab-page');
  pages.forEach(page => page.classList.remove('active'));

  // Remove o estado ativo de todos os botões laterais
  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  // Ativa a aba e o botão selecionados
  const targetPage = document.getElementById('tab-' + tabId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Adiciona a classe active no botão que foi clicado
  event.currentTarget.classList.add('active');
}

// Fechar com a tecla ESC no FiveM
window.addEventListener('keyup', function(e) {
  if (e.key === 'Escape') {
    fetch(`https://${GetParentResourceName()}/closeMenu`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({})
    });
  }
});
