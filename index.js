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