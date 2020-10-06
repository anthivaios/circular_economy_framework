from flask import Flask, redirect, url_for, render_template, request

from help import get_change, maxPer


class second:
    def __init__(self):
        self.reused1 = request.form["reused1"]
        self.reused2 = request.form["reused2"]
        self.reused3 = request.form["reused3"]
        self.reusedPer1 = float(get_change(self.reused2, self.reused1))
        self.reusedPer2 = float(get_change(self.reused3, self.reused2))
        self.perList = [self.reusedPer1]
        self.perList.append(self.reusedPer2)

        self.remanufactured1 = request.form["remanufactured1"]
        self.remanufactured2 = request.form["remanufactured2"]
        self.remanufactured3 = request.form["remanufactured3"]
        self.remanufacturedPer1 = float(get_change(self.remanufactured2, self.remanufactured1))
        self.remanufacturedPer2 = float(get_change(self.remanufactured3, self.remanufactured2))
        if float(self.remanufactured3) >= 15:
            self.remanufacturedScore = 2
        elif float(self.remanufactured3) >= 9:
            self.remanufacturedScore = 1
        else:
            self.remanufacturedScore = 0

        self.perList.append(self.remanufacturedPer1)
        self.perList.append(self.remanufacturedPer2)

        self.recycling1 = request.form["recycling1"]
        self.recycling2 = request.form["recycling2"]
        self.recycling3 = request.form["recycling3"]
        self.recyclingPer1 = float(get_change(self.recycling2, self.recycling1))
        self.recyclingPer2 = float(get_change(self.recycling3, self.recycling2))
        if float(self.reused3 + self.recycling3) >= 85:
            self.re2Score = 2
        elif float(self.reused3 + self.recycling3) >= 70:
            self.re2Score = 1
        else:
            self.re2Score = 0

        self.perList.append(self.recyclingPer1)
        self.perList.append(self.recyclingPer2)

        self.eol1 = request.form["eol1"]
        self.eol2 = request.form["eol2"]
        self.eol3 = request.form["eol3"]
        self.eolPer1 = float(get_change(self.eol2, self.eol1))
        self.eolPer2 = float(get_change(self.eol3, self.eol2))
        if float(self.eol3) >= 90:
            self.eolScore = 2
        elif float(self.eol3) >= 75:
            self.eolScore = 1
        else:
            self.eolScore = 0

        self.perList.append(self.eolPer1)
        self.perList.append(self.eolPer2)

        self.wasteScore = self.eolScore + self.re2Score + self.remanufacturedScore
        print(self.perList)
        self.max = maxPer(self.perList)


def getSecond():
    return second()
