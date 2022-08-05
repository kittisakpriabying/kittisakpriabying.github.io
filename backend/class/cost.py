
from abc import abstractmethod

class Cost:
    def __init__(self):
        # DriverFixedCostPerDay
        self.__skillCost = 0
        self.__providentFund = 0
        self.__noAccidentCost = 0
        self.__overtimeWage = 0
        self.__socialSecurity = 0
        self.__retirementCost = 0
        self.__welfareCost = 0
        self.__bonusCost = 0
        #TruckFixedCostPerDay
        self.__saiStay = 0
        self.__splicePlate = 0
        self.__canvasCost = 0
        self.__insurance = 0
        self.__vehicleDepreciation = 0
        self.__repairCost = 0
        self.__tireCost = 0
        self.__tax = 0
        #VariableCost
        self.__allowance1stDriverCost = 0
        self.__allowance2ndDriverCost = 0
        self.__incentiveCost = 0
        self.__fuelCost = 0
        
    def setSkillCost(self, skillCost):
        self.__skillCost = skillCost
    def setProvidentFund(self, providentfund):
        self.__providentFund = providentfund
    def setNoAccidentCost(self, noAccidentCost):
        self.__noAccidentCost = noAccidentCost
    def setOvertimeWage(self, overtimeWage):
        self.__overtimeWage = overtimeWage
    def setSocialSecurity(self, socialSecurity):
        self.__socialSecurity = socialSecurity
    def setRetirementCost(self, retirementCost):
        self.__retirementCost = retirementCost
    def setWelfareCost(self, welfareCost):
        self.__welfareCost = welfareCost
    def setBonusCost(self, bonusCost):
        self.__bonusCost = bonusCost
    def setSaiStay(self, saiStay):
        self.__saiStay = saiStay
    def setSplicePlate(self, splicePlate):
        self.__splicePlate = splicePlate
    def setCanvasCost(self, canvasCost):
        self.__canvasCost = canvasCost
    def setInsurance(self, insurance):
        self.__insurance = insurance
    def setVehicleDepreciation(self, vehicleDepreciation):
        self.__vehicleDepreciation = vehicleDepreciation
    def setRepairCost(self, repairCost):
        self.__repairCost = repairCost
    def setTireCost(self, tireCost):
        self.__tireCost = tireCost 
    def setTax(self, tax):
        self.__tax = tax
        
    def setAllowance1stDriverCost(self, allowance1stDriverCost):
        self.__allowance1stDriverCost = allowance1stDriverCost
    def setAllowance2ndDriverCost(self, allowance2ndDriverCost):
        self.__allowance2ndDriverCost = allowance2ndDriverCost
    def setIncentiveCost(self, incentiveCost):
        self.__incentiveCost = incentiveCost
    def setFuelCost(self, fuelCost):
        self.__fuelCost = fuelCost
    
    def getVaribleCost(self):
        return self.__allowance1stDriverCost + self.__allowance2ndDriverCost + self.__incentiveCost + self.__fuelCost
    def getTotalDriverFixedCost(self):
        return self.__skillCost + self.__providentFund + self.__noAccidentCost + self.__overtimeWage + self.__socialSecurity + self.__retirementCost + self.__welfareCost + self.__bonusCost

    def getTruckFixedCost(self):
        return self.__saiStay + self.__splicePlate + self.__canvasCost + self.__insurance + self.__vehicleDepreciation + self.__repairCost + self.__tireCost + self.__tax

    def totalCost(self):
        return self.getTotalDriverFixedCost() + self.getTruckFixedCost() + self.getVaribleCost()
    
class Revenue:
    def __init__(self):
        self.__revenue = 0
        
    def getRevenue(self):
        return self.__revenue
    def setRevenue(self, revenue):
        self.__revenue = revenue
    

class Profit(Cost, Revenue):
    def __init__(self):
        super().__init__()
        
    def getProfit(self):
        return Cost.totalCost(self) + Revenue.getRevenue(self)
    




