import mongoose from 'mongoose'
export default async function connectDatabase(){
    mongoose.connect(process.env.MONGOFULL_URI).then(()=>{
        console.log("connected to database successfully.")
    }).catch((e)=>{
        console.log("something went wrong details :>\n" + e.message)
    })
}