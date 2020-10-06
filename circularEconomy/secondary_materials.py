from flask import Flask, redirect, url_for, render_template, request

from help import get_change, maxPer


class third:
    def __init__(self):
        self.sec1 = request.form["sec1"]
        self.sec2 = request.form["sec2"]
        self.sec3 = request.form["sec3"]
        self.secPer1 = float(get_change(self.sec2, self.sec1))
        self.secPer2 = float(get_change(self.sec3, self.sec2))
        if float(self.sec3) >= 40:
            self.secScore = 2
        elif float(self.sec3) >= 30:
            self.secScore = 1
        else:
            self.secScore = 0

        self.perList = [self.secPer1]
        self.perList.append(self.secPer2)

        self.feed1 = request.form["feed1"]
        self.feed2 = request.form["feed2"]
        self.feed3 = request.form["feed3"]
        self.feedPer1 = float(get_change(self.feed2, self.feed1))
        self.feedPer2 = float(get_change(self.feed3, self.feed2))

        self.perList.append(self.feedPer1)
        self.perList.append(self.feedPer2)

        self.secondaryScore = self.secScore

        self.max = maxPer(self.perList)


def getThird():
    return third()
