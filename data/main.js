// 初期化
loadCards().then(() => {
  // saved deck の読み込み
  const saved = JSON.parse(localStorage.getItem('deck') || '[]');
  if (saved.length > 0) {
    deck = saved
      .map(id => cards.find(c => c.id === id))
      .filter(Boolean);
  }
  renderDeck();
});
