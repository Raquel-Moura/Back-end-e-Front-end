import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"
import {CreateCustomerController} from './controllers/CreateCustomersControllers'
import {ListCustomersController} from './controllers/ListCustomersController'
import{DeleteCustomerControllers} from './controllers/DeleteCustomerControllers'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
     fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) =>{
        return{ok:true}
     })

     fastify.post("/customer", async(request: FastifyRequest, reply: FastifyReply) =>{
      return new CreateCustomerController().handle(request, reply)
     })

     fastify.get("/customers", async(request: FastifyRequest, reply: FastifyReply) =>{
      return new ListCustomersController().handle(request, reply)
     })

     fastify.delete("/customer", async(request: FastifyRequest, reply: FastifyReply) =>{
      return new DeleteCustomerControllers().handle(request, reply)
     })
}
    
