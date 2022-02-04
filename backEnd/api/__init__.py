from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

db = SQLAlchemy()


def create_app():
  app = Flask(__name__)
  CORS(app)

  env = os.getenv("SQLALCHEMY_DATABASE_URI")
  db_uri = 'sqlite:///database.db'
  if env:
    db_uri = env
  app.config['SQLALCHEMY_DATABASE_URI'] = db_uri

  db.init_app(app)

  from .views import main
  app.register_blueprint(main)
  print(db_uri, "DBURI")

  return app

