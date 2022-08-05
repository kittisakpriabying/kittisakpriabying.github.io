from trasportationOrder import TransportationOrder

class Shipment(TransportationOrder):
    def __init__(self):
        super().__init__()
        self.__shipmentId = 0
        self.__recommendTime = ''
    
    def getShipmentId(self):
        return self.__shipmentId
    def setShipmentId(self, shipmentId):
        self.__shipmentId = shipmentId
    
    def getRecommendTime(self):
        return self.__recommendTime
    def setRecommendTime(self, recommendTime):
        self.__recommendTime = recommendTime
        