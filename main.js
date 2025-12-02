import { db, ref, set, onValue, update, onDisconnect } from './firebase.js';
});
}
deckSlots.appendChild(slot);
}
}


function addToDeck(id){
if(deck.length>=40) return alert('デッキは最大40枚だよ');
const c = cards.find(x=>x.id===id);
if(!c) return;
deck.push(c);
renderDeck();
}


function removeFromDeck(i){ deck.splice(i,1); renderDeck(); }


qs('#saveDeck').addEventListener('click', ()=>{
localStorage.setItem('deck', JSON.stringify(deck.map(c=>c.id)));
alert('デッキを保存したよ');
});


// ガチャ（簡易実装）
async function loadGachaTable(){
const res = await fetch('/data/gacha.json');
return await res.json();
}


function drawFromTable(table){
const total = table.reduce((s,i)=>s+i.rate,0);
const r = Math.random()*total;
let acc=0;
for(const it of table){ acc+=it.rate; if(r<=acc) return it.cardId }
return table[table.length-1].cardId;
}


qs('#pullGacha').addEventListener('click', async ()=>{
const g = await loadGachaTable();
if(crystals < 50) return alert('摩擦クリスタルが足りないよ'); // 例: 50個で1回
crystals -= 50; localStorage.setItem('crystals', crystals); crystalsEl.textContent = crystals;
const id = drawFromTable(g.normal_gacha);
const card = cards.find(c=>c.id===id);
gachaResult.textContent = '引いたカード: ' + (card?card.name:id);
});


// 部屋作成/参加（Firebase）
function makeRoomId(){ return Math.random().toString(36).slice(2,8).toUpperCase(); }


qs('#createBtn').addEventListener('click', async ()=>{
const id = makeRoomId();
const roomRef = ref(db, `rooms/${id}`);
await set(roomRef, { createdAt: Date.now(), state:'waiting', players: {} });
qs('#roomInput').value = id;
alert('ルーム作成: '+id);
});


qs('#joinBtn').addEventListener('click', ()=>{
const id = qs('#roomInput').value.trim();
if(!id) return alert('ROOM ID入れて');
// ルーム同期を取る
const roomRef = ref(db, `rooms/${id}`);
onValue(roomRef, snap=>{
const d = snap.val();
qs('#battleInfo').textContent = JSON.stringify(d);
// 簡易表示
});
alert('参加要求送信しました: '+id);
});


// ナビ
qs('#hamburger').addEventListener('click', ()=> qs('#sideMenu').classList.toggle('show'));
qs('#sideMenu').addEventListener('click', e=>{
const el = e.target.closest('li'); if(!el) return;
const nav = el.dataset.nav;
document.querySelectorAll('.view').forEach(v=> v.classList.add('hidden'));
qs(`#${nav}View`).classList.remove('hidden');
});


// 初期化
loadCards().then(() => {
  const saved = JSON.parse(localStorage.getItem('deck') || '[]');

  if (saved.length > 0) {
    deck = saved
      .map(id => cards.find(c => c.id === id))
      .filter(Boolean);
  }

  renderDeck();
});
