from flask import Flask, render_template
from logging import debug
from flask_pymongo import PyMongo
from werkzeug.utils import redirect

app = Flask(__name__)

mongo = PyMongo(app, uri="mongodb://localhost:27017/city_weather_db")

@app.route('/')

def home():
    return render_template('index.html')
    

if __name__ == '__main__':
    app.run(debug=True)