from abc import abstractmethod

from sku import Sku
from inventory import Inventory

class Product(Sku, Inventory):
    def __init__(self):
        self.__productId = 0
        self.__productNo = ''
        self.__productName = ''
        self.__productType = ''
        self.__brand = ''
        
    def getProductId(self):
        return self.__productId
    def setProductId(self, productId):
        self.__productId = productId
    
    def getProductName(self):
        return self.__productName
    def setProductName(self, productName):
        self.__productName = productName
    
    def getProductType(self):
        return self.__productType
    def setProductType(self, productType):
        self.__productType = productType
    
    def getBrand(self):
        return self.__brand
    def setBrand(self, brand):
        self.__brand = brand
        
    def getProductNo(self):
        return self.__productNo
    def setProductNo(self, productNO):
        self.__productNo = productNO

   
        
