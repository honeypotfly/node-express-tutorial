const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved as id ${id}: ${name}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic `);
});

customEmitter.emit("response", "john", 34);
