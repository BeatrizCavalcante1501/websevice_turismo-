import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('hosting')
export default class Hosting {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    origin: string;

    @Column()
    price: number;

    @Column()
    date: string;

}