const courses = [
    {name:"React", type:"Frontend"},
    {name:"Javascript", type:"Frontend"},
    {name:"Angular", type:"Frontend"},
    {name:"PHP", type:"Backend"},
    {name:"Java", type:"Backend"},
    {name:"NodeJs", type:"Backend"},
    {name:"C++", type:"Programming"},
    {name:"Python", type:"Programming"},
    {name:"Python", type:"Backend"},
    {name:"Python", type:"Frontend"},
    {name:"Java", type:"Programming"}
]


function groupBy(courses){

    let list = {};

    courses.forEach(course => {
        if(!list[course.type]){
            list[course.type] = [course];
        }else{
            list[course.type].push(course);
        }
    });
    return list;
}

console.log(groupBy(courses));

