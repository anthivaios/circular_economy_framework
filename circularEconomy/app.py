import os

from flask import Flask, redirect, url_for, render_template, request, send_from_directory
from allTogether import allTogether

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/form", methods=["POST", "GET"])
def form():
    if request.method == "POST":

        data = allTogether(request)
        data.allInitiate(request)

        return render_template("results.html", value=data)
    else:
        return render_template("form2.html")


@app.route("/info")
def info():
    return render_template("info.html")


@app.route("/index")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
