var rodada = 1;
var matriz = Array(3);
matriz['a'] = Array(3);
matriz['b'] = Array(3);
matriz['c'] = Array(3);

matriz['a'][1] = 0;
matriz['a'][2] = 0;
matriz['a'][3] = 0;

matriz['b'][1] = 0;
matriz['b'][2] = 0;
matriz['b'][3] = 0;

matriz['c'][1] = 0;
matriz['c'][2] = 0;
matriz['c'][3] = 0;

$(document).ready(function () {
    $('#iniciar_jogo').click(function () {
        $('#pagina_do_personagem').hide();
        $('#area_do_jogo').show();
    });
    $('.campo').click(function () {
        var id_campo = this.id;
        $('#'+id_campo).off();
        jogo_play(id_campo);
    });
    function jogo_play(id) {
        var simbolo = '';
        var pontos = 0;

        if ((rodada % 2) == 0){
            simbolo = 'url(imagens/Ocangaço.png)';
            pontos = 1;
        }else {
            simbolo = 'url(imagens/xpassaro.png)';
            pontos = -1;
        }

        rodada++;

        $('#'+id).css('background-image',simbolo);

        var posicao = id.split('_');

        matriz[posicao[0]][posicao[1]] = pontos;

        analise();
    }
    
    function analise() {
        var soma = 0;
        for(var i=1; i<=3; i++){
            soma = soma + matriz['a'][i];
        }
        analise_2(soma);

        soma = 0;
        for(var i=1; i<=3; i++){
            soma = soma + matriz['b'][i];
        }
        analise_2(soma);

        soma = 0;
        for(var i=1; i<=3; i++){
            soma = soma + matriz['c'][i];
        }
        analise_2(soma);

        //
        for(var j=1; j<=3; j++){
            soma = 0;
            soma = soma + matriz['a'][j];
            soma = soma + matriz['b'][j];
            soma = soma + matriz['c'][j];
            analise_2(soma);
        }

        //
        soma = 0;
        soma = matriz['a'][1]+matriz['b'][2]+matriz['c'][3];
        analise_2(soma);

        soma = 0;
        soma = matriz['a'][3]+matriz['b'][2]+matriz['c'][1];
        analise_2(soma);

    }
    function analise_2(soma) {
        if(soma == -3){
            alert('venceu pardal');
            $('.campo').off();
        }
        if(soma == 3){
            alert('venceu lampiao');
            $('.campo').off();
        }
    }

});
