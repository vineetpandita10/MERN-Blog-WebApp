const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const authRoute = require("./routes/auth")
const authUser = require("./routes/user")
const authPost = require("./routes/posts")
const authCat = require("./routes/categories")
const cors = require("cors")

dotenv.config()
app.use(express.json())

app.use(cors())

app.use("/images", express.static(path.join(__dirname, "/images")))

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err))

const storage = multer.diskStorage({
  destination: (req, file, callb) => {
    callb(null, "images")
  },
  filename: (req, file, callb) => {
    callb(null, req.body.name)
  },
})
const upload = multer({ storage: storage })
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded")
})

app.use("/auth", authRoute)
app.use("/users", authUser)
app.use("/posts", authPost)
app.use("/category", authCat)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log("backend running...")
})
