const Query={
    users(p,a,{db}){
    return db.users
    },
    tasks(p,a,{db}){
        return db.tasks
    }
}
export {Query}