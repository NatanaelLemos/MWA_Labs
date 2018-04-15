# Questions :
### 1-
```mongo
db.restaurants.find();
```
### 2-
```mongo
db.restaurants.find({},{"restaurant_id":1,"name":1,"district":1,"cuisine":1});```
```
### 3-
```mongo
db.restaurants.find({},{"restaurant_id":1,"name":1,"district":1,"cuisine":1,"_id":0});

```
### 4-
```mongo
db.restaurants.find({},{"restaurant_id":1,"name":1,"district":1,"address.zipcode":1,"_id":0});
```
### 5-
```mongo
db.restaurants.find({"district":"Bronx"})
```
### 6-
```mongo
db.restaurants.find({"district":"Bronx"}).limit(5)
```
### 7-
```mongo
db.restaurants.find({"district":"Bronx"}).skip(5).limit(5)
```
### 8-
```mongo
db.restaurants.find({"address.coord.0":{$lt:-95.754168}})
```
### 9-
```mongo
db.restaurants.find({$and:[{"cuisine":{$ne:"American "}},{"grades.score":{$gt:70}},{"address.coord.0":{$lt:-65.754168}}]})
```
### 10-
```mongo
db.restaurants.find({name:{$regex:"^Wil"}},{"restaurant_id":1,"name":1,"district":1,"cuisine":1})
```
### 11-
```mongo
db.restaurants.find({name:{$regex:"ces$"}},{"restaurant_id":1,"name":1,"district":1,"cuisine":1})
```
### 12-
```mongo
db.restaurants.find({name:{$regex:"Reg"}},{"restaurant_id":1,"name":1,"district":1,"cuisine":1})
```
### 13-
```mongo
db.restaurants.find({$and:[{"district":"Bronx"},{"cuisine":{$in:["American ","Chinese"]}}]})
```
### 14-
```mongo
db.restaurants.find({"district":{$in:["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id":1,"name":1,"district":1,"cuisine":1})
```
### 15-
```mongo
db.restaurants.find({"district":{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id":1,"name":1,"district":1,"cuisine":1})
```
### 16-
```mongo
db.restaurants.find({"grades.score":{$lte:10}},{"restaurant_id":1,"name":1,"district":1,"cuisine":1)
```
### 17-
```mongo
db.restaurants.find({"address.coord.1":{$gt:42,$lte:52}},{"restaurant_id":1,"name":1,"address":1})
```
### 18-
```mongo
db.restaurants.find().sort({"name":1})
```
### 19-
```mongo
db.restaurants.find().sort({"name":-1})
```
### 20-
```mongo
db.restaurants.find().sort({"cuisine":1,"district":-1})
```
### 21-
```mongo
db.restaurants.find({"address.street":{$exists:true}})
```
### 22-
```mongo
db.restaurants.find({"address.coord":{$type:"double"}})
```
### 23-
```mongo
db.restaurants.find({name:{$regex:"^Mad"}},{"name":1,"distric":1,"address.coord":1,"cuisine":1})
```
