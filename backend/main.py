from fastapi import FastAPI

class DB():
    def __init__(self):
        self.db = ["banana", "apple", "orange", "grape", "kiwi", "mango", "peach", "pear", "pineapple", "strawberry"];

    def get_all(self):
        return self.db



app = FastAPI()
db = DB()



@app.get("/")
async def root():
    return db.get_all()