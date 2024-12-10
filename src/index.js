import express from "express"
const app = express();

const port = 2000;
app.get("/", (req,res) => {
    res.status(200).json({
        type : "success"
    })
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})