
def calculatePallet( totalQty, conversion, palletQty):
        
    totalPack = int(totalQty / conversion)
    pallet = int(totalPack / palletQty)
    pack = totalPack - pallet * palletQty
    unit = totalQty % conversion
       
    return [pallet, pack, unit]
   

print(calculatePallet(10000, 12, 70))


   

