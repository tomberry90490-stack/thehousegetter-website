/* =========================================================
   SITE SETTINGS — edit these values, they update every page.
   ========================================================= */
const SITE = {
  company: "The House Getter",           // Brand name shown on the site
  legalName: "BerryWH24 LLC",            // Legal entity name (privacy / terms)
  phone: "(771) 271-9507",
  email: "tom@thehousegetter.com",
  city: "Washington",
  state: "DC",
  serviceArea: "Washington, DC & Maryland",
  address: "1717 N Street NW, Ste 1, Washington, DC 20036",
  hours: "Mon–Sat, 8am–7pm",
  // GoHighLevel / XLeads "Inbound Webhook" URL (Automation → Workflows → trigger
  // "Inbound Webhook"). Every form on the site is sent here. Empty = not connected.
  formEndpoint: "https://services.leadconnectorhq.com/hooks/mqR1WsOsN7YUMbEYBcRt/webhook-trigger/512fd47b-e46a-47ff-aedc-cc7d6d2fdade",
  // "form" = simple form-encoded POST (works from any website, no CORS issues)
  // "json" = JSON POST (only if the endpoint allows cross-origin requests)
  sendAs: "form",
};

/* ===== Icons ===== */
const ICON = {
  check: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  pin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  key: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6M15.5 7.5l3 3L22 7l-3-3"/></svg>',
};

