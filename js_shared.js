function startGame() {
  const question = document.getElementById('teacher-question').value.trim();
  const word = document.getElementById('target-word').value.trim();
  const name = document.getElementById('player-name').value.trim();

  if (!question || !word || !name) {
    alert("يرجى تعبئة جميع الحقول المطلوبة (التلميح، الكلمة، اسم اللاعب)");
    return;
  }

  // التخزين المحلي لاستخدامها لاحقاً
  localStorage.setItem('crab_hint', question);
  localStorage.setItem('crab_word', word);
  localStorage.setItem('crab_player', name);
  localStorage.setItem('crab_desc', document.getElementById('player-desc').value.trim());

  // الانتقال لصفحة اللعبة
  window.location.href = "game.html";
}
