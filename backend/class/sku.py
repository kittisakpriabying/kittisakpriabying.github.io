from abc import abstractmethod


@abstractmethod
class Sku:
    def __init__(self):
        self.__skuId = 0
        self.__skuName = ''
        self.__skuType = ''
        self.__weight = 0.0
        self.__conversion = 0
        self.__packPerPallet = 0
        
      
    def getSKUId(self):
        return self.__skuId
    
    def getSKUName(self):
        return self.__skuName
    
    def getSKUType(self):
        return self.__skuType
    
    def getWeight(self):
        return self.__weight
    
    def getConversion(self):
        return self.__conversion
    
    def setSKUId(self,skuId):
        self.__skuId = skuId
    def setSKUName(self,skuName):
         self.__skuName = skuName
    def setSKUType(self, skuType):
         self.__skuType = skuType
    def setWeight(self, weight):
         self.__weight = weight
    def setConversion(self, conversion):
         self.__conversion = conversion 
    
    def getPackPerPallet(self):
        return self.__packPerPallet 
    def setPackPerPallet(self, packPerPallet):
        self.__packPerPallet = packPerPallet
