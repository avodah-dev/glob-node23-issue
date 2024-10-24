// worker.js

console.log("Worker started");

setInterval(() => {
  console.log("Worker is doing some background work...");
  // Perform any background task here (e.g., checking a database, processing a queue, etc.)
}, 5000); // This will run every 5 seconds
