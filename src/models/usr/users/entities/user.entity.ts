import { 
    Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn 
} from "typeorm";
import { Password } from "../../passwords/entities";

@Entity({ name: 'usr_users'})
export class User{

    @PrimaryGeneratedColumn()
    id_user:number;

    @OneToMany(type => Password, password => password.user)
    password:Password[];

    @Column({
        unique: true,
        nullable:true
    })
    email:string;

    @Column({
        unique: true,
        nullable: true
    })
    username:string;

    @CreateDateColumn()
    create_at:Date;

    @UpdateDateColumn()
    update_at:Date;

    @DeleteDateColumn()
    delete_at:Date;

}