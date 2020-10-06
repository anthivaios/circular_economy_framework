from flask import Flask, redirect, url_for, render_template, request

from help import get_change, maxPer


class forth:
    def __init__(self):
        self.jobs1 = request.form["jobs1"]
        self.jobs2 = request.form["jobs2"]
        self.jobs3 = request.form["jobs3"]
        self.jobsPer1 = float(get_change(self.jobs2, self.jobs1))
        self.jobsPer2 = float(get_change(self.jobs3, self.jobs2))

        self.perList = [self.jobsPer1]
        self.perList.append(self.jobsPer2)

        self.project1 = request.form["project1"]
        self.project2 = request.form["project2"]
        self.project3 = request.form["project3"]
        self.projectPer1 = float(get_change(self.project2, self.project1))
        self.projectPer2 = float(get_change(self.project3, self.project2))

        self.perList.append(self.projectPer1)
        self.perList.append(self.projectPer2)

        self.capital1 = request.form["capital1"]
        self.capital2 = request.form["capital2"]
        self.capital3 = request.form["capital3"]
        self.capitalPer1 = float(get_change(self.capital2, self.capital1))
        self.capitalPer2 = float(get_change(self.capital3, self.capital2))

        self.perList.append(self.capitalPer1)
        self.perList.append(self.capitalPer2)

        self.max = maxPer(self.perList)


def getForth():
    return forth()
