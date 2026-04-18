import express from "express";
import path from "path";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.route.js";
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(
  cors({
    origin: "https://mern-frontend-cjhi0a37x-shakti7.vercel.app",
  }),
);
app.use("/api/todos", todoRoutes);

/*const __dirname = path.resolve();
if(process.env.NODE.ENV === "productions"){
    app.use(express.static(path.join(__dirname, "frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    });
}*/
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(PORT, () => {
  connectDB();
  console.log("Server Started at http://localhost:5000");
});
