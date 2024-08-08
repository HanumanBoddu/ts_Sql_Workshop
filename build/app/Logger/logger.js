"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(), winston_1.format.printf(({ timestamp, level, message }) => `[${timestamp} ${level}: ${message}]`)),
    transports: [new winston_1.transports.File({
            dirname: 'logs',
            filename: 'error.log',
            level: 'error'
        }),
        new winston_1.transports.File({
            dirname: 'logs',
            level: 'info',
            filename: 'info.log',
        })
    ]
});
exports.default = logger;
