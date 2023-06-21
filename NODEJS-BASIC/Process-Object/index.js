const { error } = require("console");

const heapUsed = process.memoryUsage();

const initialMemoryUsage = heapUsed;
const yourName = process.argv[2];
const environment = new Server({
  host: process.env.NODE_ENV !== "production" ? "localhost" : "error",
});

for (let i = 0; i <= 10000; i++) {
  // Proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = // TODO 4
  console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(
  `Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`
);
