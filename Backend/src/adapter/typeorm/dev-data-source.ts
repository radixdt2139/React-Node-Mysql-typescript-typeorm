import 'reflect-metadata'
import {  DataSource } from 'typeorm'
import { UserTypeormEntity } from './entities/User'
const connection= new DataSource({
    type:'mysql',
    host:'localhost',
    port:3306,
    database:'userprofile',
    logging:'all',
    username:'root',
    password:'root',
    migrationsRun:true,
    synchronize:false,
    entities : [ UserTypeormEntity],
    migrations:['src/adapter/typeorm/migrations/*.{js,ts}']
})
export default connection;