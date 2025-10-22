#!/usr/bin/env node

import { Command } from "commander";
import { createSpinner } from "nanospinner";

const program = new Command();

const sleep = (ms = 2000) =>
  new Promise((r) => {
    setTimeout(r, ms);
  });

program
  .name("catching-proxy")
  .description("Catching proxy ")
  .version("1.0.0")
  .option(
    "-p, --port <number>",
    "specify the port number you want the express server running on (default value is 3000)",
    "3000"
  )
  .option("-o, --origin <url>", "specify the url you want the proxy to catch");
// .command("list")
// .description("List all items")
// .action(async () => {
//   console.log(chalk.bgGreen("Listing items..."));
//   createSpinner("wait a second").start();
//   await sleep();
//   console.log("Done!");
// });

program.parse(process.argv);

const options = program.opts();

const startServer = async () => {
  try {
    if (options.port) {
      createSpinner("Starting the server...").start();
      await sleep();
      createSpinner("Server started correctly").success();
      console.log("Options: ", options);
    }
  } catch (error: any) {
    console.log(
      createSpinner("Error while trying to start the server: ", error).error()
    );
  }
};

startServer();
