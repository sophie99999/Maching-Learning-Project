var five_regression_url = "/aapl_five_regression";
var ten_regression_url = "/aapl_ten_regression";
var five_mvavg_url = "/aapl_five_mvavg";
var ten_mvavg_url = "/aapl_ten_mvavg";

d3.json(five_regression_url, function(data) {
	var training_data = [];
	var test_data = [];

	for (var i = 0; i < data.length; i++) {
		if (data[i].set == 'training') {
			training_data.push(data[i]);
		}
		else {
			test_data.push(data[i]);
		}
	}

	var training_date = training_data.map(row => row.date);
	var training_close = training_data.map(row => row.adj_close); 

	var trace1 = {
		x: training_date,
		y: training_close,
		type: "scatter", 
		name: "Training"
	};

	var test_date = test_data.map(row => row.date);
	var test_close = test_data.map(row => row.adj_close);
	var test_pred = test_data.map(row => row.pred); 

	var trace2 = {
		x: test_date,
		y: test_close,
		type: "scatter",
		name: "Test"
	};

	var trace3 = {
		x: test_date,
		y: test_pred,
		type: "scatter",
		name: "Prediction"
	};

	var data = [trace1, trace2, trace3];

	var layout = {
		title: "Apple Five Year Linear Regression", 
			xaxis: { title: "Year"},
			yaxis: { title: "Adjusted Closing Price"}		
	};

	Plotly.newPlot("five_regression_plot", data, layout);
});

d3.json(five_mvavg_url, function(data) {
	var training_data = [];
	var test_data = [];

	for (var i = 0; i < data.length; i++) {
		if (data[i].set == 'training') {
			training_data.push(data[i]);
		}
		else {
			test_data.push(data[i]);
		}
	}

	var training_date = training_data.map(row => row.date);
	var training_close = training_data.map(row => row.adj_close); 

	var trace1 = {
		x: training_date,
		y: training_close,
		type: "scatter", 
		name: "Training"
	};

	var test_date = test_data.map(row => row.date);
	var test_close = test_data.map(row => row.adj_close);
	var test_pred = test_data.map(row => row.pred); 

	var trace2 = {
		x: test_date,
		y: test_close,
		type: "scatter",
		name: "Test"
	};

	var trace3 = {
		x: test_date,
		y: test_pred,
		type: "scatter",
		name: "Prediction"
	};

	var data = [trace1, trace2, trace3];

	var layout = {
		title: "Apple Five Year Moving Average", 
			xaxis: { title: "Year"},
			yaxis: { title: "Adjusted Closing Price"}		
	};

	Plotly.newPlot("five_mvavg_plot", data, layout);
});

d3.json(ten_regression_url, function(data) {
	var training_data = [];
	var test_data = [];

	for (var i = 0; i < data.length; i++) {
		if (data[i].set == 'training') {
			training_data.push(data[i]);
		}
		else {
			test_data.push(data[i]);
		}
	}

	var training_date = training_data.map(row => row.date);
	var training_close = training_data.map(row => row.adj_close); 

	var trace1 = {
		x: training_date,
		y: training_close,
		type: "scatter", 
		name: "Training"
	};

	var test_date = test_data.map(row => row.date);
	var test_close = test_data.map(row => row.adj_close);
	var test_pred = test_data.map(row => row.pred); 

	var trace2 = {
		x: test_date,
		y: test_close,
		type: "scatter",
		name: "Test"
	};

	var trace3 = {
		x: test_date,
		y: test_pred,
		type: "scatter",
		name: "Prediction"
	};

	var data = [trace1, trace2, trace3];

	var layout = {
		title: "Apple Ten Year Linear Regression", 
			xaxis: { title: "Year"},
			yaxis: { title: "Adjusted Closing Price"}		
	};

	Plotly.newPlot("ten_regression_plot", data, layout);
});

d3.json(ten_mvavg_url, function(data) {
	var training_data = [];
	var test_data = [];

	for (var i = 0; i < data.length; i++) {
		if (data[i].set == 'training') {
			training_data.push(data[i]);
		}
		else {
			test_data.push(data[i]);
		}
	}

	var training_date = training_data.map(row => row.date);
	var training_close = training_data.map(row => row.adj_close); 

	var trace1 = {
		x: training_date,
		y: training_close,
		type: "scatter", 
		name: "Training"
	};

	var test_date = test_data.map(row => row.date);
	var test_close = test_data.map(row => row.adj_close);
	var test_pred = test_data.map(row => row.pred); 

	var trace2 = {
		x: test_date,
		y: test_close,
		type: "scatter",
		name: "Test"
	};

	var trace3 = {
		x: test_date,
		y: test_pred,
		type: "scatter",
		name: "Prediction"
	};

	var data = [trace1, trace2, trace3];

	var layout = {
		title: "Apple Ten Year Moving Average", 
			xaxis: { title: "Year"},
			yaxis: { title: "Adjusted Closing Price"}		
	};

	Plotly.newPlot("ten_mvavg_plot", data, layout);
});