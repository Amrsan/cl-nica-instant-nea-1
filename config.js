// =========================
// Supabase Configuration
// CLIENT-SAFE credentials only
// =========================
const SUPABASE_CONFIG = {
    url: 'https://djfbbxcvkwxwpkqqyjkr.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZmJieGN2a3d4d3BrcXF5amtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NjUzMDcsImV4cCI6MjA2MDU0MTMwN30.YYVIUX07RLhYhe7V-faBdN1n9jl7q7WnvSEFrxAboME'
};

// Export configuration globally
window.SUPABASE_CONFIG = SUPABASE_CONFIG;


// =========================
// PayMob Configuration
// CLIENT-SAFE values only
// 🔒 API secrets are stored in Supabase Edge Functions
// =========================
window.PAYMOB_CONFIG = {
    apiKey: 'ZXlKaGJHY2lPaUpJVXpVeE1pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmpiR0Z6Y3lJNklrMWxjbU5vWVc1MElpd2ljSEp2Wm1sc1pWOXdheUk2TVRBek9URTNOQ3dpYm1GdFpTSTZJakUzTlRjMU16STJNVGN1T0RReU16QXhJbjAuX2ZmQTA3X2VYYW9JM1JtLS1Qc3hJMkdidWE3d2w5a0o4cTJVRWlLV3lrSHN4WjNiSjZleEZBTkpBamVNa1cwMjJhdzNPZTg3ZkxSZmtlOTkyNWc3UUE=', // Replace with your API key
    integrationId: 5238766, // Replace with your integration ID
    iframeId: 915658,       // Replace with your iframe ID
    hmacSecret: 'CBA3CBDDEC037DEA0B4BD7249A9E977E' // Replace with your HMAC secret
};

// PayMob Callback URLs
window.PAYMOB_CALLBACK_URLS = {
    callbackUrl: window.location.origin + '/paymob-callback.html',
    successPageUrl: window.location.origin + '/success.html',
    failurePageUrl: window.location.origin + '/failure.html',
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
    callbackUrl: window.location.origin + '/forsa-callback.html',
    successPageUrl: window.location.origin + '/success.html',
    failurePageUrl: window.location.origin + '/failure.html',
};
