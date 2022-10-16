class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direction = direct;
    this._alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  _handlerEncrypt(message, key, direct = true) {
    if (!message || !key) throw new Error(`Incorrect arguments!`);
    else {
      let messageArray = message.toUpperCase().split("");
      let keyArray = key
        .repeat(Math.ceil(message.length / key.length))
        .toUpperCase()
        .split("");
      let keyIndex = 0;
      const msg = messageArray.reduce((result, elem) => {
        if (this._alpha.includes(elem)) {
          let symbolIndex;
          let indexKey = this._alpha.indexOf(keyArray[keyIndex++]);
          let currentAlpha = this._alpha
            .slice(indexKey)
            .concat(this._alpha.slice(0, indexKey));
          if (direct) {
            symbolIndex = this._alpha.indexOf(elem);
            result.push(currentAlpha[symbolIndex]);
          } else {
            symbolIndex = currentAlpha.indexOf(elem);
            result.push(this._alpha[symbolIndex]);
          }
          return result;
        } else {
          result.push(elem);
          return result;
        }
      }, []);
      return this.direction ? msg.join("") : msg.reverse().join("");
    }
  }

  encrypt = (message, key) => this._handlerEncrypt(message, key, true);

  decrypt = (message, key) => this._handlerEncrypt(message, key, false);
}
const cryptMachine = new VigenereCipheringMachine(true);
console.log(cryptMachine.encrypt("attack at dawn!", "alphonse"));
console.log(cryptMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
const reverseMachine = new VigenereCipheringMachine(false);
console.log(reverseMachine.encrypt("attack at dawn!", "alphonse"));
console.log(reverseMachine.decrypt("AEIHQX SX DLLU!", "alphonse"));
