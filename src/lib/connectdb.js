import mongoose from "mongoose"

export default async () => {
    try {
        const dbOptions = {
            dbName: "",
            user: "",
            pass: "",
            authSource: "",
        }
        await mongoose.connect(process.env.DBLINK).then((res) => { console.log("DB Connected") }).catch(error => console.log("error"))
    }
    catch (error) {
        console.log(error, "---------------error---------------");
    }
}