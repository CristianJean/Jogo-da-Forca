class Forca {
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.vidas = 6;
    this.letrasChutadas = [];
    this.palavra = [...Array(palavraSecreta.length)].map(() => {
      return '_';
    });
    this.acertos = 0;
  }

  chutar(letra) { 
    let acertou = false;
    if (letra.length == 1 && !this.letrasChutadas.includes(letra)){
      this.letrasChutadas.push(letra);
      for (let i = 0; i < this.palavra.length; i++){
        if (letra == this.palavraSecreta[i]){
          this.acertos++;
          this.palavra[i]= letra;
          acertou = true;
        }
      }
      if (acertou == false) {this.vidas--}
    }
    else {
      console.log('Dígito inválido')
    }
  }

  buscarEstado() {
    if (this.acertos == this.palavraSecreta.length){
      return 'ganhou';
    } if (this.vidas == 0){
      return 'perdeu';
    } else {
      return 'aguardando chute';
    }
  }
   
  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}
module.exports = Forca;
