import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { amount, paymentMethods, serviceName, bookingId, patientName, phone, callbackUrl } = await req.json();

    const paymobSecretKey = Deno.env.get("PAYMOB_SECRET_KEY");
    if (!paymobSecretKey) {
      throw new Error("PAYMOB_SECRET_KEY is not configured in Supabase Edge Functions");
    }

    const nameParts = (patientName || "NA").split(" ");

    const res = await fetch("https://accept.paymob.com/v1/intention/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${paymobSecretKey}`
      },
      body: JSON.stringify({
        amount,
        currency: "EGP",
        payment_methods: paymentMethods,
        items: [{
          name: serviceName,
          amount: amount,
          description: `Medical booking – ${serviceName}`,
          quantity: 1
        }],
        billing_data: {
          first_name: nameParts[0] || "NA",
          last_name: nameParts.slice(1).join(" ") || "NA",
          phone_number: phone || "NA",
          email: "booking@instaclinic.com",
          apartment: "NA",
          floor: "NA",
          street: "NA",
          building: "NA",
          city: "Cairo",
          country: "EG",
          state: "Cairo",
          postal_code: "NA",
          shipping_method: "NA"
        },
        special_reference: String(bookingId),
        notification_url: callbackUrl,
        redirection_url: callbackUrl
      })
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error("Intention API failed: " + (data.detail || data.message || JSON.stringify(data)));
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error?.message || String(error) }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
