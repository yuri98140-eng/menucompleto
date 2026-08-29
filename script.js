// Função para alternar entre as abas principais
function switchTab(tabId, element) {
  const pages = document.querySelectorAll('.tab-page');
  pages.forEach(page => page.classList.remove('active'));

  const buttons = document.querySelectorAll('.nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const targetPage = document.getElementById('tab-' + tabId);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  if (element) {
    element.classList.add('active');
  }
}

// SUPORTE COMPLETO PARA CURSOR E CLIQUE VIA DUI (FIVEM)
const virtualCursor = document.getElementById('virtual-cursor');

window.addEventListener('message', function(event) {
  const data = event.data;

  // Atualiza posição do cursor na tela DUI
  if (data.type === "updateCursor") {
    if (virtualCursor) {
      virtualCursor.style.left = data.x + 'px';
      virtualCursor.style.top = data.y + 'px';
    }
  }

  // Executa o clique do mouse nas coordenadas
  if (data.type === "click") {
    const target = document.elementFromPoint(data.x, data.y);
    if (target) {
      target.click();
    }
  }
});
