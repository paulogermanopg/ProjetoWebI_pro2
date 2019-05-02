var rodada = 1;
var matriz = Array(3);
$(document).ready(function () {
    $('#iniciar_jogo').click(function () {
        $('#pagina_do_personagem').hide();
        $('#area_do_jogo').show();
    });
    $('.campo').click(function () {
        var id_campo = this.id;
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
    }
});
