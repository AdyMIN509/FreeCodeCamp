function whatIsInAName(collection, source) {
   const sourceKeys = Object.keys(source);
   return collection.filter(function (obj) {
     return sourceKeys.every(function (key) {
       return obj[key] === source[key];
     });
   });
}