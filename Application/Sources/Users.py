from flask import jsonify, request
from flask_restful import Resource

from Models.Tables import cur,conn
from flask_jwt_extended import create_access_token

class LoginResource(Resource):
    def post(self):
        try:
            data = request.get_json()
            print(data)
            cur.execute("select * from users where user_name = ? and role = ? and password = ?",(data['name'],data['role'],data['password']))
            user = cur.fetchone()
            if user:
                user_dict = dict(zip(user.keys(), user))
                print(user_dict)
                # access_token = create_access_token(identity=user[])
                return jsonify({"status": True})
            return jsonify({'status':False,'message':'User not found'})
        except Exception as e:
            return jsonify({'status':False,'message':f'Backend error as {e}'})

class RegisterResource(Resource):
    def post(self):
        try:
            data = request.get_json()
            print(data)
            '''
            USERS (user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name TEXT not null, password TEXT no null, email TEXT not null, role TEXT not null)
            '''
            name = data['name']
            password = data['password']
            email = data['email']
            role = data['role']
            query = "INSERT INTO USERS(user_name, password, email, role) values(?,?,?,?)"
            values = (name, password, email, role)
            cur.execute(query, values)
            conn.commit()
            return jsonify({"status": True})
        except Exception as e:
            return jsonify({'status':False})
