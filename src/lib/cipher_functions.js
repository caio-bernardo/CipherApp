/*
FUNCAO ENCRIPTAR CESAR (STRING MENSAGEM, INTEGER KEY)
    PARA CADA LETRA EM MENSAGEM
        INDEX = ALFABETO.GET(LETRA) + KEY 
        NOVA MENSAGEM += ALPHA[INDEX]
    
    JUNTE NOVA MENSAGEM NUMA STRING
    RETORNE NOVA MENSAGEM


FUNCAO ENCRIPTAR MSG KEY 
    MAPEIE MSG APLICANDO {
        SE LETRA NAO ESTIVER EM ALFABETO
        RETORNE LETRA
        SE NÃO
        RETORNE ALFABETO[INDEX DA LETRA + KEY + 26 % 26]
    }
*/
const alpha = 'abcdefghijklmnopqrstuvwxyz';

const cesar_cipher = function(msg, key) {
    // P = (C + K + 26) % 26
    // No negative index is produce this way 
}
