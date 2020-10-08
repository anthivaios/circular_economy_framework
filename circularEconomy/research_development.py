from flask import Flask, redirect, url_for, render_template, request

from help import get_change, maxPer


class forth():
    def __init__(self, req):
        self.jobs1 = req.form["jobs1"]
        self.jobs2 = req.form["jobs2"]
        self.jobs3 = req.form["jobs3"]
        self.jobsPer1 = self.setPer(self.jobs2, self.jobs1)
        self.jobsPer2 = self.setPer(self.jobs3, self.jobs2)

        self.project1 = req.form["project1"]
        self.project2 = req.form["project2"]
        self.project3 = req.form["project3"]
        self.projectPer1 = self.setPer(self.project2, self.project1)
        self.projectPer2 = self.setPer(self.project3, self.project2)

        self.capital1 = req.form["capital1"]
        self.capital2 = req.form["capital2"]
        self.capital3 = req.form["capital3"]
        self.capitalPer1 = self.setPer(self.capital2, self.capital1)
        self.capitalPer2 = self.setPer(self.capital3, self.capital2)

        self.perList = self.setList()
        self.max = self.setMax()

    def setPer(self, v2, v1):
        return float(get_change(v2, v1))

    def setMax(self):
        return maxPer(self.perList)

    def setList(self):
        tList = [self.jobsPer1, self.jobsPer2, self.projectPer1, self.projectPer2, self.capitalPer1, self.capitalPer2]
        return tList

    def getJobs1(self):
        return self.jobs1

    def getJobs2(self):
        return self.jobs2

    def getJobs3(self):
        return self.jobs3

    def getJobsPer1(self):
        return self.jobsPer1

    def getJobsPer2(self):
        return self.jobsPer2

    def getProject1(self):
        return self.project1

    def getProject2(self):
        return self.project2

    def getProject3(self):
        return self.project3

    def getProjectPer1(self):
        return self.projectPer1

    def getProjectPer2(self):
        return self.projectPer2

    def getCapital1(self):
        return self.capital1

    def getCapital2(self):
        return self.capital2

    def getCapital3(self):
        return self.capital3

    def getCapitalPer1(self):
        return self.capitalPer1

    def getCapitalPer2(self):
        return self.capitalPer2

    def getMax(self):
        return self.max
