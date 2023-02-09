import { Request, Response } from "express";
import { UserRepository } from "./adapter/Repository/userRepository";
import devDataSource from "./adapter/typeorm/dev-data-source";

import { UserTypeormEntity } from "./adapter/typeorm/entities/User";
const express = require("express");
// const morgan = require("morgan");
const app = express();
app.use(express.json())
// app.use(
//   morgan(":method :url :status :res[content-length] - :response-time ms")
// );
const port = 3000;
const main = async () => {
  await devDataSource.initialize().then(()=>{
    console.warn('DB Connected on PORT : 3306')
  }).catch((err)=>{
    console.log(err);
    
    console.warn(`Somehow DB didn't connected ${JSON.stringify(err)}`)
  })
};
main();

// a route for get all users.
app.get("/users", async (req: Request, res: Response) => {
  try {
    const userTypeormRepository =
      devDataSource.getRepository(UserTypeormEntity);
    const userResults = await userTypeormRepository.find();
    return res.status(200).json({
      value: userResults,
      error: null,
      hasError: false,
    });
  } catch (err) {
    res.status(500).json({
      value: undefined,
      error: `Failed to get users from DB : ${JSON.stringify(err)}`,
      hasError: true,
    });
  }
});
app.post('/add-new-user',async(req: Request, res: Response)=>{
  const payload:UserTypeormEntity[]=req.body
  if(!req.body)
  return res.status(400).json({
    value:undefined,
    error:`somehow req.body not found`,
    hasError:false
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
