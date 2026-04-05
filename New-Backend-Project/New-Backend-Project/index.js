import app from "./src/app.js";
import dotenv from "dotenv";

const port = process.env.PORT || 3000;
dotenv.config();

// - Server code here

// - Launching code here
app.listen(port, () =>
  console.log(
    `  <--------------------------------------------------------------------------> 
\t Project Name: ${process.env.ProjectName} , Developing By: ${process.env.DeveloperName} 
  <--------------------------------------------------------------------------> 
\t your banking website's backend server is running at port 3000 
\t check at http://127.0.0.1:${port}
  <-------------------------------------------------------------------------->`
  )
);
