from flask_restful import Resource
from flask import jsonify
from Models.Tables import conn,cur

class DoctorsResource(Resource):
    def get(self):

        return jsonify({"status": True})


class DoctorResource(Resource):
    def get(self, id):
        return jsonify({"status": True})

    def post(self, id):
        return jsonify({"status": True})

    def put(self, id):
        return jsonify({"status": True})
