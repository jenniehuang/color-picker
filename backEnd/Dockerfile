FROM ubuntu
RUN apt update
RUN apt install -y software-properties-common
RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt update
RUN apt install -y python3.8
RUN apt-get -y install python3-pip
RUN pip install Flask Flask-SQLAlchemy flask-cors
ENV SQLALCHEMY_DATABASE_URI="sqlite:////db/database.db"
RUN mkdir /db
WORKDIR /app
COPY . .
RUN cd /app
EXPOSE 8080


