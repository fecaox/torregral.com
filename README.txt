TORREGRAL.COM - SITE STATIQUE

Contenu du dossier:
- index.html
- styles.css
- script.js
- CNAME
- robots.txt
- sitemap.xml
- .htaccess
- assets/

Mise en ligne rapide sur cPanel:
1. Zipper le contenu du dossier torregral.
2. Envoyer le zip dans public_html du domaine torregral.com.
3. Extraire le zip.
4. Verifier que index.html est directement a la racine du dossier public du domaine, et non dans un sous-dossier torregral/torregral.

Mise en ligne via GitHub Pages:
1. Creer un depot GitHub nomme par exemple torregral.com.
2. Envoyer le contenu de ce dossier dans le depot.
3. Dans GitHub: Settings > Pages > Deploy from a branch > main > /root.
4. Dans Settings > Pages > Custom domain: www.torregral.com.
5. Verifier que le fichier CNAME contient www.torregral.com.
6. Dans la zone DNS du domaine:
   - CNAME: www -> ton-identifiant.github.io
   - Optionnel pour le domaine racine torregral.com: ajouter les A records GitHub Pages.

Lien de paiement:
Le bouton de commande pointe actuellement vers contact@cafeintegral.fr.
Quand le lien Stripe Torrégral est pret, remplacer dans index.html:
mailto:contact@cafeintegral.fr?subject=Commande%20Torr%C3%A9gral
par l'URL Stripe.

Securite:
Le fichier .htaccess ajoute des en-tetes de securite et coupe l'indexation des dossiers sur un hebergement Apache/cPanel.
GitHub Pages ignore ce fichier, mais il ne gene pas le site.
