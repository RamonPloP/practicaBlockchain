const SHA256 = require('crypto-js/sha256');  // Para importar librerias es asi

class Block{
  // Index = Posicion del Bloque en la cadena.
  // Data = Contenido de la cadena de bloques.
  // previousHash = Valor del bloque anterior en la cadena.
  // Date = fecha de creacion del bloque.
  // nounce = Numero aleatorio



  constructor(index, data, previousHash=''){  // el ='' coloca un default en caso de que ese parametro no se de
    this.index = index;
    this.data = data;
    this.previousHash = previousHash;
    this.date = new Date(); // Objeto que nos dice la fecha en que se hizo.
    this.hash = this.createHash();
    this.nounce = 0;

  }


    createHash(){
      const originalChain = `${this.index} ${this.data} ${this.date} ${this.nounce}`;
      return SHA256(originalChain).toString();
    }

  mine(dif){
    while(!this.hash.startsWith(dif)){
      this.nounce++;
      this.hash = this.createHash();
    }
  }

}

module.exports = Block;  //Para acceder a la cl
  createHash(){
    const originalChain = `${this.index} ${this.data} ${this.date} ${this.nounce}`;
    return SHA256(originalChain).toString();
  }ase que le pongamos desde otros archivos

// Cifrados:
// Simetricos y Asimetricos: Depende si son reversibles o no

//SHA Algoritmo simetrico e irreversible.
