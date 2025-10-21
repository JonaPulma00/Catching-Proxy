#!/usr/bin/env node

import { Command } from "commander";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
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

if (options.debug) {
  console.log("You entered debug mode!");
  console.log("Options: ", options);
}
