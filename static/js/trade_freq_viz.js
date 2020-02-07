var url = "/historical_sector_api";

d3.json(url, function(data) {
	var date = data.map(row => row.date);

	var tech = data.map(row => row['TECHNOLOGY MOVE-AVG']);
	var basic = data.map(row => row['BASIC INDUSTRIES MOVE-AVG']);
	var health = data.map(row => row['HEALTH CARE MOVE-AVG']);
	var durables = data.map(row => row['CONSUMER DURABLES MOVE-AVG']);
	var services = data.map(row => row['CONSUMER SERVICES MOVE-AVG']);
	var energy = data.map(row => row['ENERGY MOVE-AVG']);
	var misc = data.map(row => row['MISCELLANEOUS MOVE-AVG']);
	var fin = data.map(row => row['FINANCE MOVE-AVG']);
	var nonDurables = data.map(row => row['CONSUMER NON-DURABLES MOVE-AVG']);
	var goods = data.map(row => row['CAPITAL GOODS MOVE-AVG']);
	var utilities = data.map(row => row['PUBLIC UTILITIES MOVE-AVG']);
	var transportation = data.map(row => row['TRANSPORTATION MOVE-AVG']);

	var trace1 = {
		x: date,
		y: tech,
		type: "scatter", 
		name: "Technology"
	};

	var trace2 = {
		x: date,
		y: basic,
		type: "scatter",
		name: "Basic Industries"
	};

	var trace3 = {
		x: date,
		y: health,
		type: "scatter",
		name: "Health Care"
	};
	
	var trace4 = {
		x: date,
		y: durables, 
		type: "scatter",
		name: "Consumer Durables"
	};

	var trace5 = {
		x: date,
		y: services,
		type: "scatter",
		name: "Consumer Services"
	};

	var trace6 = {
		x: date,
		y: energy,
		type: "scatter",
		name: "Energy"
	};

	var trace7 = {
		x: date,
		y: misc,
		type: "scatter", 
		name: "Miscellaneous"
	};

	var trace8 = {
		x: date,
		y: fin,
		type: "scatter",
		name: "Finance"
	};

	var trace9 = {
		x: date,
		y: nonDurables,
		type: "scatter",
		name: "Consumer Non-Durables"
	};

	var trace10 = {
		x: date,
		y: goods,
		type: "scatter",
		name: "Capital Goods"
	};

	var trace11 = {
		x: date,
		y: utilities,
		type: "scatter",
		name: "Public Utilities"
	};

	var trace12 = {
		x: date,
		y: transportation,
		type: "scatter", 
		name: "Transportation"
	};
	
	var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12];
	var layout = {
			title: "Stock Trading Frequency 2000 - 2018", 
			xaxis: { title: "Year"},
			yaxis: { title: "Stock Trading Volume Moving Average"}
			// font: {
			//     family: 'Courier New, monospace',
			//     size: 10,
			//     color: '#7f7f7f'
			// 	}
			};
	Plotly.newPlot("plot", data, layout);
});