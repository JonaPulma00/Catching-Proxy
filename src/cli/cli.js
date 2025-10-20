#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("cli-test")
  .description("CLI app for testing commander.js")
  .version("1.0.0")
  .option("-d, --debug", "output extra debussing information")
  .option("-t, --timeout <seconds>", "specify the timeout in seconds", "60")
  .command("list")
  .description("List all items")
  .action(() => {
    console.log("Listing items...");
  });

program.parse(process.argv);

const options = program.opts();

if (options.debug) {
  console.log("You entered debug mode!");
  console.log("Options: ", options);
}
