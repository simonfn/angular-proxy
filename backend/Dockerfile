FROM python
WORKDIR /usr/src/app
RUN apt-get update && \
    apt-get install -y python3-pip

COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000
CMD ["fastapi", "run", "main.py"]