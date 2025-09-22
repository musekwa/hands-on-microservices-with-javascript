
import mongoose from "mongoose";
const {Schema, model} = mongoose;

const accountSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        enum: ["root", "sub"],
        default: "root"
    },
    status: {
        type: String,
        enum: ["new", "active", "inactive", "blocked"],
        default: "new"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: Date,
}, {
    optimisticConcurrency: true
});

export default model("Account", accountSchema);