const Task={
author(parent,a,{db},i){
return db.users.find((user)=>user.id===parent.author)
}
}
export {Task}