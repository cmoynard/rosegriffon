const https = require("https");

// Configuration
const sitemapUrl = "https://rosegriffon.fr/sitemap.xml";
const searchEngines = [
  {
    name: "Google",
    url: `https://www.google.com/ping?sitemap=${encodeURIComponent(
      sitemapUrl
    )}`,
  },
  {
    name: "Bing",
    url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
  },
];

/**
 * Soumet le sitemap à un moteur de recherche
 * @param {Object} searchEngine - Le moteur de recherche cible
 * @returns {Promise} - Une promesse résolue avec le résultat de la soumission
 */
function submitSitemap(searchEngine) {
  return new Promise((resolve, reject) => {
    console.log(`Soumission du sitemap à ${searchEngine.name}...`);

    https
      .get(searchEngine.url, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            console.log(
              `✅ Sitemap soumis avec succès à ${searchEngine.name} (Status: ${res.statusCode})`
            );
            resolve({ success: true, searchEngine: searchEngine.name });
          } else {
            console.error(
              `❌ Échec de la soumission à ${searchEngine.name} (Status: ${res.statusCode})`
            );
            reject({
              success: false,
              searchEngine: searchEngine.name,
              statusCode: res.statusCode,
            });
          }
        });
      })
      .on("error", (err) => {
        console.error(
          `❌ Erreur lors de la soumission à ${searchEngine.name}: ${err.message}`
        );
        reject({
          success: false,
          searchEngine: searchEngine.name,
          error: err.message,
        });
      });
  });
}

/**
 * Fonction principale qui soumet le sitemap à tous les moteurs de recherche
 */
async function submitToAllSearchEngines() {
  console.log(`🚀 Début de la soumission du sitemap: ${sitemapUrl}`);

  const results = [];

  for (const searchEngine of searchEngines) {
    try {
      const result = await submitSitemap(searchEngine);
      results.push(result);
    } catch (error) {
      results.push(error);
    }
  }

  console.log("\n📊 Résumé des soumissions:");
  const successful = results.filter((r) => r.success).length;
  console.log(`✅ Réussies: ${successful}/${searchEngines.length}`);
  console.log(
    `❌ Échouées: ${searchEngines.length - successful}/${searchEngines.length}`
  );

  if (successful === searchEngines.length) {
    console.log("🎉 Toutes les soumissions ont réussi!");
  } else {
    console.log(
      "⚠️ Certaines soumissions ont échoué. Vérifiez les erreurs ci-dessus."
    );
  }
}

// Exécution
submitToAllSearchEngines().catch((err) => {
  console.error("Erreur inattendue:", err);
  process.exit(1);
});
