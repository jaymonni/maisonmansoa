"use strict";
// Maison Mansoa — préparation serveur Stripe (aucune vente ouverte).
// Déploiement volontairement bloqué tant que le catalogue, les destinations,
// les stocks et le webhook ne sont pas reliés et testés.
const { onRequest } = require("firebase-functions/v2/https");

exports.createCheckoutSession = onRequest(
  { region: "europe-west1", cors: false, invoker: "private" },
  (_req, res) => {
    res.set("Cache-Control", "no-store");
    res.status(503).json({
      error: "CHECKOUT_NOT_READY",
      message: "Les commandes Maison Mansoa ne sont pas encore ouvertes."
    });
  }
);

// Ne jamais déclarer une commande payée sur la seule base d'une redirection
// navigateur : un webhook Stripe vérifié devra confirmer le paiement.
