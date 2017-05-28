$(document).ready(function () {
    var oDataSource = new DataSource();
    oDataSource.Constructor();
});

function DataSource() {
    this.ConDat;
    this.Marks;

    this.Constructor = function fnConstructor() {
        ConDat = this;
        ConDat.SetData();
    }

    // Data Source
    this.SetData = function fnSetData() {
        ConDat.Marks = [{
            ico: 'Microsoft.PNG',
            tittle: 'Microsoft Colombia',
            logo: 'Microsoft_Logo.png',
            message: 'Microsoft Colombia - Usted esta aquí',
            description: 'Evento AngelHack Colombia - Bogotá - 2017',
            coordinates: [-74.0505455, 4.6749875]
        }, {
            ico: 'vaso.jpg',
            tittle: 'BBC 2x1 en cerveza',
            logo: 'logo_bbc.png',
            message: 'BOGOTÁ BEER COMPANY',
            description: 'Para celebrar que va a cumplir 14 años, este miércoles tendrá una promoción 2x1',
            coordinates: [-74.0474147, 4.6787132]
        }, {
            ico: 'lunch.png',
            tittle: 'Subway - ¡Festejemos',
            logo: 'subwayyy-2x1.jpg',
            message: '',
            description: '',
            coordinates: [-74.0542767, 4.6745712]
        }]
    }
}