import {MigrationInterface, QueryRunner} from "typeorm";

export class init1629419104774 implements MigrationInterface {
    name = 'init1629419104774'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `usr_users` (`id_user` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NULL, `username` varchar(255) NULL, `create_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `delete_at` datetime(6) NULL, UNIQUE INDEX `IDX_d669913b31e063fb0f4b27e406` (`email`), UNIQUE INDEX `IDX_e6fb2b9bf539fc7daa045a054b` (`username`), PRIMARY KEY (`id_user`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `usr_passwords` (`id_password` int NOT NULL AUTO_INCREMENT, `password` varchar(255) NOT NULL, `create_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `update_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `delete_at` datetime(6) NULL, `id_user` int NULL, PRIMARY KEY (`id_password`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `usr_passwords` ADD CONSTRAINT `FK_a52cac7091adb510e95daf1ad18` FOREIGN KEY (`id_user`) REFERENCES `usr_users`(`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usr_passwords` DROP FOREIGN KEY `FK_a52cac7091adb510e95daf1ad18`");
        await queryRunner.query("DROP TABLE `usr_passwords`");
        await queryRunner.query("DROP INDEX `IDX_e6fb2b9bf539fc7daa045a054b` ON `usr_users`");
        await queryRunner.query("DROP INDEX `IDX_d669913b31e063fb0f4b27e406` ON `usr_users`");
        await queryRunner.query("DROP TABLE `usr_users`");
    }

}
