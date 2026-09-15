function contientAdjacenceLineaire(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // Détecte toute valeur adjacente séquentielle (ex: 3 suivi de 4, ou 8 suivi de 7)
    if (Math.abs(arr[i] - arr[i + 1]) === 1) {
      return true;
    }
  }
  return false;
}

function melangerFisherYates(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function obtenir20ArrangementsAleatoires(n = 10) {
  const tousLesArrangements = [];
  const visites = new Array(n + 1).fill(false);

  // 1. Génération de TOUS les arrangements via DFS
  function dfs(cheminActuel) {
    if (cheminActuel.length === n) {
      tousLesArrangements.push([...cheminActuel]);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visites[i]) {
        visites[i] = true;
        cheminActuel.push(i);

        dfs(cheminActuel);

        cheminActuel.pop();
        visites[i] = false;
      }
    }
  }

  console.time("Génération DFS");
  dfs([]);
  console.timeEnd("Génération DFS");
  console.log(`Total d'arrangements générés : ${tousLesArrangements.length}`);

  // 2. Filtrage : exclusion de tout arrangement ayant une adjacence linéaire
  const arrangementsValides = tousLesArrangements.filter(
    (arr) => !contientAdjacenceLineaire(arr)
  );
  console.log(`Arrangements valides après filtre : ${arrangementsValides.length}`);

  // 3. Mélange aléatoire de l'ensemble filtré
  melangerFisherYates(arrangementsValides);

  // 4. Sélection des 20 premiers éléments du tableau mélangé
  return arrangementsValides.slice(0, 21);
}

// Exécution
const resultat = obtenir20ArrangementsAleatoires(10);
console.log("\n20 arrangements tirés au hasard :");
console.log(JSON.stringify(resultat));