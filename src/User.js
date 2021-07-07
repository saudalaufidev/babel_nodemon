const User={
tasks({tasks},a,{db},i){
    return db.tasks.filter((task)=>task.id===tasks)
}
}
export {User}