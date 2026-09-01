const courses = ["pain", "lait", "riz", "cafe"];

courses.push("sucre")

const course = courses.indexOf("lait")

courses.splice(course, 1)

console.log(`nombre d'articles: ${courses.length}`)

for(let i = 0; i < courses.length; i++){
    console.log(`${i + 1} . ${courses[i]}`)
}

courses.includes('cafe')
if(courses.includes('cafe')){
    console.log("le cafe est bien dans la list")
}
else{
    console.log("le cafe n'est pas dans la list")
}



