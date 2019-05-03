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
        if ($('#01').val() == "nada"){
            alert("Escolha os jogadores!");
            return false;
        }
        else if ($('#02').val() == "nada"){
            alert("Escolha os jogadores!");
            return false;
        }
        $('#pagina_do_personagem').hide();
        $('#pagina_do_personagem_2').hide();
        $('#area_do_jogo').show();
        $('#area_do_jogo_voltar').show();
    });
    $('#voltar').click(function () {
        location.reload();
    });
    $('#e_1').click(function () {
        $('#personagem_1').html("<img src='imagens/soldado.PNG' class='img-responsive img-rounded'><h4>Soldadinho do Araripe</h4><input id='01' value='soldado' style='display:none;'/>");
        $('#j_1').html("<img src='imagens/soldado.PNG' class='img-responsive img-rounded'><h4>Soldadinho do Araripe</h4>");
    });
    $('#e_2').click(function () {
        $('#personagem_1').html("<img src='imagens/jacucaca.png' class='img-responsive img-rounded'><h4>Jacucaca</h4><input id='01' value='ja' style='display:none;'/>");
        $('#j_1').html("<img src='imagens/jacucaca.png' class='img-responsive img-rounded'><h4>Jacucaca</h4>");
    });
    $('#e_3').click(function () {
        $('#personagem_2').html("<img src='imagens/Mariabonita.png' class='img-responsive img-rounded'><h4>Maria Bonita</h4><input id='02' value='mariab' style='display:none;'/>");
        $('#j_2').html("<img src='imagens/Mariabonita.png' class='img-responsive img-rounded'><h4>Maria Bonita</h4>");
    });
    $('#e_4').click(function () {
        $('#personagem_2').html("<img src='imagens/cangaço.PNG' class='img-responsive img-rounded'><h4>Lampião</h4><input id='02' value='lampi' style='display:none;'/>");
        $('#j_2').html("<img src='imagens/cangaço.PNG' class='img-responsive img-rounded'><h4>Lambião</h4>");
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
            $('.campo').off();
            if ($('#01').val() == "soldado"){
                $('#TituloModalLongoExemplo').html("<h3>Soldadinho do Araripe</h3>");
                $('#modalconteudo').html("<p>O soldadinho-do-araripe (nome científico: Antilophia bokermanni) é uma ave passeriforme da família Pipridae. O nome bokermanni é uma homenagem ao zoólogo brasileiro Werner Bokermann. É uma espécie em perigo crítico de extinção.\n" +
                    "\n" +
                    "                                    Foi descoberto em 1996 na Chapada do Araripe, Região Nordeste do Brasil. Segundos os seus descobridores, o soldadinho-do-araripe somente é encontrado nos municípios de Barbalha, Araripe, Crato e Missão Velha, todos no Ceará.[carece de fontes]\n" +
                    "\n" +
                    "                                        Também é conhecido como galo-da-mata e lavadeira-da-mata.</p><br/><img src=\"imagens/re_soldado.PNG\" class=\"img-responsive img-rounded\" >");
            }
            if ($('#01').val() == "ja"){
                $('#TituloModalLongoExemplo').html("<h3>Jacucaca</h3>");
                $('#modalconteudo').html("<p>Penelope jacucaca também conhecida como jacu-verdadeiro, jacu do Nordeste ou simplesmente jacucaca é uma espécie de ave da família Cracidae. Pertence ao grupo dos jacus. Apenas pode ser encontrada no seguinte país: Brasil. É endêmica da caatinga, encontrada no interior da região Nordeste (Ceará, Bahia e Paraíba), e também achada em zonas de transição entre a caatinga e o cerrado. Os últimos registros da espécie evidenciam sua ocorrência em áreas de carrasco, cerrado e de matas secas. Os seus habitats naturais são: florestas secas tropicais ou subtropicais e florestas subtropicais ou tropicais úmidas de baixa altitude. Também ocorria nos estados do Maranhão, Pernambuco, Piauí, Alagoas, e Minas Gerais, estando hoje extinta na maioria deles. Está ameaçada de extinção, sendo classificada como vulnerável, por perda de habitat e caça predatória.</p><br/><img src=\"imagens/re_ja.PNG\" class=\"img-responsive img-rounded\" >");
            }
            $('#recompensa').show();

        }
        if(soma == 3){
            $('.campo').off();
            if ($('#02').val() == "mariab"){
                $('#TituloModalLongoExemplo').html("<h3>Maria Bonita</h3>");
                $('#modalconteudo').html("<p>A baiana Maria Gomes de Oliveira era chamada desde a infância de Maria de Déa, em referência a sua mãe. Nem a família nem o bando de Lampião a tratavam por Maria Bonita, apelido que só se difundiu após sua morte. Há algumas versões sobre a origem desse nome. Uma delas diz que se tratou de invenção dos repórteres dos jornais do Rio de Janeiro, possivelmente inspirados no filme Maria Bonita, lançado em 1937 e baseado na obra de mesmo nome de Afrânio Peixoto, de 1921. Outra, que teria sido dado por soldados que se impressionaram com a beleza da cangaceira quando ela foi morta em 28 de julho de 1938, aos 27 anos.</p><br/><img src=\"imagens/re_ma.png\" class=\"img-responsive img-rounded\" >");
            }
            if ($('#02').val() == "lampi"){
                $('#TituloModalLongoExemplo').html("<h3>Lampião</h3>");
                $('#modalconteudo').html("<p>Nascido na cidade de Vila Bela, atual Serra Talhada, no semiárido do estado de Pernambuco, foi o terceiro filho de José Ferreira dos Santos e Maria Sucena da Purificação.\n" +
                    "\n" +
                    "Até os 21 anos de idade trabalhou como artesão. Era alfabetizado e usava óculos para leitura, características bastante incomuns para a região sertaneja e pobre onde ele morava. Uma das versões a respeito de seu apelido é que sua capacidade de atirar seguidamente, iluminando a noite com seus tiros, fez com que recebesse o apelido de lampião.[7]\n" +
                    "\n" +
                    "Sua família travava uma disputa com outras famílias locais, geralmente por limites de terras, até que seu pai foi morto em confronto com a polícia em 1919. Virgulino jurou vingança, e junto de mais dois irmãos, passou a integrar o grupo do cangaceiro Sinhô Pereira.\n" +
                    "\n" +
                    "Em 1922, tornou-se líder do bando até então comandado por Sinhô Pereira em Pernambuco. No mesmo ano matou o informante que entregou seu pai à polícia, e realizou o maior assalto da história do cangaço àquela altura, contra a Baronesa de Água Branca em Alagoas.\n" +
                    "\n" +
                    "Além do grupo principal, Lampião tinha o comando de diversos subgrupos paralelos, designando outros cangaceiros à frente, a exemplo de Corisco e Antonio de Engracia.\n" +
                    "\n" +
                    "Em 1930 se junta afetivamente a Maria Bonita na Bahia. No mesmo ano, aparece no jornal The New York Times. Em 1936, seu cotidiano na caatinga é fotografado e filmado por Benjamin Abrahão Botto.\n" +
                    "\n" +
                    "Durante quase 20 anos, Lampião viajou com seu bando de cangaceiros, todos a cavalo e em trajes de couro, chapéus, sandálias, casacos, cintos de munição e calças para protegê-los dos arbustos com espinhos típicos da vegetação caatinga. Para proteger o \"capitão\" (como Lampião era chamado) e realizar ataques a fazendas e municípios, todos usavam sempre um poder bélico potente. Como não existiam contrabandos de armas para se adquirir, as mesmas eram, em sua maioria, roubadas da polícia e de unidades paramilitares. A espingarda Mauser e uma grande variedade de pistolas semiautomáticas e revólveres também eram adquiridos durante confrontos. A arma mais utilizada era o rifle Winchester. O bando chamava os integrantes das volantes de \"macacos\" - uma alusão ao modo como os soldados fugiam quando avistavam o grupo de Lampião: \"pulando\".</p><br/><img src=\"imagens/re_lambi.png\" class=\"img-responsive img-rounded\" >");
            }
            $('#recompensa').show();
        }
    }

});
