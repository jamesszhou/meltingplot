from api.database import db
from marshmallow import fields, Schema
from api.models.ProjectsModel import ProjectsModel


class UsersModel(db.Model):
    """
    Users Model
    """

    # table name
    __tablename__ = 'users'

    user_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(128), nullable=False)

    # class constructor

    def __init__(self, data):
        """
        Class constructor
        """
        self.user_id = data.get('user_id')
        self.username = data.get('username')

    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self, data):
        for key, item in data.items():
            setattr(self, key, item)
        db.session.commit()

    def remove(self):
        db.session.delete(self)
        db.session.commit()


class UsersSchema(Schema):
    """
    Users Schema
    """
    user_id = fields.Int(required=True)
    username = fields.Str(required=True)
