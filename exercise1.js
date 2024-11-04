console.log('Testing node app')

// Part 0
// Q1
const student = {
    name: 'Marie',
    age: 25,
    courses: []
}


// Q2
student.age = 21

student.grade = 'A'
// console.log(student)


// Q3
student.courses.push('Math', 'Physics', 'Chemistry')

const courseIndex = student.courses.indexOf('Physics')
// console.log(courseIndex)

const newCourses = student.courses.slice(0, 2)
// console.log(newCourses)


// Q4
console.log(student)
console.log(courseIndex)
console.log(newCourses)



// Part 1
// Q1. Define the User class
class User {
    constructor(firstName, lastName, age, email, admin = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.admin = admin;
    }

    // Method to return user info in the specified format
    getUserInfo() {
        return `Full Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }

    // Method to update the user's age
    setAge(newAge) {
        this.age = newAge;
    }
}



// Q2. Create an instance of the User class
let user = new User("Blanco", "White", 33, "blancowhite@gmail.com");

// Display the user's full name and age
console.log(user.getUserInfo()); 

// Update the user's age
user.setAge(30);

// Verify the age change by using getUserInfo again
console.log(user.getUserInfo()); 