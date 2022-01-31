from flask import Blueprint, jsonify, request
from . import db
from .models import User_data


main = Blueprint('main', __name__)

@main.route('/add_user', methods=['POST'])
def add_user():
  input_data = request.get_json()

  new_user_data = User_data(username=input_data['userName'], score=input_data['score'])
  db.session.add(new_user_data)
  db.session.commit()

  return 'Done', 201

@main.route('/user_data')
def users():
  user_list = User_data.query.order_by(User_data.score.desc(),User_data.username).limit(10).all()
  user_data = []

  for data in user_list:
    user_data.append({'username': data.username, 'score': data.score})

  return jsonify({'user_data': user_data})



