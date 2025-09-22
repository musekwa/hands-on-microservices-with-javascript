import db from "mongoose";
let mongoUrl;
async function connect({
    mongo: {url}
}) {
    mongoUrl = url;
    try{
        await db.connect(mongoUrl);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}

const dbConnection = db.connection;
function disconnect() {
    dbConnection.removeAllListeners();
    return db.disconnect();
}
export default {connect, disconnect, db};