from flask import Flask, redirect, url_for, render_template, request

from allTogether import getAll
from production_consumpion import getFirst
from research_development import getForth
from secondary_materials import getThird
from waste_management import getSecond

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/form", methods=["POST", "GET"])
def form():
    if request.method == "POST":
        year1 = request.form["year1"]
        year2 = request.form["year2"]
        year3 = request.form["year3"]
        data = getAll(int(year1), int(year2), int(year3))
        print(data.totalScore)

        return render_template("results.html", value = data)
    else:
        return render_template("form.html")




@app.route("/index")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
