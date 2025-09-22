import Joi from 'joi';
import dotenv from 'dotenv';

const envVarsSchema = Joi.object()
    .keys({
        PORT: Joi.number().default(3001),
        MONGO_URL: Joi.string().required().description('Mongo DB url'),
    })
    .unknown();
function createConfig(configPath){
    dotenv.config({path: configPath});
    const {error, value: envVars} = envVarsSchema
        .prefs({
                errors: {label: 'key'}
            })
        .validate(process.env);
    
    if (error) {
        throw new Error(`Config validation error: ${error.message}`);
    }
    return {
        port: envVars.PORT,
        mongo: {
            url: envVars.MONGO_URL
        }
    };
}

export {createConfig};
