import ciphers from '../src/lib/cipher_functions.js'


describe("Test Cesar Cipher", () => {
    const alpha = "abcdefghijklmnopqrstuvwxyz";

    const cesarCipher = ciphers[0];
    const shiftOneRight = alpha.charAt(25) + alpha.slice(0, 25);
    const shiftOneLeft = alpha.slice(1, 26) + alpha.charAt(0);

    it('cesar encrypt shift 1 letter to the right', () => {
        const result = cesarCipher.encrypt(alpha, 1, false);
    
        expect(result).toBe(shiftOneRight);
    });
    
    it('cesar encrypt shift 1 letter to the left', () => {
        const result = cesarCipher.encrypt(alpha, -1, false);
    
        expect(result).toBe(shiftOneLeft);
    });
    
    it('cesar encrypt shift 1 letter to the left using decrypt mode', () => {
        const result = cesarCipher.encrypt(alpha, 1, true);
    
        expect(result).toBe(shiftOneLeft);
    });
    
    it('cesar encrypt shift 1 letter to the right using decrypt mode', () => {
        const result = cesarCipher.encrypt(alpha, -1, true);
    
        expect(result).toBe(shiftOneRight);
    });
});
