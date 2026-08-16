const truthCheck = (anArrayOfObjects, propertyName) => {
  let propertyArray = anArrayOfObjects.map((obj) => obj[propertyName]);
  for (let item of propertyArray) if (!item) return false;
  return true;
};
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");