from order import Order

order = (1, '123456789', 1, '08/02/2022 12:35:03', '08/10/2022 12:35:03',
         "บิ๊กซี ซูเปอร์เซ็นเตอร์ (สาขาที่ 8 นครราชสีมา)", [(1, 'Beer1', 10000), (2, 'เหล้าขาวเล็ก', 12050)])
sku = (1, 'SKU', 1, 100, 12, 70)



o = Order()
o.setOrderId(order[0])
o.setOrderNo(order[1])
o.setOrderDate(order[2])
o.setDeliveryDate(order[3])
o.setCustomerName(order[4])
o.setProductId(order[6][0][0])
o.setProductName(order[6][0][1])
o.setQuantity(order[6][0][2])

if(order[6][0][0] == sku[2]):
    o.setConversion(sku[4])
    o.setPackPerPallet(sku[5])
else:
    print('Error')


pallet = o.getPalletQty()
pack = o.getPackQty()
unit = o.getUnitQty()
print('ออเดอร์หมายเลข:',o.getOrderNo(),'จำนวน' , pallet,'พาเลท', pack,'ลัง', unit, 'ขวด')


# เรียงลำดับความสำคัญ Order เรียงลำดับจากวันเวลาที่สั่ง


# แปลงจากขวดเป็น Pallet

# เลือกรถบรรทุก
