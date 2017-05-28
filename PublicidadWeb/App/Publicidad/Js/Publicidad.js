$(document).ready(function () {
    var oPublicidad = new Publicidad();
    oPublicidad.Constructor();
});

function Publicidad() {
    this.ConPub;

    this.Constructor = function fnConstructor() {
        ConPub = this;
        ConPub.Eventos();
    }

    // Eventos
    this.Eventos = function fnEventos() {
        let click = 'click';
        $('#btnSesion').bind(click, ConPub.SesionBtn);
    }

    // Methos
    this.SesionBtn = function fnSesionBtn() {
        window.location.replace("/App/Publicidad/Html/MapOfer.html");
    } 

    // test connect to Facebook
    this.TestStatus = function fnTestStatus() {
        $.ajaxSetup({ cache: true });
        $.getScript('//connect.facebook.net/en_US/sdk.js', function () {
            FB.init({
                appId: '{179582235903765}',
                version: 'v2.9'
            });
            FB.getLoginStatus(ConPub.updateStatusCallback);
        });
    }

    this.updateStatusCallback = function fnupdateStatusCallback(d) {
        console.log(d);
    }
}