# PayMob Integration Setup Guide

## 1. PayMob Account Setup

1. **Create PayMob Account**
   - Go to [PayMob Portal](https://accept.paymob.com/portal2/en/register)
   - Register for a new account
   - Complete the verification process

2. **Get Your Credentials**
   - Login to your PayMob dashboard
   - Go to **Settings** → **Account Info** to get your **API Key**
   - Go to **Developers** → **Payment Integrations** to get your **Integration ID**
   - Go to **Developers** → **iframes** to create and get your **iframe ID**
   - Note down your **HMAC Secret** from Payment Integrations

## 2. Configuration

1. **Update config.js**
   ```javascript
   window.PAYMOB_CONFIG = {
       apiKey: 'YOUR_ACTUAL_API_KEY_HERE',
       integrationId: YOUR_INTEGRATION_ID_NUMBER,
       iframeId: YOUR_IFRAME_ID_NUMBER,
       hmacSecret: 'YOUR_HMAC_SECRET_HERE'
   };
   ```

2. **Set Callback URLs in PayMob Dashboard**
   - Go to **Developers** → **Payment Integrations**
   - Set **Success URL**: `https://yourdomain.com/paymob-callback.html`
   - Set **Failure URL**: `https://yourdomain.com/paymob-callback.html`
   - Set **Pending URL**: `https://yourdomain.com/paymob-callback.html`

## 3. Database Updates

Add these fields to your `bookings` table:

```sql
ALTER TABLE bookings ADD COLUMN transaction_id VARCHAR(255);
ALTER TABLE bookings ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

-- Update status enum to include new payment statuses
ALTER TABLE bookings MODIFY COLUMN status ENUM(
    'pending_payment', 
    'paid', 
    'payment_failed', 
    'confirmed', 
    'completed', 
    'cancelled'
) DEFAULT 'pending_payment';
```

## 4. File Structure

Ensure you have these files in your project:
- `registration.html` (updated with PayMob integration)
- `success.html` (new success page)
- `failure.html` (new failure page)
- `paymob-callback.html` (new callback handler)
- `config.js` (updated with PayMob config)

## 5. Testing

1. **Test Mode**
   - PayMob provides test cards for testing
   - Use these test card numbers:
     - **Successful Payment**: 4987654321098769
     - **Failed Payment**: 4000000000000002

2. **Test Flow**
   - Fill the registration form
   - Submit to initiate payment
   - Use test card details
   - Verify success/failure pages work correctly

## 6. Production Deployment

1. **SSL Certificate**
   - Ensure your website has a valid SSL certificate
   - PayMob requires HTTPS for production

2. **Domain Verification**
   - Add your production domain to PayMob dashboard
   - Update callback URLs to production URLs

3. **Live Credentials**
   - Replace test credentials with live credentials
   - Test with small amounts first

## 7. Security Considerations

1. **HMAC Verification**
   - Always verify HMAC signatures
   - Implement server-side HMAC verification for production

2. **Sensitive Data**
   - Never expose API keys in client-side code in production
   - Consider using environment variables
   - Implement proper authentication for your backend

## 8. Troubleshooting

**Common Issues:**

1. **"Integration not found"**
   - Check your Integration ID
   - Ensure integration is active in PayMob dashboard

2. **"Invalid API Key"**
   - Verify your API key is correct
   - Check if account is verified

3. **Callback not working**
   - Verify callback URLs in PayMob dashboard
   - Check browser console for errors
   - Ensure HTTPS is used

4. **Payment success but booking not updated**
   - Check Supabase permissions
   - Verify database connection
   - Check browser console for errors

## 9. Support

- **PayMob Support**: [support@paymob.com](mailto:support@paymob.com)
- **PayMob Documentation**: [https://docs.paymob.com/](https://docs.paymob.com/)
- **PayMob Developer Portal**: [https://developers.paymob.com/](https://developers.paymob.com/) 