from flask_restful import Resource
from flask import jsonify, request
from Models.Tables import cur,conn
import sqlite3
import random
class PatientsResources(Resource):
    def get(self):
        try:
            conn = sqlite3.connect("DoctorManagementSystem.db", check_same_thread=False)
            conn.row_factory = sqlite3.Row
            cur = conn.cursor()
            cur.execute("select * from PATIENT")
            patient_rows = cur.fetchall()
            if patient_rows:
                patients_list = [dict(patient_row) for patient_row in patient_rows]
                return jsonify({'status': True, 'patients': patients_list})
            else:
                return jsonify({'status': False, 'message': 'No patient found'})

        except Exception as e:
            print(f"{e}")
            return jsonify({'status': False, 'error': str(e)})


    def post(self):
        try:
            data = request.get_json()
            # print(data)
            id = random.randint(0,1000000)
            query = "insert into patient (patient_id, patient_name, doctor_id, description) values( ?,?,?,?)"
            value = (id, data['name'], data['Doc'], data['type'])
            cur.execute(query, value)
            conn.commit()
            return jsonify({'status':True, 'message':"Data added"})
        except Exception as e:
            print(f"{e}")
            return jsonify({'status':False, 'message':f"{e}"})
