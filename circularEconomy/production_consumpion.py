from flask import Flask, redirect, url_for, render_template, request

from help import get_change, maxPer


class first:
    def __init__(self, req):

        self.rec1 = req.form["rec1"]
        self.rec2 = req.form["rec2"]
        self.rec3 = req.form["rec3"]
        self.recPer1 = self.setPer(self.rec2, self.rec1)
        self.recPer2 = self.setPer(self.rec3, self.rec2)

        self.disassembly1 = req.form["disassembly1"]
        self.disassembly2 = req.form["disassembly2"]
        self.disassembly3 = req.form["disassembly3"]
        self.disassemblyPer1 = self.setPer(self.disassembly2, self.disassembly1)
        self.disassemblyPer2 = self.setPer(self.disassembly3, self.disassembly2)

        self.energy1 = req.form["energy1"]
        self.energy2 = req.form["energy2"]
        self.energy3 = req.form["energy3"]
        self.energyPer1 = self.setPer(self.energy2, self.energy1)
        self.energyPer2 = self.setPer(self.energy3, self.energy2)

        self.co21 = req.form["co2-1"]
        self.co22 = req.form["co2-2"]
        self.co23 = req.form["co2-3"]
        self.co2Per1 = self.setPer(self.co22, self.co21)
        self.co2Per2 = self.setPer(self.co23, self.co22)

        self.loss1 = req.form["loss1"]
        self.loss2 = req.form["loss2"]
        self.loss3 = req.form["loss3"]
        self.lossPer1 = self.setPer(self.loss2, self.loss1)
        self.lossPer2 = self.setPer(self.loss3, self.loss2)

        self.water1 = req.form["water1"]
        self.water2 = req.form["water2"]
        self.water3 = req.form["water3"]
        self.waterPer1 = self.setPer(self.water2, self.water1)
        self.waterPer2 = self.setPer(self.water3, self.water2)

        self.parts1 = req.form["parts1"]
        self.parts2 = req.form["parts2"]
        self.parts3 = req.form["parts3"]
        self.partsPer1 = self.setPer(self.parts2, self.parts1)
        self.partsPer2 = self.setPer(self.parts3, self.parts2)

        self.check1 = req.form["check1"]
        self.check2 = req.form["check2"]
        self.check3 = req.form["check3"]
        self.checkPer1 = self.setPer(self.check2, self.check1)
        self.checkPer2 = self.setPer(self.check3, self.check2)

        self.recScore = self.setRecScore()
        self.disassemblyScore = self.setDisassemblyScore()
        self.energyScore = self.setEnergyScore()
        self.co2Score = self.setCo2Score()
        self.waterScore = self.setWaterScore()
        self.checkScore = self.setCheckScore()
        self.perList = self.setList()
        self.max = self.setMax()
        self.productionScore = self.setProductionScore()

    def setPer(self, v2, v1):
        return float(get_change(v2, v1))

    def setMax(self):
        return maxPer(self.perList)

    def setList(self):
        tList = [self.recPer1, self.recPer2, self.disassemblyPer1, self.disassemblyPer2, self.energyPer1,
                 self.energyPer2, self.co2Per1, self.co2Per2, self.lossPer1, self.lossPer2, self.waterPer1,
                 self.waterPer2, self.partsPer1, self.partsPer2, self.checkPer1, self.checkPer2]
        return tList

    def setProductionScore(self):
        return self.getRecScore() + self.getCheckScore() + self.getCo2Score() + self.getDisassemblyScore() + self.getEnergyScore() + self.getWaterScore()

    def getProductionScore(self):
        return self.productionScore

    def setRecScore(self):
        if float(self.rec3) >= 40:
            return 2
        elif float(self.rec3) >= 30:
            return 1
        else:
            return 0

    def setDisassemblyScore(self):
        if float(self.disassembly3) <= 7:
            return 2
        elif float(self.disassembly3) <= 16:
            return 1
        else:
            return 0

    def setEnergyScore(self):
        if float(self.energy3) <= 2:
            return 2
        elif float(self.energy3) <= 2.4:
            return 1
        else:
            return 0

    def setCo2Score(self):
        if float(self.co23) <= 0.5:
            return 2
        elif float(self.co23) <= 0.7:
            return 1
        else:
            return 0

    def setWaterScore(self):
        if float(self.water3) <= 130:
            return 2
        elif float(self.water3) <= 145:
            return 1
        else:
            return 0

    def setCheckScore(self):
        if float(self.check3) >= 90:
            return 2
        elif float(self.check3) >= 60:
            return 1
        else:
            return 0

    def getRecScore(self):
        return self.recScore

    def getDisassemblyScore(self):
        return self.disassemblyScore

    def getEnergyScore(self):
        return self.energyScore

    def getCo2Score(self):
        return self.co2Score

    def getWaterScore(self):
        return self.waterScore

    def getCheckScore(self):
        return self.checkScore

    def getRec1(self):
        return self.rec1

    def getRec2(self):
        return self.rec2

    def getRec3(self):
        return self.rec3

    def getRecPer1(self):
        return self.recPer1

    def getRecPer2(self):
        return self.recPer2

    def getDisassembly1(self):
        return self.disassembly1

    def getDisassembly2(self):
        return self.disassembly2

    def getDisassembly3(self):
        return self.disassembly3

    def getDisassemblyPer1(self):
        return self.disassemblyPer1

    def getDisassemblyPer2(self):
        return self.disassemblyPer2

    def getEnergy1(self):
        return self.energy1

    def getEnergy2(self):
        return self.energy2

    def getEnergy3(self):
        return self.energy3

    def getEnergyPer1(self):
        return self.energyPer1

    def getEnergyPer2(self):
        return self.energyPer2

    def getCo21(self):
        return self.co21

    def getCo22(self):
        return self.co22

    def getCo23(self):
        return self.co23

    def getCo2Per1(self):
        return self.co2Per1

    def getCo2Per2(self):
        return self.co2Per2

    def getLoss1(self):
        return self.loss1

    def getLoss2(self):
        return self.loss2

    def getLoss3(self):
        return self.loss3

    def getLossPer1(self):
        return self.lossPer1

    def getLossPer2(self):
        return self.lossPer2

    def getWater1(self):
        return self.water1

    def getWater2(self):
        return self.water2

    def getWater3(self):
        return self.water3

    def getWaterPer1(self):
        return self.waterPer1

    def getWaterPer2(self):
        return self.waterPer2

    def getParts1(self):
        return self.parts1

    def getParts2(self):
        return self.parts2

    def getParts3(self):
        return self.parts3

    def getPartsPer1(self):
        return self.partsPer1

    def getPartsPer2(self):
        return self.partsPer2

    def getCheck1(self):
        return self.check1

    def getCheck2(self):
        return self.check2

    def getCheck3(self):
        return self.check3

    def getCheckPer1(self):
        return self.checkPer1

    def getCheckPer2(self):
        return self.checkPer2

    def getMax(self):
        return self.max

    def setMax1(self, value):
        self.max = value
