const equipmentLedger = {
  "1": { type: "PC", status: "CheckedOut", borrower: { name: "John Smith", email: "john@acme.org" }, dueDate: "11/30/2025" },
  "2": { type: "Laptop", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" },
  "3": { type: "Laptop", status: "CheckedOut", borrower: { name: "Jane Doe", email: "jane@acme.org" }, dueDate: "10/31/2025" },
  "4": { type: "iPad", status: "CheckedIn", borrower: { name: "", email: "" }, dueDate: "" }
};

function checkoutDevice(ledger, assetTag, borrower) {
  const updatedLedger = structuredClone(ledger);
  const device = updatedLedger[assetTag];

  if (!device) {
    return {
      ledger: updatedLedger,
      message: `Asset tag ${assetTag} was not found in the ledger.`
    };
  }

  if (device.status === "CheckedOut") {
    return {
      ledger: updatedLedger,
      message: `Asset tag ${assetTag} is already checked out.`
    };
  }

  device.borrower.name = borrower.name;
  device.borrower.email = borrower.email;
  device.status = "CheckedOut";

  return {
    ledger: updatedLedger,
    message: `Asset tag ${assetTag} has been checked out to ${borrower.name}.`
  };
}

function checkinDevice(ledger, assetTag) {
  const updatedLedger = structuredClone(ledger);
  const device = updatedLedger[assetTag];

  if (!device) {
    return {
      ledger: updatedLedger,
      message: `Asset tag ${assetTag} was not found in the ledger.`
    };
  }

  device.borrower.name = "";
  device.borrower.email = "";
  device.dueDate = "";
  device.status = "CheckedIn";

  return {
    ledger: updatedLedger,
    message: `Asset tag ${assetTag} has been checked in.`
  };
}

function parseDateToComparable(dateStr) {
  const [month, day, year] = dateStr.split("/").map(Number);
  const pad = (n) => String(n).padStart(2, "0");
  return `${year}${pad(month)}${pad(day)}`;
}

function listOverdueDevices(ledger, today) {
  const todayComparable = parseDateToComparable(today);

  const overdueDevices = Object.values(ledger).filter((device) => {
    if (device.status !== "CheckedOut") return false;
    return parseDateToComparable(device.dueDate) < todayComparable;
  });

  overdueDevices.sort(
    (a, b) =>
      parseDateToComparable(a.dueDate).localeCompare(parseDateToComparable(b.dueDate))
  );

  return overdueDevices;
}

function serializeLedger(ledger) {
  return JSON.stringify(ledger);
}

function loadLedger(json) {
  return JSON.parse(json);
}