$(document).ready(function () {
    var oMapBox = new MapBox();
    oMapBox.Constructor();
});

function MapBox() {
    this.ConMap;
    this.map;
    this.MicrosoftCoor;

    this.Constructor = function fnConstructor() {
        ConMap = this;
        // set Data - Current Geo
        ConMap.MicrosoftCoor = [-74.0505455, 4.6749875];
        // Init
        ConMap.Eventos();
        ConMap.CargaInicialDeMapa();
        ConMap.AgregarMarcas();
        // Add Html
        ConMap.AppendHtml();
    }

    // Append Html
    this.AppendHtml = function fnAppendHtml() {
        $.get("Modal.html", function (a) {
            $('#divModalToAppend').append(a);
        })
    }

    // Diseno
    this.AgregarMarcas = function fnAgregarMarcas() {
        // For in Marks
        $.each(ConDat.Marks, function (index, value) {
            let icoMark = ConMap.GetMark(value);
            ConMap.AddOneMark(icoMark.html, icoMark);
        });
    }

    this.AddOneMark = function fnAddOneMark(html, mark) {
        new mapboxgl.Marker(html, { offset: [30, 30] }).setLngLat(mark.Coor).addTo(ConMap.map);
    }

    // Eventos
    this.Eventos = function fnEventos() {
        let click = 'click';
        $('#btnHome').bind(click, ConMap.IrHome);
    }

    // Methos
    this.CargaInicialDeMapa = function fnCargaInicialDeMapa() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWxlamJpayIsImEiOiJjajM4MDZ1OWowMWQ4MnhzNG83aGk5aHc5In0.RLm1RGld9hsNP4r6LNzD6A';
        ConMap.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: ConMap.MicrosoftCoor,
            zoom: 15
        });
    }

    this.IrHome = function fnIrHome() {
        window.location.replace("/Index.html");
    }

    // Objects to mark
    this.GetMark = function fnGetMark(mark) {
        var htmlDivMark = ConMap.GetHtmlToMark(mark.ico);

        htmlDivMark.addEventListener('click', function () { ConMap.VieMark(mark); });
        htmlDivMark.addEventListener('mouseover', function () { ConMap.VieMark(mark); });

        return { Coor: mark.coordinates, html: htmlDivMark };
    }

    this.GetHtmlToMark = function fnMark(icon) {
        let htmlIco = document.createElement('div');
        htmlIco.className = 'marker';
        htmlIco.style.backgroundImage = 'url(../../../Assest/Image/' + icon + ')';
        htmlIco.style.width = '30px';
        htmlIco.style.height = '30px';
        return htmlIco;
    }

    this.VieMark = function fnVieMark(mark) {
        // Set
        $('#hTitulo').empty();
        $('#hTitulo').append(mark.tittle);
        $('#imgModal').attr('src', '../../../Assest/Image/'+ mark.logo);
        $('#sLugar').empty();
        $('#sLugar').append(mark.message);
        $('#sDescripcion').empty();
        $('#sDescripcion').append(mark.description);

        // Show
        $('#divModal').modal('toggle');
    }
}