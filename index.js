const dotenv = require('dotenv')
const connectToDatabase = require('./src/database/conncet')

dotenv.config();

connectToDatabase();


require('./modules/express')