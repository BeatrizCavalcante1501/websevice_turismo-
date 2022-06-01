import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Tickets from '../models/Tickets';

export default{
    async create(request: Request,response:Response ){
        const{
            origin,
            destination,
            price,
            date
        } = request.body;
        const ticketsRepository = getRepository(Tickets);
        
        const tickets = ticketsRepository.create({
            origin,
            destination,
            price,
            date
        });
    
        await ticketsRepository.save(tickets);
    
        return response.status(201).json(tickets);
    },
    async show(request: Request,response:Response ){
        const origin = request.params;
        console.log(origin)

        const ticketsRepository = getRepository(Tickets);

        const tickets = await ticketsRepository.find({
            where : origin
        });

        return response.json(tickets);
    },
    async index(request: Request,response:Response ){
        const ticketsRepository = getRepository(Tickets);

        const tickets = await ticketsRepository.find(
        );

        return response.json(tickets);
    }
}

