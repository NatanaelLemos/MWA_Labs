# 1.Find all the zip codes in Iowa state. 

``` mongodb
db.zips.aggregate([
    { $match: { 'state': 'IA' } },
    { $project: { _id: '$_id' } }
])
```

# 2.Find all the zip codes with a population less than 1000. 
``` mongodb
db.zips.aggregate([
    { $group: { _id: '$_id', pop: { $sum: '$pop' } } },
    { $match: { 'pop': { $lt: 1000 } } },
    { $project: { _id: '$_id' } }
])
```

# 3.Find all cities that have more than one zip code, sort the results based by state and city name. 
``` mongodb
db.zips.aggregate([
    { $group: { _id: '$city', state: { $first: '$state' }, zips: { $addToSet: '$_id' } } },
    { $project: { _id: '$_id', state: '$state', zipCount: { $size: '$zips' } } },
    { $match: { zipCount: { $gt: 1 } } },
    { $sort: { state: 1, _id: 1 } }
])
```

# 4.Display the least populated city in each state 
``` mongodb
db.zips.aggregate([
    { $group: { _id: '$city', state: { $first: '$state' }, pop: { $sum: '$pop' } } },
    { $sort: { pop: 1 } },
    { $group: { _id: '$state', pop: { $first: '$pop' }, city: { $first: '$_id' } } }
])
```
