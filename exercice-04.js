const courses = ["pain", "lait", "riz", "cafe"];

courses.push("sucre")

const course = courses.indexOf("lait")

courses.splice(course, 1)

console.log(courses)
console.log(course)

