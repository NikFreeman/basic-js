const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
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

module.exports = {
  VigenereCipheringMachine,
};
