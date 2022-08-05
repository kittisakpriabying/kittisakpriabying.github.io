class Employee:
    def __init__(self, employeeId, employeeNo, firstName, lastName, salary, tel):
        self.__employeeId = employeeId
        self.__employeeNo = employeeNo
        self.__firstName = firstName
        self.__lastName = lastName
        self.__salary = salary
        self.__tel = tel
    
    @property
    def getfullName(self):
        return self.__firstName +' ' + self.__lastName
    
    @property
    def getEmployeeId(self):
        return self.__employeeId
    
    def setEmployeeId(self, employeeId):
        self.__employeeId = employeeId
    
    @property
    def getEmployeeNo(self):
        return self.__employeeNo
    
    def setEmployeeNo(self, employeeNo):
        if len(employeeNo) == 8 :
            self.__employeeNo = employeeNo
        else: 
            raise ValueError
    
    @property 
    def getFirstName(self):
        return self.__firstName
    
    def setFirstName(self, firstName):
        self.__firstName = firstName
        
    @property
    def getLastName(self):
        return self.__lastName
    
    def setLastName(self, lastName):
        self.__lastName = lastName
        
    @property
    def getSalary(self):
        return self.__salary
    
    def setSalary(self, salary):
        self.__salary = salary
        
    @property
    def getTel(self):
        return self.__tel
    
    def setTel(self, tel):
        self.__tel = tel
    
        
    

