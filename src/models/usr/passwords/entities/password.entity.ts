import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SHA256 } from 'crypto-js';
import { User } from "../../users/entities";

@Entity({ name: 'usr_passwords'})
export class Password{

    @PrimaryGeneratedColumn()
    id_password:string;

    @ManyToOne(type => User, user => user.password)
    @JoinColumn({ name: 'id_user' })
    user:User;

    @Column()
    password:string;

    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    update_at:Date;

    @DeleteDateColumn()
    delete_at:Date;

    @BeforeInsert()
    async hashPassword(){
        this.password = SHA256( SHA256(this.password).toString() ).toString();
    }

}