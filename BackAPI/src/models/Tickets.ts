import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('tickets')
export default class Tickets {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    origin: string;

    @Column()
    destination: string;

    @Column()
    price: number;

    @Column()
    date: string;

}