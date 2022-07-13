 /*
 FUNCAO CIFRAR VIGENERE MSG CHAVE METODO
    SE TAMANHO DA CHAVE FOR MENOR QUE O TAMANHO DA MENSAGEM (EXCLUINDO ESPAÇOS)
        ADICIONE A CHAVE A SI MESMA ATÉ QUE TENHA TAMANHO IGUAL O DA MENSAGEM
    PARA CADA CARACTERE NA CHAVE TRANSFORME NO INDEX CORRESPONDENTE DO ALFABETO
    PARA CADA LETRA NA MENSAGEM 
 */

const alpha = "abcdefghijklmnopqrstuvwxyz";


const cesarCipher = {
    name: 'cesar',
    desc: 'Encript mensages using numbers. Read more...',
    encrypt: function(msg, key, decrypt=false) {
        let new_msg = "";
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
}


const vigenereCipher = {
    name: 'vigenere',
    desc: 'Ecnrypt mensages using words. Read More...',
    encrypt: function(msg, key, decrypt=false) {
        let new_msg = "";
        const nows_msg = msg.replace("/\s+/g", '');
        if (key.length < nows_msg.length) {

        }
    },      
}


const polarZenitCipher = {name: 'Polar Zenit'}


const ciphers = [
    cesarCipher,
    vigenereCipher,
    polarZenitCipher,
]

export default {ciphers, alpha}
