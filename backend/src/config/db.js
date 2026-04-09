const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    let uri = process.env.MONGO_URI;
    
    if (!uri || !uri.startsWith('mongodb')) {
      console.log('\n======================================================');
      console.log('⏳ Skipping Cloud DB and booting an invisible testing database Instead...');
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongoServer = await MongoMemoryServer.create();
      uri = mongoServer.getUri();
      console.log('✅ Invisible Testing Database Running at: ' + uri);
      console.log('======================================================\n');
    }
    
    await mongoose.connect(uri);
    console.log('✅ MongoDB Connected successfully!');
  } catch (err) {
    console.error("MongoDb error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;