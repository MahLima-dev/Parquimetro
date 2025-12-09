class Parquimetro{
    constructor(){
    this.valor = 0
    }
    atualizarValor(){
        this.valor = parseInt(document.getElementById("valor").value)
    }
    duracao(){
        if (isNaN(this.valor)) {
            document.getElementById("duracao").textContent = "Valor inválido"
            return;
        }
        let tempo = 0
        if (this.valor >= 1 && this.valor < 1.75) {
            tempo = 30
        }
        else if (this.valor >= 1.75 && this.valor < 3) {
            tempo = 60
        }
        else if (this.valor >= 3) {
            tempo = 120
        }
        else{
        document.getElementById("duracao").textContent = "Valor insuficiente"
        return;
        }
        document.getElementById("duracao").textContent = `O valor foi de R$ ${this.valor} e a duração de ${tempo} minutos`
        
    }
    troco(){
        let valorDisponivel = [1, 1.75, 3]
        if(valorDisponivel.includes(this.valor)){
        document.getElementById("troco").textContent = "Sem troco"
        }
        let troco = 0
        if(this.valor > 3){
            troco = this.valor - 3
        }
         if(this.valor > 1.75 && this.valor < 3){
            troco = this.valor - 1.75
        }
         if(this.valor > 1 && this.valor < 1.75){
            troco = this.valor - 1
        }
        document.getElementById("troco").textContent = `E o troco é de ${troco.toFixed(2)} reais`
    }
}


function calcular(){
    const p = new Parquimetro()
    p.atualizarValor()
    p.duracao()
    p.troco()
}
