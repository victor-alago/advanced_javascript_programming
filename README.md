
# Advanced JavaScript Programming Exercises

## Running the Code

To test the code, simply run it in a Node.js environment with:
```js
npm start
```


This project demonstrates basic JavaScript concepts including working with objects, arrays, and classes.

## Part 0: Working with an Object

### Q1. Create a `student` object
We start by creating a `student` object with the following properties:
- `name`: set to `'Marie'`
- `age`: set to `25`
- `courses`: an empty array to store course names

```js
const student = {
    name: 'Marie',
    age: 25,
    courses: []
}
```

### Q2. Modify the student object

	•	We update age to 21.
	•	We add a new property, grade, and set it to 'A'.

```js
student.age = 21;
student.grade = 'A';
```

### Q3. Manipulate the courses array

	•	We add three courses to the courses array: 'Math', 'Physics', and 'Chemistry'.
	•	We find the index of the course 'Physics' in the courses array.
	•	We create a new array newCourses containing only the first two courses.

```js
student.courses.push('Math', 'Physics', 'Chemistry');
const courseIndex = student.courses.indexOf('Physics');
const newCourses = student.courses.slice(0, 2);
```

### Q4. Output the Results

We display the final student object, the index of 'Physics', and the newCourses array.

```js
console.log(student);
console.log(courseIndex);
console.log(newCourses);
```

## Part 1: Working with Classes

### Q1. Define the User Class

We define a User class with the following properties:

	•	firstName: stores the user’s first name.
	•	lastName: stores the user’s last name.
	•	age: stores the user’s age.
	•	email: stores the user’s email address.
	•	admin: a boolean indicating if the user is an admin (defaults to false).

The class includes two methods:

	•	getUserInfo(): returns a string with the user’s full name and age.
	•	setAge(newAge): updates the user’s age.

```js
class User {
    constructor(firstName, lastName, age, email, admin = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.admin = admin;
    }

    getUserInfo() {
        return `Full Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
    }

    setAge(newAge) {
        this.age = newAge;
    }
}
```

### Q2. Testing the User Class

	•	We create an instance of the User class with the name “Blanco White”, age 33, and email blancowhite@gmail.com.
	•	We use getUserInfo() to display the user’s full name and age.
	•	We update the user’s age to 30 using setAge() and verify the change with getUserInfo().

```js 
let user = new User("Blanco", "White", 33, "blancowhite@gmail.com");

console.log(user.getUserInfo()); // Output: Full Name: Blanco White, Age: 33

user.setAge(30);

console.log(user.getUserInfo()); // Output: Full Name: Blanco White, Age: 30
```

This will output the final state of the student object, details of the User instance, and verify that the age update works as expected.
