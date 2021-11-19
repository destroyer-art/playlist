FROM python:3-alpine
ENV PYTHONUNBUFFERED=1

RUN apk add --update --no-cache build-base postgresql-client jpeg-dev postgresql-dev bash

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

WORKDIR /code


COPY requirements.txt /code/
RUN pip install -r requirements.txt

COPY . /code/
