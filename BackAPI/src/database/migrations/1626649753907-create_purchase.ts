import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class createPurchase1626649753907 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'purchase',
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
                    name: 'price',
                    type: 'decimal'
                },
                {
                    name: 'IDTicket',
                    type: 'integer'
                },
                {
                    name: 'QTTickets',
                    type: 'integer'
                },
                
                
            ]
        
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
