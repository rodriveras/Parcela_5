var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satelite_1 = new ol.layer.Tile({
            'title': 'Satelite',
            'type':'base',
            'opacity': 0.994000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Limite_2 = new ol.format.GeoJSON();
var features_Limite_2 = format_Limite_2.readFeatures(json_Limite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_2.addFeatures(features_Limite_2);
var lyr_Limite_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_2, 
                style: style_Limite_2,
                popuplayertitle: 'Limite',
                interactive: false,
                title: '<img src="styles/legend/Limite_2.png" /> Limite'
            });
var format_Acceso_3 = new ol.format.GeoJSON();
var features_Acceso_3 = format_Acceso_3.readFeatures(json_Acceso_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acceso_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acceso_3.addFeatures(features_Acceso_3);
var lyr_Acceso_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acceso_3, 
                style: style_Acceso_3,
                popuplayertitle: 'Acceso',
                interactive: false,
                title: '<img src="styles/legend/Acceso_3.png" /> Acceso'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Satelite_1.setVisible(true);lyr_Limite_2.setVisible(true);lyr_Acceso_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satelite_1,lyr_Limite_2,lyr_Acceso_3];
lyr_Limite_2.set('fieldAliases', {'id': 'id', });
lyr_Acceso_3.set('fieldAliases', {'ROL': 'ROL', 'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'SHAPE_LENG': 'SHAPE_LENG', 'CARPETAV': 'CARPETAV', 'SHAPE_Le_1': 'SHAPE_Le_1', });
lyr_Limite_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Acceso_3.set('fieldImages', {'ROL': 'TextEdit', 'CODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'CARPETAV': 'TextEdit', 'SHAPE_Le_1': 'TextEdit', });
lyr_Limite_2.set('fieldLabels', {'id': 'no label', });
lyr_Acceso_3.set('fieldLabels', {'ROL': 'no label', 'CODIGO': 'no label', 'NOMBRE': 'no label', 'SHAPE_LENG': 'no label', 'CARPETAV': 'no label', 'SHAPE_Le_1': 'no label', });
lyr_Acceso_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});