from flask import Flask, redirect, url_for, render_template, request
from production_consumpion import first
from research_development import forth
from secondary_materials import third
from waste_management import second


class allTogether:
    def __init__(self, req):
        self.year1 = 0
        self.year2 = 0
        self.year3 = 0
        self.first = type(None)()
        self.second = type(None)()
        self.forth = type(None)()
        self.third = type(None)()
        self.totalScore = 0
        self.totalScore100 = 0

    def setYear1(self, req):
        self.year1 = req.form['year1']

    def setYear2(self, req):
        self.year2 = req.form['year2']

    def setYear3(self, req):
        self.year3 = req.form['year3']

    def getYear1(self):
        return self.year1

    def getYear2(self):
        return self.year2

    def getYear3(self):
        return self.year3

    def setFirst(self, req):
        self.first = first(req)

    def setSecond(self, req):
        self.second = second(req)

    def setThird(self, req):
        self.third = third(req)

    def setForth(self, req):
        self.forth = forth(req)

    def getFirst(self):
        return self.first

    def getSecond(self):
        return self.second

    def getThird(self):
        return self.third

    def getForth(self):
        return self.forth

    def setTotalScore(self):
        self.totalScore = self.getFirst().getProductionScore() + self.getSecond().getWasteScore() + self.getThird().getSecondaryScore()

    def getTotalScore(self):
        return self.totalScore

    def setTotalScore100(self):
        self.totalScore100 = self.totalScore * 5

    def getTotalScore100(self):
        return self.totalScore100

    def allInitiate(self, req):
        self.setYear1(req)
        self.setYear2(req)
        self.setYear3(req)
        self.setFirst(req)
        self.setSecond(req)
        self.setThird(req)
        self.setForth(req)
        self.setTotalScore()
        self.setTotalScore100()
