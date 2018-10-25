
/* nav Menu */
function historialConsumoNav() {
    $('#getResidueApp').hide();
    $('#perfilApp').show();
    $('#logged').show();
    // $('#sidevar').show();
    $('#loginRegister').hide();
    $('#calculate').hide();

}

function metricaDatoNav() {
    $('#perfilApp').hide();
    $('#getResidueApp').show();
    $('#calculate').hide();
}

function detalleFacturaNav() {
    $('#perfilApp').hide();
    $('#getResidueApp').hide();
    $('#calculate').show();

}

/* Principal div buttons */
function metricaPrincipalDiv() {
    $('#metricas').show();
    $('#volumenes').hide();
    $('#consumo').hide();
    $('#factura').hide();
}

function volumenesPrincipalDiv() {
    $('#metricas').hide();
    $('#volumenes').show();
    $('#consumo').hide();
    $('#factura').hide();
}

function consumoPrincipalDiv() {
    $('#metricas').hide();
    $('#volumenes').hide();
    $('#consumo').show();
    $('#factura').hide();
}

function facturaPrincipalDiv() {
    $('#metricas').hide();
    $('#volumenes').hide();
    $('#consumo').hide();
    $('#factura').show();
}


