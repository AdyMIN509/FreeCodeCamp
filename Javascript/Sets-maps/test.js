let request = indexedDB.open("Sample DB", 1);

request.onerror = function(event) {
  console.log("Error opening database");
};

request.onsuccess = function(event) {
  let db = event.target.result;
  console.log("Database opened successfully");
};