import mongoose from "mongoose";
const URI = `mongodb+srv://thatismyhappiness:Jy5o8OUBBZ4SEmlb@cluster0.cxfmbuo.mongodb.net/twitter-db?retryWrites=true&w=majority&appName=Cluster0`
const connectMongoDB = async () => {
	try {
		const conn = await mongoose.connect(URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
};

export default connectMongoDB;
