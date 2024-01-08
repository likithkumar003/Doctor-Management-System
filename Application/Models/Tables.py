import sqlite3
import os

try :
    if not os.path.isfile('DoctorManagementSystem.db'):
        conn = sqlite3.connect("DoctorManagementSystem.db",check_same_thread=False)
        # conn.row_factory = sqlite3.Row
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()
        cur.execute(
            "CREATE TABLE IF NOT EXISTS USERS (user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name TEXT not null, password TEXT not null, email TEXT not null, role TEXT not null)")
        cur.execute(
            "CREATE TABLE IF NOT EXISTS DOCTORS (doctor_id INTEGER UNIQUE, doctor_name TEXT, doctor_specialist TEXT, status BOOLEAN default 1)")
        cur.execute(
            "CREATE TABLE IF NOT EXISTS PATIENT (patient_id INTEGER, patient_name TEXT, doctor_id INTEGER, description TEXT)")
        cur.execute(
            "CREATE TABLE IF NOT EXISTS APPOINTMENT (appointment_id INTEGER, patient_id INTEGER, doctor_id INTEGER, status BOOLEAN default 1)")
        conn.commit()
        cur.execute("select name from sqlite_master where type='table'")
        print(cur.fetchall())
        cur.execute(
            "INSERT INTO USERS(user_name,password,email,role) VALUES('admin1','admin1','admin1@gmail.com','admin')")
        cur.execute(
            "INSERT INTO USERS(user_name,password,email,role) VALUES('John doe','doctor1','doctor1@gmail.com','doctor')")
        conn.commit()
        cur.execute('select * from users')
        print(cur.fetchall())
        print("DB init")
    else:
        conn = sqlite3.connect("DoctorManagementSystem.db", check_same_thread=False)
        conn.row_factory = sqlite3.Row
        cur = conn.cursor()

except Exception as e:
    print("Database Error",f'{e}')