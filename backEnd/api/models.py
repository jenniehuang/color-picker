from . import db

class User_data(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(10))
  score = db.Column(db.Integer)