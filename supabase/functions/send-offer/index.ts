import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authorization = request.headers.get("Authorization");
    if (!authorization) throw new Error("Missing authorization");

    const publishableKeys = JSON.parse(Deno.env.get("SUPABASE_PUBLISHABLE_KEYS") || "{}");
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      publishableKeys.default,
      { global: { headers: { Authorization: authorization } } },
    );
    const { data: auth, error: authError } = await supabase.auth.getUser();
    if (authError || !auth.user) throw new Error("Unauthorized");

    const { to, customerName, quoteNumber, language, signedUrl } = await request.json();
    if (!to || !quoteNumber || !signedUrl) throw new Error("Missing email data");

    const copy = {
      de: {
        subject: `Ihr Kostenvoranschlag ${quoteNumber}`,
        greeting: `Guten Tag ${customerName || ""},`,
        body: "über den folgenden sicheren Link können Sie Ihren Kostenvoranschlag öffnen:",
        expiry: "Der Link ist sieben Tage gültig.",
      },
      en: {
        subject: `Your quotation ${quoteNumber}`,
        greeting: `Hello ${customerName || ""},`,
        body: "You can open your quotation using the following secure link:",
        expiry: "The link is valid for seven days.",
      },
      es: {
        subject: `Su presupuesto ${quoteNumber}`,
        greeting: `Hola ${customerName || ""},`,
        body: "Puede abrir su presupuesto mediante el siguiente enlace seguro:",
        expiry: "El enlace es válido durante siete días.",
      },
    }[language === "en" || language === "es" ? language : "de"];

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: "pdr@deliestry.com",
        pass: Deno.env.get("STRATO_SMTP_PASSWORD"),
      },
    });

    await transporter.sendMail({
      from: '"DELIESTRY PDR" <pdr@deliestry.com>',
      to,
      subject: copy.subject,
      text: `${copy.greeting}\n\n${copy.body}\n${signedUrl}\n\n${copy.expiry}\n\nDELIESTRY PDR`,
      html: `<p>${copy.greeting}</p><p>${copy.body}</p><p><a href="${signedUrl}">${signedUrl}</a></p><p>${copy.expiry}</p><p>DELIESTRY PDR</p>`,
    });

    return Response.json({ success: true }, { headers: corsHeaders });
  } catch (error) {
    return Response.json(
      { success: false, error: error instanceof Error ? error.message : String(error) },
      { status: 400, headers: corsHeaders },
    );
  }
});
