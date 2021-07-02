
function consultaCep(){
    $(".barra-progresso").show();

    // através do id do cep vai pegar seu valor
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(url);    
    $.ajax({
        url: url,
        type: "GET",
        // a função vai ser rodada quando o request teve sucesso
        success: function(response){
            console.log(response);
            // cada id vai receber uma resposta
            $("#logradouro").html(response.logradouro);
            $("#uf").html(response.uf);
            $("#localidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function(){
    // .hide() esconde os elementos selecionados
    $(".cep").hide();
    $(".barra-progresso").hide();
})

