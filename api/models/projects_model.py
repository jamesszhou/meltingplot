from ..database import db
from marshmallow import fields, Schema
from sqlalchemy.dialects.postgresql import JSON


class ProjectsModel(db.Model):
    """
    Project Model
    """

    # table name
    __tablename__ = 'projects'

    project_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(128), nullable=False)
    description = db.Column(db.String(128), nullable=False)
    config = db.Column(JSON, nullable=False)

    # class constructor
    def __init__(self, data):
        """
        Class constructor
        """
        self.user_id = data.get('user_id')
        self.title = data.get('title')
        self.description = data.get('description')
        self.config = data.get('config')

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

    @staticmethod
    def get_project(project_id):
        return ProjectsModel.query.filter_by(project_id=project_id).first()

    @staticmethod
    def get_projects_by_user_id(user_id):
        return ProjectsModel.query.filter_by(user_id=user_id).all()

    @staticmethod
    def delete_project(project_id):
        ProjectsModel.query.filter_by(project_id=project_id).delete()
        db.session.commit()


class ProjectsSchema(Schema):
    """
    Projects Schema
    """
    project_id = fields.Int(required=True)
    user_id = fields.Int(required=True)
    title = fields.Str(required=True)
    description = fields.Str(required=True)
    config = fields.Raw(required=True)
