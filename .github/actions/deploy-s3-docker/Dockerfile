# The purpose of using docker with this action
# is to enable the use of python
# because python is not installed in the github action environment
# by default
FROM python:3

COPY requirements.txt /requirements.txt

RUN pip install -r requirements.txt

COPY deployment.py /deployment.py

CMD ["python", "/deployment.py"]