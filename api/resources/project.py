import os
import psycopg2
from flask_restful import Resource

DATABASE_URL = os.environ['DATABASE_URL']
conn = psycopg2.connect(DATABASE_URL, sslmode='require')
cur = conn.cursor()


class Project(Resource):
    def get(self):
        cur.execute("SELECT * from projects")
        return cur.fetchall()
