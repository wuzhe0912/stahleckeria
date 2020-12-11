interface Radio {
  switchRadio(trigger: boolean): void
}
interface Battery {
  checkBatteryStatus(): void
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus(): void
}


class PC implements Radio {
  switchRadio(trigger: boolean) {

  }
}

class Mobile implements Radio, Battery {
  switchRadio(trigger: boolean) {

  }
  checkBatteryStatus() {

  }
}

class Car implements RadioWithBattery {
  switchRadio(trigger: boolean) {

  }
  checkBatteryStatus() {

  }
}