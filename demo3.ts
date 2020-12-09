// interface 介面，可以將重複的型別統一宣告
interface Player {
  name: string,
  defence: number,
  attack: number,
  // 若添加問號，則代表為可選，非必填
  mana?: number,
}

const result = (player: Player) => {
  if (player.defence > 70 && player.attack > 75) {
    console.log(`${player.name}：轉職成功。`);
  } else console.log(`${player.name}：攻擊或防禦不足，轉職失敗。`);
}

const getPlayerDetail = (player: Player) => {
  console.log(`玩家：${player.name}，攻擊力：${player.attack}，防禦力：${player.defence}`);
}

const player = {
  name: 'Pitt',
  defence: 80,
  attack: 90,
}

result(player);
getPlayerDetail(player);