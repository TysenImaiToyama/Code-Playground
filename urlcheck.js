const axios = require('axios');

var url = 'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/30';

function GetReq(url) {
    axios(url)
        .then(function (res){
            console.log(res.config.url);
            console.log(res.status);
        })
        .catch(err => console.log(err));
}

const urls = [
    'https://mapdata.lasvegasnevada.gov/clvgis/rest/services/Transportation/CLV_ROADS/MapServer',
    'https://maps.commerce.alaska.gov/arcgis/rest/services/Services/CDO_Utilities/MapServer/38',
    'https://apps.douglas.co.us/geopendata/rest/services/CapitalImprovements/Roadway_Impacts_ALL/MapServer',
    'https://apps.douglas.co.us/geopendata/rest/services/Parcels/TaxDistricts/MapServer',
    'https://services2.arcgis.com/1UvBaQ5y1ubjUPmd/ArcGIS/rest/services/ROW_Moratoriums/FeatureServer/0',
    'https://services1.arcgis.com/IL17xsvNU5Bmw3RY/ArcGIS/rest/services/Pueblo_City_Urban_Renewal_Areas/FeatureServer/1',
    'https://arcgis.atlantaregional.com/arcgis/rest/services/S16u/MapServer/1',
    'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer/30'
]

for (i = 0; i < urls.length; i++){
    GetReq(urls[i]);
}