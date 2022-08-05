class Truck:

    def __init__(self, truckId, licensePlate, truckType, capacity, vehicleWeight):
        self.__truckId = truckId
        self.__licensePlate = licensePlate
        self.__truckType = truckType
        self.__capacity = capacity
        self.__vehicleWeight = vehicleWeight
        
    def getTruckId(self):
        return self.__truckId
    
    def getLicensePlate(self):
        return self.__licensePlate
    
    def getTruckType(self):
        return self.__truckType
    
    def getCapacity(self):
        return self.__capacity
    
    def getVehicleWeight(self):
        return self.__vehicleWeight
    

