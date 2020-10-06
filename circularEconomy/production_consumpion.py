from flask import Flask, redirect, url_for, render_template, request

from help import get_change, maxPer


class first:
    def __init__(self):
        self.rec1 = request.form["rec1"]
        self.rec2 = request.form["rec2"]
        self.rec3 = request.form["rec3"]
        self.recPer1 = float(get_change(self.rec2, self.rec1))
        self.recPer2 = float(get_change(self.rec3, self.rec2))
        if float(self.rec3) >= 40:
            self.recScore = 2
        elif float(self.rec3) >= 30:
            self.recScore = 1
        else:
            self.recScore = 0
        self.perList = [self.recPer1]
        self.perList.append(self.recPer2)

        self.disassembly1 = request.form["disassembly1"]
        self.disassembly2 = request.form["disassembly2"]
        self.disassembly3 = request.form["disassembly3"]
        self.disassemblyPer1 = float(get_change(self.disassembly2, self.disassembly1))
        self.disassemblyPer2 = float(get_change(self.disassembly3, self.disassembly2))
        if float(self.disassembly3) <= 7:
            self.disassemblyScore = 2
        elif float(self.disassembly3) <= 16:
            self.disassemblyScore = 1
        else:
            self.disassemblyScore = 0

        self.perList.append(self.disassemblyPer1)
        self.perList.append(self.disassemblyPer2)

        self.energy1 = request.form["energy1"]
        self.energy2 = request.form["energy2"]
        self.energy3 = request.form["energy3"]
        self.energyPer1 = float(get_change(self.energy2, self.energy1))
        self.energyPer2 = float(get_change(self.energy3, self.energy2))
        if float(self.energy3) <= 2:
            self.energyScore = 2
        elif float(self.energy3) <= 2.4:
            self.energyScore = 1
        else:
            self.energyScore = 0

        self.perList.append(self.energyPer1)
        self.perList.append(self.energyPer2)

        self.co21 = request.form["co2-1"]
        self.co22 = request.form["co2-2"]
        self.co23 = request.form["co2-3"]
        self.co2Per1 = float(get_change(self.co22, self.co21))
        self.co2Per2 = float(get_change(self.co23, self.co22))
        if float(self.co23) <= 0.5:
            self.co2Score = 2
        elif float(self.co23) <= 0.7:
            self.co2Score = 1
        else:
            self.co2Score = 0

        self.perList.append(self.co2Per1)
        self.perList.append(self.co2Per2)

        self.loss1 = request.form["loss1"]
        self.loss2 = request.form["loss2"]
        self.loss3 = request.form["loss3"]
        self.lossPer1 = float(get_change(self.loss2, self.loss1))
        self.lossPer2 = float(get_change(self.loss3, self.loss2))

        self.perList.append(self.lossPer1)
        self.perList.append(self.lossPer2)

        self.water1 = request.form["water1"]
        self.water2 = request.form["water2"]
        self.water3 = request.form["water3"]
        self.waterPer1 = float(get_change(self.water2, self.water1))
        self.waterPer2 = float(get_change(self.water3, self.water2))
        if float(self.water3) <= 130:
            self.waterScore = 2
        elif float(self.water3) <= 145:
            self.waterScore = 1
        else:
            self.waterScore = 0

        self.perList.append(self.waterPer1)
        self.perList.append(self.waterPer2)

        self.parts1 = request.form["parts1"]
        self.parts2 = request.form["parts2"]
        self.parts3 = request.form["parts3"]
        self.partsPer1 = float(get_change(self.parts2, self.parts1))
        self.partsPer2 = float(get_change(self.parts3, self.parts2))
        self.perList.append(self.partsPer1)
        self.perList.append(self.partsPer2)

        self.check1 = request.form["check1"]
        self.check2 = request.form["check2"]
        self.check3 = request.form["check3"]
        self.checkPer1 = float(get_change(self.check2, self.check1))
        self.checkPer2 = float(get_change(self.check3, self.check2))
        if float(self.check3) >= 90:
            self.checkScore = 2
        elif float(self.check3) >= 60:
            self.checkScore = 1
        else:
            self.checkScore = 0

        self.perList.append(self.checkPer1)
        self.perList.append(self.checkPer2)

        self.productionScore = self.checkScore + self.waterScore + self.co2Score + self.energyScore + self.disassemblyScore + self.recScore

        self.max = maxPer(self.perList)


def getFirst():
    return first()
