# Exercise 1
### Create a NoSQL design model for an application to manage a library, taking into consideration the following requirements: 
### •Books have an ISBN number and are categorized by author and tagged by keywords to facilitate search 
### •Books can be borrowed by students, so the librarian will be able to check all borrowed books and their return date so he may contact students who are late returning their books.

``` mongodb
use mwaLibrary
db.books.insert([
    {isbn: "817525766-0", name: "The adventures of someone at somewhere", author: "John Doe", keywords: ["Fantasy", "Fictional"]},
    {isbn: "817525767-0", name: "Introduction to Chemistry", author: "Jane Doe", keywords: ["Chemistry", "Educational"]},
    {isbn: "817525768-0", name: "Programming in C", author: "Joe Someone", keywords: ["Programming", "C"]}
])
db.borrows.insert([
    {isbn: "817525766-0", student: "Dani Student", borrowDate: new Date("2018-04-09T09:00:00Z"), returnDate: new Date("2018-04-16T09:00:00Z")}
])
db.books.find()
db.borrows.find()
```