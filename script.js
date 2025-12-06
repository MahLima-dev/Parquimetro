class Parquimetro {
    constructor(valor) {
        this.valor = Number(valor)
    }
    taxa(){
         let tempo = 0
        if(isNaN(this.valor)){
            document.getElementById("valorTaxa").textContent = "Valor inválido, insira um valor válido";
            return
        }
        else if(this.valor >= 1 && this.valor< 1.75){
            tempo = 30
        }
        else if(this.valor  >= 1.75 && this.valor< 3){
            tempo = 60
        }
        else if(this.valor === 3){
            tempo = 120
        }
        else if(this.valor > 3){
            tempo = 120
        }
        else if(this.valor < 1){
             document.getElementById("valorTaxa").textContent = "Valor Insuficiente"
             return
        }
         console.log("Valor recebido em taxa():", this.valor)

        document.getElementById("valorTaxa").textContent = `O valor foi de R$ ${this.valor} e o tempo ${tempo} minutos`;
    }
    troco(){
        let valorTroco = 0
        if(this.valor === 1 || this.valor === 1.75 || this.valor === 3 ){
            document.getElementById("valorTroco").textContent = "Sem troco"
            return
        }
        if(this.valor > 3){
            valorTroco = this.valor - 3
        }
        else if(this.valor > 1.75){
             valorTroco = this.valor - 1.75
        }
        else if(this.valor > 1){
            (valorTroco = this.valor - 1)
        }
     document.getElementById("valorTroco").textContent = `O troco é de R$ ${valorTroco.toFixed(2)}`;
    }
}
function calcular(){
    const valor = parseFloat(document.getElementById("valor").value);
    const p = new Parquimetro(valor)
    p.taxa()
    p.troco()
}