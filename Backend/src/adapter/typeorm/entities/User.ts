import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    // CreateDateColumn,
  } from 'typeorm'
  @Entity({ name: 'users' })
  export class UserTypeormEntity {
    constructor(
      id: string,
      name: string,
      email: string,
      age: number,
      phone_number: string,
      joined_Date: Date,
    ) {
      this.id = id
      this.name = name
      this.email = email
      this.age = age
      this.phone_number = phone_number
      this.joined_Date = joined_Date
    }
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ unique: true })
    name: string
    @Column()
    email: string
    @Column()
    age: number
    @Column()
    phone_number: string
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    public joined_Date: Date
   
  }