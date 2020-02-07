var API_KEY = 'pk.eyJ1IjoiZGV2aW5iMjAxMCIsImEiOiJjazNxbmplc20wM2lzM2h0MDB4c2gxajdvIn0.m06maUJT2dghLJjgkvKQIw';

function getColor(stock) {
	if (stock.sector == 'BASIC INDUSTRIES') {
		return "#FF0000"
	}
	else if (stock.sector == 'CAPITAL GOODS') {
		return "#FF7F00"
	}
	else if (stock.sector == 'CONSUMER DURABLES') {
		return "#FFFF00"
	}
	else if (stock.sector == 'CONSUMER NON-DURABLES') {
		return "#7FFF00"
	}
	else if (stock.sector == 'CONSUMER SERVICES') {
		return "#00FF00"
	}
	else if (stock.sector == 'ENERGY') {
		return "#00FF7F"
	}
	else if (stock.sector == 'FINANCE') {
		return "#00FFFF"
	}
	else if (stock.sector == 'HEALTH CARE') {
		return "#007FFF"
	}
	else if (stock.sector == 'MISCELLANEOUS') {
		return "#0000FF"
	}
	else if (stock.sector == 'PUBLIC UTILITIES') {
		return "#7F00FF"
	}
	else if (stock.sector == 'TECHNOLOGY') {
		return "#FF00FF"
	}
	else {
		return "#FF007F"
	}
}; 

var markers2000 = [];
var markers2018 = [];

var growth_url = "/top_growth_2000_2018_api";

d3.json(growth_url, function(data) {
	console.log(data);

	for (var i = 0; i < data.length; i++) {
		var year = data[i].date;
		if (year == '2000') {
			var coordinates = [data[i].latitude, data[i].longitude];

			markers2000.push(
				L.circle(coordinates, {
					stroke: false,
					fillOpacity: 0.25,
					color: getColor(data[i]),
					fillColor: getColor(data[i]),
					radius: data[i].yearly_value_change * 750
				})
				.bindPopup(`<h4>${data[i].name}</h4><hr><h5>Ticker: ${data[i].ticker}</h5><h5>Sector: ${data[i].sector}</h5><h5>Stock Value Gain: ${data[i].yearly_value_change}</h5>`)
				)
		}

    else {
      var coordinates = [data[i].latitude, data[i].longitude];
      markers2018.push(
        L.circle(coordinates, {
          stroke: false,
          fillOpacity: 0.25,
          color: getColor(data[i]),
          fillColor: getColor(data[i]),
          radius: data[i].yearly_value_change * 750
        })
        .bindPopup(`<h4>${data[i].name}</h4><hr><h5>Ticker: ${data[i].ticker}</h5><h5>Sector: ${data[i].sector}</h5><h5>Stock Value Gain: ${data[i].yearly_value_change}</h5>`)
    )}
	};

	var light = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.light",
      accessToken: API_KEY
    });

    var dark = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    	attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox.dark",
        accessToken: API_KEY
      });    	
  
    var markerGroup2000 = L.layerGroup(markers2000);
    var markerGroup2018 = L.layerGroup(markers2018); 
  
    var overlayMaps = {
        "2000": markerGroup2000,
        "2018": markerGroup2018
    };

    var baseMaps = {
      "Light": light,
      "Dark": dark
    };

    var overlayMaps = {
      "2000": markerGroup2000,
      "2018": markerGroup2018
    };
  
    var myMap = L.map("map", {
      center: [39.8283, -98.5795],
      zoom: 4,
      layers: [light, markerGroup2000]
    });

    var legend = L.control({position: 'bottomright'});

    L.control.layers(baseMaps, overlayMaps).addTo(myMap);

  });