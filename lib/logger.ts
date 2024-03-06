import chalk, { Chalk } from "chalk";
import log from "loglevel";
import prefix from "loglevel-plugin-prefix";

type LogLevel = "TRACE" | "DEBUG" | "INFO" | "WARN" | "ERROR";

type LogLevelColors = {
  [level in LogLevel]: Chalk;
};

const colors = {
  TRACE: chalk.magenta,
  DEBUG: chalk.cyan,
  INFO: chalk.blue,
  WARN: chalk.yellow,
  ERROR: chalk.red,
};

if (process.env.NODE_ENV == "development") {
  log.setLevel("debug");
}

prefix.reg(log);

prefix.apply(log, {
  format(
    level: string,
    name: string | undefined,
    timestamp: Date,
  ): string | undefined {
    if (
      !["TRACE", "DEBUG", "INFO", "WARN", "ERROR"].includes(level.toUpperCase())
    ) {
      return undefined;
    }
    const logLevel: LogLevel = level.toUpperCase() as LogLevel;
    return `${chalk.gray(`[${timestamp}]`)} ${colors[logLevel](logLevel)} ${chalk.green(`${name}:`)}`;
  },
});

export { log as logger };
