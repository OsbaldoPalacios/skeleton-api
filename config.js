require('dotenv').config()

const config = {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'dev', // dev, prod, test
    db: {
        dev: {
            dialect: 'postgres',
            host: process.env.DB_DEV_HOST,
            port: process.env.DB_DEV_PORT,
            database: process.env.DB_DEV_NAME,
            username: process.env.DB_DEV_USER,
            password: process.env.DB_DEV_PASS,
            //Extra configs
            define: {
                timestamps: true,
                underscored: true
            }
        },
        prod: {
            dialect: 'postgres',
            host: process.env.DB_PROD_HOST,
            port: process.env.DB_PROD_PORT,
            database: process.env.DB_PROD_NAME,
            username: process.env.DB_PROD_USER,
            password: process.env.DB_PROD_PASS,
        //Extra configs
            define: {
                timestamps: true,
                underscored: true
            },
        //Esta configuración es para producción
            dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
            },
            test: {
                dialect: 'postgres',
                dialect: 'postgres',
                host: process.env.DB_TEST_HOST,
                port: process.env.DB_TEST_PORT,
                database: process.env.DB_TEST_NAME,
                username: process.env.DB_TEST_USER,
                password: process.env.DB_TEST_PASS,
                //Extra configs
                define: {
                    timestamps: true,
                    underscored: true
                }
            }
        }
    };

module.exports = config;