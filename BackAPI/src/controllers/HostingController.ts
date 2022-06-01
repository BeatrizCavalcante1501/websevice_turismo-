import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Hosting from '../models/Hosting';

export default{
    async create(request: Request,response:Response ){
        const{
            origin,
            price,
            date
        } = request.body;
        const HostingRepository = getRepository(Hosting);
        
        const hosting = HostingRepository.create({
            origin,
            price,
            date
        });
    
        await HostingRepository.save(hosting);
    
        return response.status(201).json(hosting);
    }
}

