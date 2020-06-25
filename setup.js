let switchButton = new SwitchButton();
let electricLamp = new ElectricLamp();

switchButton.connectToLamp(electricLamp);
switchButton.switchOff();
document.write('electricLamp status: ' + electricLamp.status + '<br>');
switchButton.switchOn();
document.write('electricLamp status: ' + electricLamp.status + '<br>');
