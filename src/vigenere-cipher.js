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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabetLength = 26;
    this.start = "A".charCodeAt(0);
  }

  encrypt(text, key, isDecrypt = false) {
    if (!text || !key) throw new Error("Incorrect arguments!");
    text = text.toUpperCase();
    key = key.toUpperCase();
    const result = [];
    let k = 0;
    text.split("").forEach((letter, index) => {
      if (letter.match(/[A-Z]/)) {
        const indexSymbol = text.charCodeAt(index) - this.start;
        const shift = key.charCodeAt(k % key.length) - this.start;
        if (isDecrypt) {
          const charCode = ((indexSymbol - shift + this.alphabetLength) % this.alphabetLength) + this.start;
          result.push(String.fromCharCode(charCode));
        } else {
          result.push(String.fromCharCode(this.start + ((indexSymbol + shift) % this.alphabetLength)));
        }
        k++;
      } else {
        result.push(letter);
      }
    });
    const enctyptedText = this.isDirect ? result.join("") : result.reverse().join("");
    return enctyptedText;
  }

  decrypt(text, key) {
    return this.encrypt(text, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
