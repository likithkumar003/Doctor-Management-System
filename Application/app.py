from flask import Flask
from flask_restful import Api
from flask_cors import CORS
import os
from Models.Tables import cur,conn
from Sources.Users import LoginResource, RegisterResource
from Sources.Doctors import DoctorResource, DoctorsResource
from Sources.Patients import PatientsResources

app = Flask(__name__)
CORS(app)
api = Api(app)

api.add_resource(LoginResource,'/login')
api.add_resource(RegisterResource,'/register')
api.add_resource(DoctorsResource,'/doctor')
api.add_resource(DoctorResource,'/doctor/<string:id>')
api.add_resource(PatientsResources, '/patients')

if __name__ == "__main__":
    app.run(debug=True)

