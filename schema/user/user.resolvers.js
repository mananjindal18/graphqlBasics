const userService = require('../../service/UserService')
const resolvers = {
    Query:{
        getUser:(root,args,context,info)=>{
            return userService.getUser(args);
        },
        
        getAllUser:(root,args,context,info)=>{
            return userService.getAllUser(args);
        },
    },
    Mutation:{
        addUser:(root,args,context,info)=>{
            return userService.addUser(args);
        }
    }
}
module.exports = resolvers