from abc import abstractmethod
from customer import Customer
from product import Product
from order import Order


class TransportationOrder(Order):
    def __init__(self):
        self.__sourceSystem = ''
        self.__chanel = ''
        self.__expectedDate = ''
        
    def getSourceSystem(self):
        return self.__sourceSystem
    def setSourceSystem(self, sourceSystem):
        self.__sourceSystem = sourceSystem
    
    def getChanel(self):
        return self.__chanel
    def setChanel(self, chanel):
        self.__chanel = chanel
    
    def displayProduct(self):
        return self.getProductType()+ ' ' +self.getProductNo() + ', ' +  self.getProductName()+ ' จำนวน ' + "%s" %self.getQuantity() + ' ขวด'
    
        
        
    

