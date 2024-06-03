import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class DeleteCustomerControllers{
    async handle (request: FastifyRequest, reply: FastifyReply){
        const{id} = request.query as {id:string}

        const customeService = new DeleteCustomerService();

        const customer = await customeService.execute({id})
        

        reply.send(customer);

    }
}

export{DeleteCustomerControllers}