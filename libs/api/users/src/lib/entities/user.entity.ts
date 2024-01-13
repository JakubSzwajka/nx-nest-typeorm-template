import { randomUUID } from 'crypto';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User extends BaseEntity {  
  @PrimaryGeneratedColumn("uuid") 
  id: string = randomUUID();
  
  @Column() 
  name: string = '';
}