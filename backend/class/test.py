import pyodbc 
from customer import Customer 

conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=TOSAKAN;'
                      'Database=ITES;'
                      'Trusted_Connection=yes;')

cursor = conn.cursor()
cursor.execute('SELECT * FROM CustomerLocation ')

for row in cursor:
    
    print(row[2])
    print('\n')
    

    
    
    
    

    
    