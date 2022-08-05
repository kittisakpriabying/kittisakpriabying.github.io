
from abc import abstractmethod
from customer import Customer
from inventory import Inventory
from product import Product


class Order(Product, Inventory, Customer):
    def __init__(self):
        self.__orderId = 0
        self.__orderNo = ''
        self.__orderDate = ''
        self.__deliveryDate = ''
        self.__orderType = ''
        self.__product = ''
        self.__quantity = 0
        
        
   
    def getOrderId(self):
        return self.__orderId
    def setOrderId(self, orderId):
        self.__orderId = orderId
    
    
    def getOrderNo(self):
        return self.__orderNo
    def setOrderNo(self, orderNo):
        self.__orderNo = orderNo
    
    
    def getCustomerId(self):
        return self.__customerId
    def setCustomerId(self, customerId):
        self.__customerId = customerId
    
    
    def getOrderDate(self):
        return self.__orderDate
    def setOrderDate(self, orderDate):
        self.__orderDate = orderDate
    
    
    def getDeliveryDate(self):
        return self.__deliveryDate
    def setDeliveryDate(self, deliveryDate):
        self.__deliveryDate = deliveryDate
        
    
    def getOrderType(self):
        return self.__orderType
    def setOrderType(self, orderType):
        self.__orderType = orderType
    
    
    def getProduct(self):
        return self.__product
    
    def getQuantity(self):
        return self.__quantity
    def setQuantity(self, quantity):
        self.__quantity = quantity 
    
    
    def checkProduct(self):
        if self.__quantity <= self.getInventoryAmount():
            return True
        else:
            print('Out of stock')

    def groupProductType(self):
        return self.__productType
    
    def getTotalPallet(self):
        return self.__quantity / self.getConversion()
    
    def getPalletQty(self):
        totalPack = int(self.__quantity/ self.getConversion())
        pallet = int(totalPack / self.getPackPerPallet())
        return pallet

    def getPackQty(self):
        totalPack = int(self.__quantity/ self.getConversion())
        pallet = int(totalPack / self.getPackPerPallet())
        pack = totalPack - pallet * self.getPackPerPallet()
        return pack
    def getUnitQty(self):
        return self.getQuantity() % self.getConversion()

