$(function () {
    var valor, parcela, total;

    $("input[name=calcular]").click(function () {
        valor = parseFloat($("#valor").val());
        parcela = parseFloat($("#parcelas").val());

        if(parcela > 5){
            total = (valor*1.1)/parcela;
        }else {
            total = valor / parcela;
        }
        var total = total.toFixed(2);
        var i, table;
        table = "<table class=\"table\"><thead>\n" +
            "    <tr>\n" +
            "      <th scope=\"col\">Valor da Parcela</th>\n" +
            "      <th scope=\"col\">Nº da Parcela</th>\n" +
            "    </tr>\n" +
            "  </thead>" +
            " <tbody>";
        for (i = 1; i <= parcela; i++) {
            table = table + "<tr><td>"+total+"</td>\n<td>"+i+"</td></tr>";
        }
        table = table + "</tbody></table>";
        $("h4").html(table);
    });
    $("input[name=zerar]").click(function () {
        $("#valor").val('');
        $("#parcelas").val('');
        $("table").html("<h4>Calcule suas parcelas com o WEB Bank! Somos o banco de Web I mais exato da região. Calculamos até os juros de suas compras acima de 5 parcelas! Venha conosco, seja WEB Bank!</h4>");
    });


});
