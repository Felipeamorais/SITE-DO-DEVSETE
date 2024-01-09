const Ultra = require('../models/ultra');

async function criarNovoUltra(distancia, tipo_vaga, estado){

    const novoUltra = new Ultra(
        null,distancia,tipo_vaga,estado);
   
    await Ultra.create(novoUltra, (erro, ultraId) => {
        if (erro) {
            return erro;
        } else {
            return ultraId;
        }
    });

}

module.exports = {
    criarNovoUltra
};

