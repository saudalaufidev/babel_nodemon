import {db} from './db'
import {GraphQLServer} from 'graphql-yoga'
import {Query} from './Query'
import {Task} from './Task'
import {User} from './User'
const server= new GraphQLServer({
    typeDefs:'./src/schema.graphql',
    resolvers:{
        Query,
        Task,
        User
    },
    context:{
        db
    }
})
server.start(()=>console.log("GraphQL Server working on localhost:4000"))