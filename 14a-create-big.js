const { writeFileSync, createReadStream } = require("fs");
for (let i = 1; i < 1000; i++) {
  writeFileSync("./content/big.txt", `Hello World: ${i}\n`, { flag: "a" });
}