 
var pegaSaldo = document.getElementById('saldo')
var pegaValor = document.getElementById('valor')
var pegaExtrato = document.getElementById('extrato')


//OBJETO 
var poupanca = { 

    saldo: 0,
    movimentacao: [],
    depositar: function(){

        var valor = Number(pegaValor.value)//converte a string digitada pelo user no input em number
        this.saldo += valor; //this é o mesmo que eu escrever poupanca.saldo
      
        pegaSaldo.innerHTML = this.saldo
        this.movimentacao.push("Deposito de: " + valor)
        pegaValor.value = "" //zera a caixa input

    },
    sacar: function(){

        var valor1 = Number(pegaValor.value)
        if(valor1 > this.saldo){
            alert("Saldo insuficiente..")
        }else{

            this.saldo -= valor1;
            //this.movimentacao.push("Saque de: " + valor);
        }
        pegaSaldo.innerHTML = this.saldo
        this.movimentacao.push("Saque de: " + valor1)
        pegaValor.value = ""

    },

    
    exibeExtrato: function () {
        pegaExtrato.innerHTML = "Extrato: " + "<br>"
        for( i = 0; i <= this.movimentacao.length-1; i++){
            pegaExtrato.innerHTML += this.movimentacao[i] + "<br>"
        }
        
    }


}