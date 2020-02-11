from flask import (
	Flask,
	render_template,
	request,
	redirect,
	jsonify)

from stock_data import *

app = Flask(__name__)

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/form")
def map():
    return render_template("form.html")

@app.route("/trend")
def weather():
    return render_template("trend.html")

@app.route("/tech")
def prediction():
    return render_template("tech.html")

@app.route("/models")
def form():
    return render_template("models.html")

@app.route("/regression")
def regression():
	return render_template("regression.html")

@app.route("/sentiment")
def sentiment():
	return render_template("sentiment.html")

@app.route("/send", methods=["GET","POST"])
def send():
	if request.method=="POST":
		return redirect('/')

	return render_template("form.html")

@app.route("/historical_sector_api")
def sector():
	api_data = df.to_dict(orient='records')	
	return jsonify(api_data)

@app.route("/top_growth_2000_2018_api")
def year_2000():
	stock_growth_data = []
	cols = ['data_2000', 'data_2018']

	for collection in cols:
		for row in db[collection].find({}, {'_id': 0}):
			stock_growth_data.append(row)

	return jsonify(stock_growth_data)

@app.route("/aapl_five_regression")
def five_regression():
	five_regression_data = []
	for row in db['aapl_five_regression'].find({}, {'_id': 0}):
		five_regression_data.append(row)

	return jsonify(five_regression_data)

@app.route("/aapl_ten_regression")
def ten_regression():
	ten_regression_data = []
	for row in db['aapl_ten_regression'].find({}, {'_id': 0}):
		ten_regression_data.append(row)

	return jsonify(ten_regression_data)

@app.route("/aapl_five_mvavg")
def five_mvavg():
	five_mvavg_data = []
	for row in db['aapl_five_mvavg'].find({}, {'_id': 0}):
		five_mvavg_data.append(row)

	return jsonify(five_mvavg_data)

@app.route("/aapl_ten_mvavg")
def ten_mvavg():
	ten_mvavg_data = []
	for row in db['aapl_ten_mvavg'].find({}, {'_id': 0}):
		ten_mvavg_data.append(row)

	return jsonify(ten_mvavg_data)

if __name__ == '__main__':
	app.run(debug=True)