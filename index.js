const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
dotenv.config( { path : '.env'} )
app.use(express.json());
const PORT = process.env.PORT || 8080

//mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
})
.then(console.log("connected to Mongoo"))
.catch((err) => console.log(err));


// routes
app.use("api/auth", authRoute);

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});