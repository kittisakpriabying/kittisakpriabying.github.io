from abc import abstractmethod


@abstractmethod
class Inventory:
    def __init__(self):
        self.__inventoryAmount = 0
    
    def getInventoryAmount(self):
        return self.__inventoryAmount
    def setInventoryAmount(self, amount):
        self.__inventoryAmount = amount