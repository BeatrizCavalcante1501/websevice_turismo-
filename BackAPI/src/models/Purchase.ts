import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('purchase')
export default class Purchase {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    price: number;

    @Column()
    IDTicket: number;

    @Column()
    QTTickets: number;

}