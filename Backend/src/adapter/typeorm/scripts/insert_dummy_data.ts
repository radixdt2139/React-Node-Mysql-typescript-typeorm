import { randomUUID } from "crypto";
import devDataSource from "../dev-data-source";
import { UserTypeormEntity } from "../entities/User";

const dummyData:any = [];

for (let index = 0; index < 10; index++) {    
  dummyData.push({
    id: randomUUID(),
    name: `dummy-name-${index}`,
    email: `dummy-name-${index}@email.com`,
    age: Math.floor(Math.random() * 100),
    phone_number: Math.floor(Math.random() * 1000000000),
  });
}
devDataSource.initialize().then(async()=>{
  console.log(`Database connected at PORT: 3306`);
  const repository = await devDataSource.getRepository(UserTypeormEntity)
  const data=  repository.save(dummyData)
}).catch((err)=>{
  console.error('error: ' + JSON.stringify(err));
})
