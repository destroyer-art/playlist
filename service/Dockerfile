FROM python:3-alpine
ENV PYTHONUNBUFFERED=1

RUN apk add --update --no-cache build-base postgresql-client jpeg-dev postgresql-dev bash

WORKDIR /code

COPY requirements.txt /code/
RUN pip install -r requirements.txt

COPY . /code/
