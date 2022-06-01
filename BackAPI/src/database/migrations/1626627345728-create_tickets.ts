import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTickets1626627345728 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'tickets',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'origin',
                    type: 'varchar'
                },
                {
                    name: 'destination',
                    type: 'varchar'
                },
                {
                    name: 'price',
                    type: 'decimal'
                },
                {
                    name: 'date',
                    type: 'varchar'
                }
            ]
        
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tickets');
    }

}