/* ===== Header & footer (shared by all pages) ===== */
function renderHeader() {
  const page = document.body.dataset.page;
  const link = (href, label, key) => `<a href="${href}"${page === key ? ' class="active"' : ""}>${label}</a>`;
  document.getElementById("site-header").innerHTML = `
    <div class="topbar"><div class="container">
      <span class="hide-sm">Cash home buyers serving <span data-c="serviceArea"></span></span>
      <span>Call or text: <a data-href="tel" data-c="phone"></a></span>
    </div></div>
    <header class="site-header"><div class="container">
      <a href="index.html" class="logo"><span class="logo-mark">${ICON.key}</span><span data-c="company"></span></a>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
      <nav class="nav">
        ${link("sell.html", "Sell Your House", "sell")}
        ${link("buyers.html", "For Investors", "buyers")}
        ${link("index.html#how", "How It Works", "how")}
        ${link("about.html", "About Us", "about")}
        ${link("index.html#faq", "FAQ", "faq")}
        <a href="sell.html#offer" class="btn btn-primary">Get My Cash Offer</a>
      </nav>
    </div></header>`;
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <footer class="site-footer"><div class="container">
      <div class="footer-grid">
        <div>
          <a href="index.html" class="logo"><span class="logo-mark">${ICON.key}</span><span data-c="company"></span></a>
          <p>We buy houses for cash throughout Washington, DC and Maryland — any condition, no fees, no commissions, on your timeline.</p>
        </div>
        <div>
          <h4>Sellers</h4>
          <ul>
            <li><a href="sell.html#offer">Get a cash offer</a></li>
            <li><a href="index.html#how">How it works</a></li>
            <li><a href="index.html#compare">Cash vs. listing</a></li>
            <li><a href="index.html#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="buyers.html">Join our buyers list</a></li>
            <li><a href="privacy.html">Privacy policy</a></li>
            <li><a href="terms.html">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact us</h4>
          <ul class="footer-contact">
            <li>${ICON.phone}<a data-href="tel" data-c="phone"></a></li>
            <li>${ICON.mail}<a data-href="mailto" data-c="email"></a></li>
            <li>${ICON.pin}<span data-c="address"></span></li>
            <li>${ICON.clock}<span data-c="hours"></span></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p><strong>Disclosure:</strong> <span data-c="legalName"></span> is a real estate investment company. We are not licensed real estate agents or brokers and do not list properties or represent sellers. We purchase properties directly, and in some cases we may assign our purchase contract to another buyer or investor for a fee. Every seller is encouraged to consult an attorney or real estate professional before signing any agreement.</p>
        <p>© <span data-year></span> <span data-c="legalName"></span>. All rights reserved. · <a href="privacy.html">Privacy Policy</a> · <a href="terms.html">Terms of Service</a></p>
      </div>
    </div></footer>`;
}

/* ===== Fill settings into [data-c] elements ===== */
function fillSettings() {
  document.querySelectorAll("[data-c]").forEach((el) => { el.textContent = SITE[el.dataset.c] ?? ""; });
  document.querySelectorAll('[data-href="tel"]').forEach((el) => { el.href = "tel:" + SITE.phone.replace(/[^\d+]/g, ""); });
  document.querySelectorAll('[data-href="mailto"]').forEach((el) => { el.href = "mailto:" + SITE.email; });
  document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
  document.querySelectorAll("[data-icon]").forEach((el) => { el.innerHTML = ICON[el.dataset.icon] || ""; });
}

/* ===== Forms ===== */
/* Build a CRM-friendly payload (GoHighLevel standard field names). */
function buildPayload(form) {
  const raw = {};
  new FormData(form).forEach((v, k) => {
    raw[k] = k in raw ? [].concat(raw[k], v).join(", ") : v;
  });
  const consent = (name) => form.querySelector(`[name="${name}"]`);
  const isSeller = form.dataset.form === "seller";
  const fullAddress = [raw.address, raw.city, raw.state, raw.zip].filter(Boolean).join(", ");

  const payload = {
    // Standard contact fields
    first_name: raw.firstName || "",
    last_name: raw.lastName || "",
    email: raw.email || "",
    phone: raw.phone || "",
    address1: raw.address || "",
    city: raw.city || "",
    state: raw.state || "",
    postal_code: raw.zip || "",
    full_address: fullAddress,
    company_name: raw.company || "",
    // Lead info
    lead_type: isSeller ? "Seller" : "Cash Buyer",
    tags: isSeller ? "website lead, seller lead" : "website lead, cash buyer",
    source: "Website - " + SITE.company,
    page_url: location.href,
    submitted_at: new Date().toISOString(),
    // SMS / call consent (proof of opt-in for A2P & TCPA)
    sms_consent_transactional: consent("smsConsentInfo")?.checked ? "Yes" : "No",
    sms_consent_marketing: consent("smsConsentMarketing")?.checked ? "Yes" : "No",
    sms_consent_text_transactional: consent("smsConsentInfo")?.closest("label").innerText.trim() || "",
    sms_consent_text_marketing: consent("smsConsentMarketing")?.closest("label").innerText.trim() || "",
    user_agent: navigator.userAgent,
  };

  if (isSeller) {
    Object.assign(payload, {
      property_type: raw.propertyType || "",
      property_condition: raw.condition || "",
      occupancy: raw.occupancy || "",
      beds_baths: raw.bedsBaths || "",
      timeline: raw.timeline || "",
      reason_for_selling: raw.reason || "",
      notes: raw.notes || "",
    });
  } else {
    Object.assign(payload, {
      buying_areas: raw.areas || "",
      buying_strategy: raw.strategy || "",
      price_range: raw.priceRange || "",
      funding: raw.funding || "",
      deals_last_12_months: raw.dealsLastYear || "",
      can_close_within: raw.closeSpeed || "",
    });
  }
  return payload;
}

async function sendPayload(payload) {
  if (SITE.sendAs === "json") {
    const res = await fetch(SITE.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(res.status);
    return;
  }
  // Form-encoded "simple request": no CORS preflight, so it always reaches the
  // webhook. The response is opaque, so only network failures are detectable.
  await fetch(SITE.formEndpoint, { method: "POST", mode: "no-cors", keepalive: true, body: new URLSearchParams(payload) });
}

function setupForms() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    const msg = form.querySelector(".form-msg");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const payload = buildPayload(form);

      if (!SITE.formEndpoint) {
        msg.className = "form-msg warn";
        msg.textContent = "This form is not connected yet. Please call or text us at " + SITE.phone + ".";
        console.log("Form data (not sent):", payload);
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      try {
        await sendPayload(payload);
        form.reset();
        msg.className = "form-msg ok";
        msg.textContent = form.dataset.success || "Thank you! We'll be in touch shortly.";
      } catch (err) {
        msg.className = "form-msg warn";
        msg.textContent = "Something went wrong. Please call or text us at " + SITE.phone + ".";
      } finally {
        btn.disabled = false;
      }
    });
  });

  // Quick form on the home page: send a "partial lead" to the CRM (if a phone
  // number was given), then continue to the full form on sell.html.
  const quick = document.querySelector("form[data-quick]");
  if (quick) {
    quick.addEventListener("submit", () => {
      const phone = quick.querySelector('[name="phone"]').value.trim();
      if (!SITE.formEndpoint || !phone) return;
      const box = (n) => quick.querySelector(`[name="${n}"]`);
      sendPayload({
        phone,
        address1: quick.querySelector('[name="address"]').value.trim(),
        lead_type: "Seller",
        tags: "website lead, seller lead, partial lead",
        source: "Website - " + SITE.company + " (home quick form)",
        page_url: location.href,
        submitted_at: new Date().toISOString(),
        sms_consent_transactional: box("smsConsentInfo").checked ? "Yes" : "No",
        sms_consent_marketing: box("smsConsentMarketing").checked ? "Yes" : "No",
        sms_consent_text_transactional: box("smsConsentInfo").closest("label").innerText.trim(),
        sms_consent_text_marketing: box("smsConsentMarketing").closest("label").innerText.trim(),
      }).catch(() => {});
    });
  }

  // Prefill the full form on sell.html from the home page quick form
  const params = new URLSearchParams(location.search);
  ["address", "phone"].forEach((k) => {
    const field = document.querySelector(`form[data-form="seller"] [name="${k}"]`);
    if (field && params.get(k)) field.value = params.get(k);
  });
  ["smsConsentInfo", "smsConsentMarketing"].forEach((k) => {
    const box = document.querySelector(`form[data-form="seller"] [name="${k}"]`);
    if (box && params.get(k)) box.checked = true;
  });
}

/* ===== Scroll reveal ===== */
function setupReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) return els.forEach((el) => el.classList.add("in"));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

renderHeader();
renderFooter();
fillSettings();
setupForms();
setupReveal();
