import { Sequelize } from 'sequelize';
import dotenv from "dotenv"; // Credentials

// Kalder miljø vars
dotenv.config();

const sequelize = new Sequelize(
	process.env.DB_NAME, 
	process.env.DB_USER, 
	process.env.DB_PASSWORD, {
  		host: process.env.DB_HOST, dialect: 'mysql'
	}
);

export { sequelize }