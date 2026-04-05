import mongoose from "mongoose";
const LinkSchema = new mongoose.Schema({
	actualLink: {
		type: String,
		required: [true, "Actual URL is need to be shrinked."],
	},
	shrinkedLink: {
		type: String,
		required: [true, "Enter a text by which you are shrinking your link with."],
	},
});

export default mongoose.model("LINK", LinkSchema, "links");
