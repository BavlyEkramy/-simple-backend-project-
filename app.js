const fs = require("fs");
const yargs = require("yargs");
const data10 = require("./data10");

yargs.command({
  command: "add",
  describe: "to add item",
  builder: {
    id: {
      describe: "this is id description in read command ",
      demandOption: true,
      type: "string",
    },
    fname: {
      describe: "this is the first name description in add command",
      demandOption: true,
      type: "string",
    },
    lname: {
      describe: "this is the last name description in add command",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.addPerson(x.id, x.fname, x.lname, x.city, x.age);
  },
});

////////////////////////////////////////////////////////////////

yargs.command({
  command: "delete",
  describe: "to delete an item",
  builder: {
    id: {
      describe: "this is id description in read command ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.deleteData(x.id);
  },
});

////////////////////////////////////////////////////////////////

yargs.command({
  command: "read",
  describe: "to read an item",
  builder: {
    id: {
      describe: "this is id description in read command ",
      demandOption: true,
      type: "string",
    },
  },
  handler: (x) => {
    data10.readData(x.id);
  },
});

//////////////////////////////////////////////////////////////////

yargs.command({
  command: "list",
  describe: "to list data",
  handler: () => {
    data10.listData();
  },
});

yargs.parse();
