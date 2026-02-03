# 🚀 Quick Start - In 10 Minuten zum ersten Verkauf!

## Schritt 1: Stripe Account (5 Min)

1. Gehe zu: https://dashboard.stripe.com/register
2. Registriere dich:
   - E-Mail
   - Passwort
   - **Land:** Deutschland
   - **Kontoart:** Einzelunternehmer / Kleingewerbe

3. **Bankkonto verbinden:**
   ```
   Settings → Banking → Add bank account
   → Gib deine IBAN ein
   → Bestätige per SMS/E-Mail
   ```

4. **Payment Link erstellen:**
   ```
   Products → Payment links → + New

   Name: Mummert Labubu
   Preis: €1.00 EUR
   Beschreibung: Limited Edition Designer Collectible

   → Create link
   → KOPIERE DEN LINK!
   ```

## Schritt 2: Link in Website einfügen (2 Min)

```bash
# Öffne index.html
# Suche nach Zeile ~420:

const stripePaymentLink = 'https://buy.stripe.com/test_00000...';

# Ersetze durch DEINEN Link:
const stripePaymentLink = 'https://buy.stripe.com/DEIN_LINK';
```

**Speichern!**

## Schritt 3: Auf Netlify deployen (3 Min)

1. Gehe zu: https://app.netlify.com
2. "Add new site" → "Import from Git"
3. Wähle GitHub → "Mummert" Repository
4. Deploy settings:
   - Build command: (leer lassen)
   - Publish directory: `.`
5. **Deploy!**

→ Du bekommst eine URL: `mummert-labubu.netlify.app`

## ✅ Fertig! Teste deinen ersten Verkauf:

1. Öffne deine Netlify-URL
2. Klicke "Jetzt für €1 kaufen"
3. Teste mit Karte: **4242 4242 4242 4242**
4. Prüfe in Stripe Dashboard → "Payments"
5. **Es funktioniert!** 🎉

## 💰 Wann bekomme ich mein Geld?

### Erste Auszahlung:
- Nach **7 Tagen** automatisch auf dein Bankkonto
- Stripe prüft erstmal dein Konto (Sicherheit)

### Danach:
- **Automatisch alle 7 Tage** (Standard)
- **Oder sofort** mit "Instant Payout" (1% Gebühr)

### Geld-Flow:
```
Kunde zahlt → Stripe → Dein Bankkonto (7 Tage später)
```

## 📊 Dashboard öffnen:

**Stripe:** https://dashboard.stripe.com
- Sieh alle Zahlungen
- Prüfe Balance
- Lade Rechnungen herunter

## 🔄 Von Test → Live schalten:

**Im Stripe Dashboard:**

1. Oben rechts: "Test mode" → **"Live mode"**
2. Erstelle NEUEN Payment Link (im Live-Modus)
3. Ersetze Link in `index.html`
4. Git push
5. **Echte Zahlungen empfangen!** 💸

## ⚠️ Wichtig:

- ✅ Nutze erst Test-Modus zum Testen
- ✅ Dann Live-Modus für echte Verkäufe
- ✅ Nie Test- und Live-Keys mischen
- ✅ Bankkonto muss verifiziert sein

## 💡 Preis ändern auf €199.99?

**In Stripe:**
1. Erstelle neuen Payment Link
2. Preis: €199.99
3. Link kopieren & in Website einfügen

**Du bekommst dann:**
- €199.99 - €3.05 Gebühr = **€196.94 pro Verkauf** 🤑

## 🆘 Hilfe:

**Stripe funktioniert nicht?**
- Prüfe: Bist du im Test- oder Live-Modus?
- Prüfe: Ist der Payment Link korrekt?

**Geld kommt nicht an?**
- Bankkonto verifiziert?
- 7 Tage gewartet?
- In Dashboard: "Payouts" prüfen

**Support:**
- Stripe: https://support.stripe.com
- Netlify: https://www.netlify.com/support

---

## 🎯 Zusammenfassung:

1. ✅ Stripe Account + IBAN verbinden (5 Min)
2. ✅ Payment Link erstellen + in Website einfügen (2 Min)
3. ✅ Auf Netlify deployen (3 Min)
4. ✅ **Erste Zahlung erhalten!** 💰

**Total: 10 Minuten bis zum ersten Verkauf!** 🚀

Viel Erfolg! 🎉
