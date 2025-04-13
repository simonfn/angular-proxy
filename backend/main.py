from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

class Fruit(BaseModel):
    id: int
    name: str

class DB():
    def __init__(self):
        self.db = ["banana", "apple", "orange", "grape", "kiwi", "mango", "peach", "pear", "pineapple", "strawberry"];

    def get_all(self):
        return [Fruit(id=idx, name=fruit) for idx, fruit in enumerate(self.db)]


db = DB()
app = FastAPI()

@app.get("/", response_model=List[Fruit])
async def root():
    return db.get_all()