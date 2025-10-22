#!/usr/bin/env node
import { Command } from "commander";
import { ServerOpts } from "../interfaces/options.js";



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

program.parse(process.argv);

const options = program.opts();


export const serverOptions: ServerOpts= {
  portNumber : options.port,
  url: options.origin
}
const main = async () => {
  try {
    if (options.port) {
      console.log("Starting the server...");
      await sleep();
      console.log(serverOptions.portNumber)
      console.log("testing")
    }
  } catch (error: any) {
    console.log("Error while trying to start the server: ", error);
  }
};

main();
