from flask import Flask, redirect, url_for, render_template, request

from help import get_change, maxPer


class second():
    def __init__(self, req):
        self.reused1 = req.form["reused1"]
        self.reused2 = req.form["reused2"]
        self.reused3 = req.form["reused3"]
        self.reusedPer1 = self.setPer(self.reused2, self.reused1)
        self.reusedPer2 = self.setPer(self.reused3, self.reused2)

        self.remanufactured1 = req.form["remanufactured1"]
        self.remanufactured2 = req.form["remanufactured2"]
        self.remanufactured3 = req.form["remanufactured3"]
        self.remanufacturedPer1 = self.setPer(self.remanufactured2, self.remanufactured1)
        self.remanufacturedPer2 = self.setPer(self.remanufactured3, self.remanufactured2)

        self.recycling1 = req.form["recycling1"]
        self.recycling2 = req.form["recycling2"]
        self.recycling3 = req.form["recycling3"]
        self.recyclingPer1 = self.setPer(self.recycling2, self.recycling1)
        self.recyclingPer2 = self.setPer(self.recycling3, self.recycling2)

        self.eol1 = req.form["eol1"]
        self.eol2 = req.form["eol2"]
        self.eol3 = req.form["eol3"]
        self.eolPer1 = self.setPer(self.eol2, self.eol1)
        self.eolPer2 = self.setPer(self.eol3, self.eol2)

        self.remanufacturedScore = self.setRemanufacturedScore()
        self.re2Score = self.setRe2Score()
        self.eolScore = self.setEolScore()
        self.perList = self.setList()
        self.max = self.setMax()
        self.wasteScore = self.setWasteScore()

    def setPer(self, v2, v1):
        return float(get_change(v2, v1))

    def setMax(self):
        return maxPer(self.perList)

    def setList(self):
        tList = [self.reusedPer1, self.reusedPer2, self.remanufacturedPer1, self.remanufacturedPer2, self.recyclingPer1,
                 self.recyclingPer2, self.eolPer1, self.eolPer2]
        return tList

    def setWasteScore(self):
        return self.getEolScore() + self.getRe2Score() + self.getRemanufacturedScore()

    def getWasteScore(self):
        return self.wasteScore

    def setRemanufacturedScore(self):
        if float(self.remanufactured3) >= 15:
            return 2
        elif float(self.remanufactured3) >= 9:
            return 1
        else:
            return 0

    def setRe2Score(self):
        if float( float(self.reused3) + float(self.recycling3)) >= 85:
            return 2
        elif float(float(self.reused3) + float(self.recycling3)) >= 70:
            return 1
        else:
            return 0

    def setEolScore(self):
        if float(self.eol3) >= 90:
            return 2
        elif float(self.eol3) >= 75:
            return 1
        else:
            return 0

    def getRemanufacturedScore(self):
        return self.remanufacturedScore

    def getRe2Score(self):
        return self.re2Score

    def getEolScore(self):
        return self.eolScore

    def getReused1(self):
        return self.reused1

    def getReused2(self):
        return self.reused2

    def getReused3(self):
        return self.reused3

    def getReusedPer1(self):
        return self.reusedPer1

    def getReusedPer2(self):
        return self.reusedPer2

    def getRemanufactured1(self):
        return self.remanufactured1

    def getRemanufactured2(self):
        return self.remanufactured2

    def getRemanufactured3(self):
        return self.remanufactured3

    def getRemanufacturedPer1(self):
        return self.remanufacturedPer1

    def getRemanufacturedPer2(self):
        return self.remanufacturedPer2

    def getRecycling1(self):
        return self.recycling1

    def getRecycling2(self):
        return self.recycling2

    def getRecycling3(self):
        return self.recycling3

    def getRecyclingPer1(self):
        return self.recyclingPer1

    def getRecyclingPer2(self):
        return self.recyclingPer2

    def getEol1(self):
        return self.eol1

    def getEol2(self):
        return self.eol2

    def getEol3(self):
        return self.eol3

    def getEolPer1(self):
        return self.eolPer1

    def getEolPer2(self):
        return self.eolPer2

    def getMax(self):
        return self.max

    def setMax1(self, value):
        self.max = value