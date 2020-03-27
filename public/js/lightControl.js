function control() {
    // se a lampada estava apagada, chama o serviço para acender
    // e muda a imagem para a lâmpada acesa
    if ($("#lightImage").attr("src").match("off")) {
        $.get("/light/on", function (dataReturned, statusReturned) {
            if (dataReturned.status == "OK")
                $("#lightImage").attr("src", "/img/on.gif");
            alert("Data: " + dataReturned.data);
        });
    }
    // se a lampada estava acesa, chama o serviço para apagar
    // e muda a imagem para a lâmpada apagada
    else {
        $.get("/light/off", function (dataReturned, statusReturned) {
            if (dataReturned.status == "OK")
                $("#lightImage").attr("src", "/img/off.gif");
            alert("Data: " + dataReturned.data);
        });
    }
}