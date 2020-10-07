from flask import Flask, redirect, url_for, render_template, request

from help import get_change, maxPer


class third():
    def __init__(self, req):
        self.sec1 = req.form["sec1"]
        self.sec2 = req.form["sec2"]
        self.sec3 = req.form["sec3"]
        self.secPer1 = self.setPer(self.sec2, self.sec1)
        self.secPer2 = self.setPer(self.sec3, self.sec2)

        self.feed1 = req.form["feed1"]
        self.feed2 = req.form["feed2"]
        self.feed3 = req.form["feed3"]
        self.feedPer1 = self.setPer(self.feed2, self.feed1)
        self.feedPer2 = self.setPer(self.feed3, self.feed2)

        self.secScore = self.setSecScore()
        self.perList = self.setList()
        self.max = self.setMax()
        self.secondaryScore = self.setSecondaryScore()

    def setPer(self, v2, v1):
        return float(get_change(v2, v1))

    def setMax(self):
        return maxPer(self.perList)

    def setList(self):
        tList = [self.secPer1, self.secPer2, self.feedPer1, self.feedPer2]
        return tList

    def setSecondaryScore(self):
        return self.getSecScore()

    def getSecondaryScore(self):
        return self.secondaryScore

    def setSecScore(self):
        if float(self.sec3) >= 40:
            return 2
        elif float(self.sec3) >= 30:
            return 1
        else:
            return 0

    def getSecScore(self):
        return self.secScore

    def getSec1(self):
        return self.sec1

    def getSec2(self):
        return self.sec2

    def getSec3(self):
        return self.sec3

    def getSecPer1(self):
        return self.secPer1

    def getSecPer2(self):
        return self.secPer2

    def getFeed1(self):
        return self.feed1

    def getFeed2(self):
        return self.feed2

    def getFeed3(self):
        return self.feed3

    def getFeedPer1(self):
        return self.feedPer1

    def getFeedPer2(self):
        return self.feedPer2

    def getMax(self):
        return self.max
