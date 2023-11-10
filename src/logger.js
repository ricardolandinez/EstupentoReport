import winston from "winston"

const customFormat = winston.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]: ${message}`;
});

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        customFormat
    ),
    defaultMeta: {
        service: "Reporting Estupendo"
    },

    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: "logs/app.log"
        })
    ]
})

export default logger