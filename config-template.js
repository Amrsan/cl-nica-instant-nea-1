// Supabase Configuration
// This file contains sensitive credentials and should not be committed to version control

const SUPABASE_CONFIG = {
    url: 'YOUR_SUPABASE_URL_HERE',
    anonKey: 'YOUR_SUPABASE_ANON_KEY_HERE'
};

// Export configuration for use in other files
window.SUPABASE_CONFIG = SUPABASE_CONFIG;

// PayMob Configuration
// You need to get these values from your PayMob dashboard
window.PAYMOB_CONFIG = {
    // Get this from PayMob Dashboard -> Settings -> Account Info
    apiKey: 'YOUR_API_KEY_HERE',
    
    // Get this from PayMob Dashboard -> Developers -> Payment Integrations
    integrationId: 'YOUR_INTEGRATION_ID_HERE',
    
    // Get this from PayMob Dashboard -> Developers -> iframes
    iframeId: 'YOUR_IFRAME_ID_HERE',
    
    // Get this from PayMob Dashboard -> Developers -> Payment Integrations -> HMAC
    hmacSecret: 'YOUR_HMAC_SECRET_HERE'
};

// PayMob Callback URLs Configuration
// These URLs will be used when redirecting from PayMob payment
// IMPORTANT: Set these EXACT URLs in your PayMob dashboard under Payment Integrations
window.PAYMOB_CALLBACK_URLS = {
    // Main callback handler - this should match what's configured in PayMob dashboard
    callbackUrl: window.location.origin + '/paymob-callback.html',
    
    // Where to redirect after processing
    successPageUrl: window.location.origin + '/success.html',
    failurePageUrl: window.location.origin + '/failure.html',
    
    // Alternative: You can set specific URLs if needed
    // callbackUrl: window.location.origin + '/paymob-callback.html?type=callback',
}; 