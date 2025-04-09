FROM python
WORKDIR /usr/src/app
RUN apt-get update && \
    apt-get install -y python3-pip

COPY . /usr/src/app
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["fastapi", "dev", "main.py"]