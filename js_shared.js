function startGame() {
  // جلب القيم من الحقول
  const question = document.getElementById('teacher-question')?.value.trim() || '';
  const word     = document.getElementById('target-word')?.value.trim() || '';
  const name     = document.getElementById('player-name')?.value.trim() || '';
  const desc     = document.getElementById('player-desc')?.value.trim() || '';

  // التحقق من الحقول الأساسية
  if (!question || !word || !name) {
    alert("❗️ يرجى تعبئة جميع الحقول المطلوبة: التلميح، الكلمة، واسم اللاعب.");
    return;
  }

  // حفظ البيانات في التخزين المحلي
  localStorage.setItem('crab_hint', question);
  localStorage.setItem('crab_word', word);
  localStorage.setItem('crab_player', name);
  localStorage.setItem('crab_desc', desc);

  // الانتقال إلى صفحة اللعبة
  window.location.href = "game.html";
}
