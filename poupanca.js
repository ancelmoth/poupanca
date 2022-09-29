 
var pegaSaldo = document.getElementById('saldo')
var valorHTML = document.getElementById('valor')
var pegaExtrato = document.getElementById('extrato')

function dataCurta(){

    var data = new Date()
    var d  = data.getDate()
    var mes = data.getMonth()+1
    var ano = data.getFullYear()

    if(d.toString == 1){
        d = "0" + d
    }
    if(mes.toString == 1){
        mes = "0" + mes
    }
    return d + "/" + mes + "/" + ano
}


//OBJETO 
var poupanca = { 

    saldo: 0,
    movimentacao: [],
    depositar: function(){

        var valor = Number(valorHTML.value)//converte a string digitada pelo user no input em number
        this.saldo += valor; //this é o mesmo que eu escrever poupanca.saldo
      
        pegaSaldo.innerHTML = this.saldo.toFixed(2)
        this.movimentacao.push(dataCurta() + " Deposito de - R$: " + valor.toFixed(2))
        valorHTML.value = "" //zera a caixa input

    },
    sacar: function(){

        var valor1 = Number(valorHTML.value)
        if(valor1 > this.saldo){
            alert("Saldo insuficiente..")
        }else{

            this.saldo -= valor1.toFixed(2);
            //this.movimentacao.push("Saque de: " + valor);
        }
        pegaSaldo.innerHTML =  this.saldo
        this.movimentacao.push(dataCurta() + " Saque de R$: " + valor1.toFixed(2))
        valorHTML.value = ""

    },

    
    exibeExtrato: function () {
        pegaExtrato.innerHTML = "Extrato: " + "<br>"
        for( i = 0; i <= this.movimentacao.length-1; i++){
            pegaExtrato.innerHTML += this.movimentacao[i] + "<br>"
        }
        
    }


}