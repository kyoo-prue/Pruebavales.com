var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM HOT',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'})]
    })
})
]
});
var format_localidades_0 = new ol.format.GeoJSON();
var features_localidades_0 = format_localidades_0.readFeatures(json_localidades_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localidades_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_localidades_0.addFeatures(features_localidades_0);var lyr_localidades_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localidades_0, 
                style: style_localidades_0,
                title: '<img src="styles/legend/localidades_0.png" /> localidades'
            });var format_localidades_1 = new ol.format.GeoJSON();
var features_localidades_1 = format_localidades_1.readFeatures(json_localidades_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localidades_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_localidades_1.addFeatures(features_localidades_1);var lyr_localidades_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_localidades_1, 
                style: style_localidades_1,
    title: 'localidades<br />\
    <img src="styles/legend/localidades_1_0.png" /> ANTONIO NARIÑO<br />\
    <img src="styles/legend/localidades_1_1.png" /> BARRIOS UNIDOS<br />\
    <img src="styles/legend/localidades_1_2.png" /> BOSA<br />\
    <img src="styles/legend/localidades_1_3.png" /> CANDELARIA<br />\
    <img src="styles/legend/localidades_1_4.png" /> CHAPINERO<br />\
    <img src="styles/legend/localidades_1_5.png" /> CIUDAD BOLIVAR<br />\
    <img src="styles/legend/localidades_1_6.png" /> ENGATIVA<br />\
    <img src="styles/legend/localidades_1_7.png" /> FONTIBON<br />\
    <img src="styles/legend/localidades_1_8.png" /> KENNEDY<br />\
    <img src="styles/legend/localidades_1_9.png" /> LOS MARTIRES<br />\
    <img src="styles/legend/localidades_1_10.png" /> PUENTE ARANDA<br />\
    <img src="styles/legend/localidades_1_11.png" /> RAFAEL URIBE URIBE<br />\
    <img src="styles/legend/localidades_1_12.png" /> SAN CRISTOBAL<br />\
    <img src="styles/legend/localidades_1_13.png" /> SANTA FE<br />\
    <img src="styles/legend/localidades_1_14.png" /> SUBA<br />\
    <img src="styles/legend/localidades_1_15.png" /> SUMAPAZ<br />\
    <img src="styles/legend/localidades_1_16.png" /> TEUSAQUILLO<br />\
    <img src="styles/legend/localidades_1_17.png" /> TUNJUELITO<br />\
    <img src="styles/legend/localidades_1_18.png" /> USAQUEN<br />\
    <img src="styles/legend/localidades_1_19.png" /> USME<br />\
    <img src="styles/legend/localidades_1_20.png" /> <br />'
        });

lyr_localidades_0.setVisible(true);lyr_localidades_1.setVisible(false);
var layersList = [baseLayer,lyr_localidades_0,lyr_localidades_1];
lyr_localidades_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'CODIGO_LOC': 'CODIGO_LOC', 'DECRETO': 'DECRETO', 'LINK': 'LINK', 'SIMBOLO': 'SIMBOLO', 'ESCALA_CAP': 'ESCALA_CAP', 'FECHA_CAPT': 'FECHA_CAPT', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_localidades_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'CODIGO_LOC': 'CODIGO_LOC', 'DECRETO': 'DECRETO', 'LINK': 'LINK', 'SIMBOLO': 'SIMBOLO', 'ESCALA_CAP': 'ESCALA_CAP', 'FECHA_CAPT': 'FECHA_CAPT', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_localidades_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'CODIGO_LOC': 'TextEdit', 'DECRETO': 'TextEdit', 'LINK': 'TextEdit', 'SIMBOLO': 'TextEdit', 'ESCALA_CAP': 'TextEdit', 'FECHA_CAPT': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_localidades_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'CODIGO_LOC': 'TextEdit', 'DECRETO': 'TextEdit', 'LINK': 'TextEdit', 'SIMBOLO': 'TextEdit', 'ESCALA_CAP': 'TextEdit', 'FECHA_CAPT': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_localidades_0.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'CODIGO_LOC': 'no label', 'DECRETO': 'no label', 'LINK': 'no label', 'SIMBOLO': 'no label', 'ESCALA_CAP': 'no label', 'FECHA_CAPT': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_localidades_1.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'CODIGO_LOC': 'no label', 'DECRETO': 'no label', 'LINK': 'no label', 'SIMBOLO': 'no label', 'ESCALA_CAP': 'no label', 'FECHA_CAPT': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_localidades_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});