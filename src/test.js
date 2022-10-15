class VigenereCipheringMachine {
  constructor(direct = true) {
    console.debug("constructor");
    this._direct = direct;
    this._alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this._errorMsg = "Incorrect arguments!";
  }

  _converter(message, keyword, encrypt = true) {
    if (!message || !keyword) {
      throw new Error(this._errorMsg);
    } else {
      const msg = message.toUpperCase().split("");
      const key = keyword
        .repeat(Math.ceil(message.length / keyword.length))
        .toUpperCase();

      let i = 0;

      const newMsg = msg.reduce((resultMsg, currentLetter) => {
        if (this._alpha.includes(currentLetter)) {
          const letterIndexInAlpha = this._alpha.indexOf(key[i++]);
          const newAlpha = `${this._alpha.slice(
            letterIndexInAlpha
          )}${this._alpha.slice(0, letterIndexInAlpha)}`;
          return encrypt
            ? `${resultMsg}${newAlpha[this._alpha.indexOf(currentLetter)]}`
            : `${resultMsg}${this._alpha[newAlpha.indexOf(currentLetter)]}`;
        } else {
          return `${resultMsg}${currentLetter}`;
        }
      }, "");

      return this.direct ? newMsg : newMsg.split("").reverse().join("");
    }
  }

  encrypt = (message, keyword) => this._converter(message, keyword);
  decrypt = (message, keyword) => this._converter(message, keyword, false);
}

const reverseMachine = new VigenereCipheringMachine(false);
console.log(reverseMachine._direct);
