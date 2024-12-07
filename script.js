function atualizarContagem() {
  const agora = new Date().getTime();
  const abertura = new Date().setHours(24, 0, 0, 0); // Meia-noite de hoje
  const tempoRestante = abertura - agora;

  if (tempoRestante <= 0) {
    // Redirecionar para o site principal
    window.location.href = "site/site.html";
  } else {
    const horas = Math.floor(
      (tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor(
      (tempoRestante % (1000 * 60 * 60)) / (1000 * 60)
    );
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").textContent = `${String(
      horas
    ).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(
      segundos
    ).padStart(2, "0")}`;
  }
}

// Atualizar a contagem a cada segundo
setInterval(atualizarContagem, 1000);
atualizarContagem(); // Chamada inicial para exibir imediatamente
