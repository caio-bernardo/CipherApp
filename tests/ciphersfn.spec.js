import {alpha, ciphers} from '../src/lib/cipher_functions.js'


it('cesar encrypt shift 1 letter to the right', () => {
    const expresult = alpha[1, 26] + alpha[0];
    const result = ciphers.cesarCipher.encrypt(alpha, 1, false);

    expect(expresult === result);

})

it('cesar encrypt shift 1 letter to the left', () => {
    const expresult = alpha.reverse();
    const result = ciphers.cesarCipher.encrypt(alpha, -1, false);

    expect(expresult === result);
})