# Guide du Sitemap pour RoseGriffon.fr

Ce document explique comment le sitemap du site RoseGriffon.fr est configuré, comment le maintenir et comment le soumettre aux moteurs de recherche.

## Vue d'ensemble

Le sitemap est un fichier XML qui liste toutes les pages importantes de votre site web. Il aide les moteurs de recherche à découvrir et à indexer votre contenu plus efficacement. Notre sitemap est généré automatiquement par Next.js.

## Fichiers importants

- `src/app/sitemap.ts` : Génère automatiquement le sitemap XML
- `src/app/robots.ts` : Génère le fichier robots.txt qui indique l'emplacement du sitemap
- `scripts/submit-sitemap.js` : Script pour soumettre le sitemap aux moteurs de recherche

## Comment ça fonctionne

1. Le fichier `sitemap.ts` génère automatiquement un sitemap XML lors de la construction du site
2. Le sitemap est accessible à l'adresse `https://rosegriffon.fr/sitemap.xml`
3. Le fichier robots.txt (accessible à `https://rosegriffon.fr/robots.txt`) indique l'emplacement du sitemap aux robots des moteurs de recherche

## Soumission manuelle du sitemap aux moteurs de recherche

Le script automatique de soumission peut parfois échouer. Voici comment soumettre manuellement votre sitemap :

### Google Search Console

1. Créez un compte Google si vous n'en avez pas déjà un
2. Accédez à [Google Search Console](https://search.google.com/search-console)
3. Cliquez sur "Commencer maintenant" ou connectez-vous à votre compte
4. Ajoutez votre propriété en utilisant l'option "Préfixe d'URL" et entrez `https://rosegriffon.fr`
5. Vérifiez la propriété (plusieurs méthodes disponibles) :
   - Via Google Analytics (si déjà configuré)
   - Via une balise HTML (à ajouter dans la section head du site)
   - Via le fournisseur de nom de domaine
6. Une fois vérifié, allez dans la section "Sitemaps" dans le menu de gauche
7. Entrez `sitemap.xml` dans le champ et cliquez sur "Envoyer"
8. Vous devriez voir un message de succès en vert

### Bing Webmaster Tools

1. Accédez à [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Connectez-vous avec un compte Microsoft, Google ou Facebook
3. Cliquez sur "Ajouter votre site" et entrez `https://rosegriffon.fr`
4. Vérifiez votre site en utilisant l'une des méthodes proposées (similaires à Google)
5. Une fois vérifié, allez dans la section "Sitemaps" dans le menu
6. Cliquez sur "Soumettre un sitemap", entrez `sitemap.xml` et cliquez sur "Soumettre"

## Maintenance du sitemap

Le sitemap est généré automatiquement à chaque déploiement du site. Si vous ajoutez de nouvelles pages ou sections au site, assurez-vous de les ajouter également dans le fichier `sitemap.ts` pour qu'elles soient incluses dans le sitemap.

## Vérification du sitemap

Pour vérifier que votre sitemap est correctement généré et accessible :

1. Visitez `https://rosegriffon.fr/sitemap.xml` dans votre navigateur
2. Le fichier doit s'afficher correctement et contenir toutes les URLs importantes du site
3. Vérifiez que chaque URL est complète (avec le protocole https://) et correcte
4. Vérifiez que les attributs lastmod, changefreq et priority sont présents et pertinents

## Résolution des problèmes

Si vous rencontrez des problèmes avec le sitemap :

1. Vérifiez que le fichier `sitemap.ts` est correctement configuré
2. Assurez-vous que le site est correctement déployé
3. Vérifiez que le fichier sitemap.xml est accessible publiquement
4. Dans Google Search Console ou Bing Webmaster Tools, vérifiez s'il y a des erreurs signalées pour le sitemap

## Ajouter de nouvelles pages au sitemap

Lorsque vous ajoutez une nouvelle page au site, vous devez l'ajouter au sitemap pour qu'elle soit correctement indexée. Pour cela :

1. Ouvrez le fichier `src/app/sitemap.ts`
2. Ajoutez une nouvelle entrée dans le tableau `staticPages` avec l'URL de la page, la date de dernière modification, la fréquence de changement et la priorité

Exemple :

```typescript
{
  url: `${baseUrl}/nouvelle-page`,
  lastModified: new Date(),
  changeFrequency: 'weekly' as const,
  priority: 0.8,
}
```

## Pages dynamiques

Si vous ajoutez des pages dynamiques (comme des articles de blog ou des événements), vous devrez modifier le fichier `sitemap.ts` pour générer dynamiquement ces entrées. Un exemple commenté est déjà présent dans le fichier.

## Soumettre le sitemap aux moteurs de recherche

Après avoir mis à jour votre sitemap, vous pouvez le soumettre manuellement aux moteurs de recherche :

```bash
npm run submit-sitemap
```

Ce script soumet automatiquement votre sitemap à Google et Bing.

## Bonnes pratiques

1. **Maintenez votre sitemap à jour** : Assurez-vous que toutes les pages importantes sont incluses
2. **Respectez les priorités** : Utilisez des valeurs de priorité cohérentes (1.0 pour la page d'accueil, 0.8-0.9 pour les pages importantes, 0.6-0.7 pour les pages secondaires)
3. **Fréquence de changement appropriée** : Utilisez une fréquence qui correspond à la réalité de mise à jour de vos pages
4. **Soumettez après des modifications importantes** : Soumettez votre sitemap après avoir ajouté plusieurs nouvelles pages

## Vérification dans Google Search Console

1. Connectez-vous à [Google Search Console](https://search.google.com/search-console)
2. Sélectionnez votre propriété
3. Dans le menu de gauche, allez dans "Index" > "Sitemaps"
4. Vérifiez que votre sitemap est correctement soumis et sans erreurs

## Ressources utiles

- [Documentation Next.js sur les sitemaps](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Guide Google sur les sitemaps](https://developers.google.com/search/docs/advanced/sitemaps/overview)
- [Outil de test de sitemap de Google](https://search.google.com/search-console/sitemaps)
