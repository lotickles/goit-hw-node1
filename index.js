// const { Command } = require("commander");
import { Command } from "commander";
const program = new Command();
import {
  getContactById,
  listContacts,
  removeContact,
  addContact,
} from "./contact.js";

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone")
  .allowUnknownOption(true);

program.parse(process.argv);

const argv = program.opts();

// console.log(argv);

// TODO: refactor
const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const constactsById = await getContactById(id);
      console.table(constactsById);
      break;

    case "add":
      const addNewContact = await addContact({ name, email, phone });
      console.table(addNewContact);
      break;

    case "remove":
      const deletedContact = await removeContact(id);
      console.log(deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
