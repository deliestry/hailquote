# HailQuote

Ein responsives Web-MVP zur Kalkulation von Hagelschäden und Erstellung mehrsprachiger Angebote.

## Funktionen

- Kunden- und Fahrzeugdaten
- Dellenkalkulation nach Bauteil und Größe
- Frei konfigurierbare Preise, Zusatzkosten, Rabatt und Mehrwertsteuer
- Angebotsausgabe auf Deutsch, Englisch und Spanisch
- PDF-Export über den Druckdialog des Browsers
- Direkter PDF-Download mit automatisch archivierter Angebotsversion
- Kundenstamm zum Speichern und Wiederverwenden von Kontaktdaten
- Angebotsarchiv mit Öffnen- und Löschfunktion
- Firmenprofil mit Kontaktdaten, Steuernummer und Logo
- Angebotsstatus: Entwurf, versendet, angenommen oder abgelehnt
- Fortlaufende Angebotsnummern
- Vollständiger JSON-Export und -Import zur Datensicherung
- Pflichtfeldprüfung vor Vorschau und PDF-Erstellung
- Als Progressive Web App installierbar und nach erstem Laden offline nutzbar
- Automatische lokale Speicherung im Browser
- Keine Übertragung von Kundendaten an einen Server

## Lokal starten

`index.html` direkt im Browser öffnen oder im Projektordner einen lokalen Webserver starten:

```bash
python3 -m http.server 8080
```

Danach `http://localhost:8080` öffnen.

Die Installations- und Offline-Funktion ist nur über `http://` oder `https://` verfügbar, nicht beim direkten Öffnen als `file://`.

## Online veröffentlichen

Der Ordner kann ohne Build-Schritt bei Netlify, Vercel, GitHub Pages oder jedem klassischen Webhoster veröffentlicht werden. Die benötigte PDF-Bibliothek liegt bereits kompakt im Ordner `vendor`.

Nicht für die Veröffentlichung benötigte Entwicklungsdateien werden über `.gitignore` ausgeschlossen. Für Netlify liegen außerdem HTTPS-Sicherheitsheader und eine SPA-Weiterleitung in `netlify.toml` bereit.

## Nächster Schritt für Mehrbenutzerbetrieb

Die App besitzt jetzt eine optionale Supabase-Anbindung mit E-Mail-/Passwort-Anmeldung und sicherer Trennung der Benutzerdaten.

1. Ein Supabase-Projekt in der gewünschten Datenschutzregion erstellen.
2. Den Inhalt von `supabase-schema.sql` im Supabase SQL Editor ausführen.
3. In HailQuote auf **Cloud** klicken.
4. Project URL und den Publishable-/anon-Key eintragen.
5. Konto erstellen oder anmelden.
6. Lokale Daten hochladen beziehungsweise Cloud-Daten laden.

Der Service-Role-Key darf niemals in der Browser-App eingetragen werden. Die Sicherheit erfolgt durch Supabase Auth und Row Level Security; jeder Benutzer kann ausschließlich seinen eigenen Datensatz lesen und verändern.
