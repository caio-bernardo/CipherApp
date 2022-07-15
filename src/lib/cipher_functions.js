const alpha = "abcdefghijklmnopqrstuvwxyz";

// TODO substitute free objects by Cipher class objects.
class Cipher {
    constructor(name, desc, needKey) {
        this.name = name;
        this.desc = desc;
        this.needKey = needKey;
    }

    get hasKey() {
        return this.needKey;
    }
} 

const cesarCipher = {
    name: 'cesar',
    desc: 'Encript mensages using numbers. Read more...',
    needKey: true,
    encrypt: function(msg, skey, decrypt=false) {
        let new_msg = "";
        // TODO handle invalid key input.
        let key = parseInt(skey);
        key = decrypt? key : - key;

        for (const letter of msg) {
            if (!alpha.includes(letter)) {
                new_msg += letter;
            } else {
                const new_index = (alpha.indexOf(letter) + key + 26) % 26;
                new_msg += alpha[new_index];
            }
        }
        return new_msg;
    },
};


const vigenereCipher = {
    name: 'vigenere',
    desc: 'Ecnrypt mensages using words. Read More...',
    needKey: true,
    encrypt: function(msg, key, decrypt=false) {
        let new_msg = "";
        const nows_msg = msg.replace("/\s+/g", '');
        if (key.length < nows_msg.length) {
            // TODO make encrypt function for vigenereCipher
        }
    },      
};


const polarZenitCipher = {
    name: 'Polar Zenit', 
    desc: 'Encrypt mensages through a substitution system.',
    needKey: false,
    encrypt: function(msg) {
        // TODO make encrypt funtion for polarZenit
    }
};


const ciphers = [
    cesarCipher,
    vigenereCipher,
    polarZenitCipher,
]

export default ciphers
