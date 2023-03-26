const { expect } = require('chai');
const { encodeCaesarCipher } = require('./solution');

describe('Caesar Cipher Challenge', () => {
    it('should encode the message using Caesar cipher', () => {
        const message = 'Hello, World!';
        const shift = 3;
        const encodedMessage = encodeCaesarCipher(message, shift);
        expect(encodedMessage).to.equal('Khoor, Zruog!');
    });

    it('should handle shifts greater than the length of the alphabet', () => {
        const message = 'abc';
        const shift = 27;
        const encodedMessage = encodeCaesarCipher(message, shift);
        expect(encodedMessage).to.equal('bcd');
    });

    it('should handle negative shifts', () => {
        const message = 'Hello, World!';
        const shift = -3;
        const encodedMessage = encodeCaesarCipher(message, shift);
        expect(encodedMessage).to.equal('Ebiil, Tloia!');

    });

    it('should keep special characters unchanged', () => {
        const message = 'Hello, World! 123';
        const shift = 3;
        const encodedMessage = encodeCaesarCipher(message, shift);
        expect(encodedMessage).to.equal('Khoor, Zruog! 123');
    });

    it('should handle empty messages', () => {
        const message = '';
        const shift = 3;
        const encodedMessage = encodeCaesarCipher(message, shift);
        expect(encodedMessage).to.equal('');
    });
});