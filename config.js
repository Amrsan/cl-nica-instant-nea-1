// =========================
// Supabase Configuration
// CLIENT-SAFE credentials only
// =========================
const SUPABASE_CONFIG = {
  url: "https://djfbbxcvkwxwpkqqyjkr.supabase.co",
  anonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZmJieGN2a3d4d3BrcXF5amtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NjUzMDcsImV4cCI6MjA2MDU0MTMwN30.YYVIUX07RLhYhe7V-faBdN1n9jl7q7WnvSEFrxAboME",
};

// Export configuration globally
window.SUPABASE_CONFIG = SUPABASE_CONFIG;

// =========================
// PayMob Configuration
// CLIENT-SAFE values only
// 🔒 API secrets are stored in Supabase Edge Functions
// =========================
window.PAYMOB_CONFIG = {
  // ── Unified Checkout (Intention API) ──────────────────────────────────────
  // Get these from PayMob Dashboard → Developers → API Keys
  secretKey:
    "YOUR_PAYMOB_SECRET_KEY", // Replace with your secret key from PayMob Dashboard
  publicKey: "egy_pk_live_uwz00OkjQskEbnAitNj4ej8nBgGnLdeA",

  // ── Payment integrations ──────────────────────────────────────────────────
  // Add each method's Integration ID from:
  // PayMob Dashboard → Developers → Payment Integrations
  integrationId: 5155564, // Card / Credit-Debit
  //   applePayIntegrationId: 5551502, // Apple Pay  (replace null with your ID)
  forsaIntegrationId: 5238766, // Forsa BNPL (replace null with your ID)

  // ── Legacy / HMAC ─────────────────────────────────────────────────────────
  hmacSecret: "CBA3CBDDEC037DEA0B4BD7249A9E977E", // Replace with your HMAC secret
};

// PayMob Callback URLs
window.PAYMOB_CALLBACK_URLS = {
  callbackUrl: window.location.origin + "/paymob-callback.html",
  successPageUrl: window.location.origin + "/success.html",
  failurePageUrl: window.location.origin + "/failure.html",
};

// =========================
// Forsa Configuration
// CLIENT-SAFE values only
// 🔒 API secrets (merchant secret keys, etc.) must stay on backend
// =========================
window.FORSA_CONFIG = {
  merchantId: 5238766, // Replace with your real live merchant ID
  // If Forsa provides iframeId, integrationId, etc. add them here
};

// Forsa Callback URLs
window.FORSA_CALLBACK_URLS = {
  callbackUrl: window.location.origin + "/forsa-callback.html",
  successPageUrl: window.location.origin + "/success.html",
  failurePageUrl: window.location.origin + "/failure.html",
};
