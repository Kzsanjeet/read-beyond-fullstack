import connectToDatabase from "./controller/dbConnect";
import app from "./app";
// Load environment variables from .env
// Invoke the database connection
connectToDatabase();


app.get("/", (req, res) => {
  res.send("Hello World");
});


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
