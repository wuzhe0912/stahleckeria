class Player {
  // 若添加 readonly 則僅能讀取不能重新指派值
  name: string;
  constructor(name) {
    this.name = name
  }
  attack() {
    return `${this.name} is attack monster.`
  }

  // 添加 private 則不允許使用或修改
  // private attack() {
  //   return `${this.name} is attack monster.`
  // }

  // protected 允許子類別使用
  // protected attack() {
  //   return `${this.name} is attack monster.`
  // }
}
const warrior = new Player('Pitt');
console.log(warrior.attack());

class newPlayer extends Player {
  defence() {
    return `${this.name} is defence against attacks from monsters.`
  }
}

const knight = new newPlayer('Min');
console.log(knight.defence());

class newJob extends Player {
  static job = ['warlock']
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  cast() {
    return `${super.attack()} And cast a ice spell.`
  }
}
const warlock = new newJob('Pitt Wu')
console.log(warlock.cast());
console.log(newJob.job);