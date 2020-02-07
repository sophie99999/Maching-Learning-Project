import pandas as pd
from pymongo import MongoClient

#Dataframe containing the 63 day moving average of each stock market sector
df = pd.read_csv('./svm.csv')

#Read from MongoDB and store "stocks" database connection in db
client = MongoClient('mongodb://localhost:27017/')
db = client.stocks