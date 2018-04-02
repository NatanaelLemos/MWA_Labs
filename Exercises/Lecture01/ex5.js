/* jshint esversion: 6 */
/* jshint browser: true */
(() => {
    //use strict

    /*
    Create an object called TeacherA and TeacherB derived from the Person function constructor, 
    which has one name property needed to construct the objects.
     */
    function Person(name) {
        this.name = name;
    }

    const teacherA = new Person('teacher A');
    const teacherB = new Person('teacher B');

    /*
    Implements a method called teach() that will be inherited by all objects created from Person, the method receives a string called subject and prints out:
    [teacher's name] is now teaching [subject]
    */
    Person.prototype.teach = function (subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }

    teacherA.teach('subject A');
    teacherB.teach('subject B');

})();