class Customer:
    def __init__(self):
        self.__customerId = 0
        self.__customerNo = ''
        self.__customerName = ''
        self.__customerType = ''
        self.__address = ''
        self.__tel = ''
        
    def getCustomerId(self):
        return self.__customerId
    def setCustomerId(self, customerId):
        self.__customerId = customerId
    
    def getCustomerNo(self):
        return self.__customerNo
    def setCustomerNo(self, customerNo):
        self.__customerNo = customerNo
        
    def getCustomerName(self):
        return self.__customerName
    def setCustomerName(self, customerName):
        self.__customerName = customerName
        
    def getCustomerType(self):
        return self.__customerType
    def setCustomerType(self, customerType):
        self.__customerType = customerType
    
    def getAddress(self):
        return self.__address
    def setAddress(self, address):
        self.__address = address