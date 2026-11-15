# Maison Mansoa — préparation du paiement Stripe / PayPal

## État actuel
Le site GitHub Pages reste une boutique vitrine avec panier et estimation des frais de livraison. **Aucun paiement n'est activé.** Le bouton de paiement reste désactivé.

Le dossier `functions/` est une base de travail Firebase Functions. Son point d'entrée retourne volontairement HTTP 503 : il ne crée **aucune** session Stripe, ne prend **aucun** paiement et ne stocke **aucune** donnée client. Ne pas déployer en production comme un tunnel de commande opérationnel.

## À terminer avant d'ouvrir les commandes
1. Identifier le projet Firebase et préparer l'hébergement sécurisé de la fonction (facturation Firebase éventuellement nécessaire).
2. Configurer les secrets Stripe **côté serveur uniquement**, jamais dans les fichiers GitHub Pages.
3. Reconstituer et vérifier côté serveur le catalogue (références, prix, disponibilité), sans faire confiance aux prix envoyés par le navigateur.
4. Valider les zones de livraison et les tarifs selon le pays réel, le transporteur et le poids total (articles + 25 g d'emballage). Bloquer les paniers de plus de 500 g et les destinations sans tarif validé.
5. Gérer la réservation des pièces uniques, les commandes et les stocks pour éviter les doubles ventes.
6. Créer la session Stripe Checkout avec uniquement les moyens de paiement effectivement activés et disponibles sur le compte Stripe (PayPal selon éligibilité).
7. Vérifier la signature du webhook Stripe, gérer l'idempotence des événements et ne marquer « payée » une commande qu'après confirmation serveur.
8. Tester les paiements acceptés/refusés, l'annulation, le retour au site, les montants, les frais de livraison et la disponibilité.
9. Mettre à jour les informations légales et la politique de confidentialité si nécessaire, puis activer explicitement le parcours de commande après validation.

**Ne jamais déposer de clé secrète Stripe ou de secret de webhook dans GitHub.**
