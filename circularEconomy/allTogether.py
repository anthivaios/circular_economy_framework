
from production_consumpion import getFirst
from research_development import getForth
from secondary_materials import getThird
from waste_management import getSecond


class allTogether:
    def __init__(self):
        self.first = getFirst()
        self.second = getSecond()
        self.forth = getForth()
        self.third = getThird()
        self.totalScore = self.first.productionScore + self.second.wasteScore + self.third.secondaryScore
        self.totalScore100 = self.totalScore * 5


def getAll(y1, y2, y3):
    allTogether.year1 = y1
    allTogether.year2 = y2
    allTogether.year3 = y3
    return allTogether()