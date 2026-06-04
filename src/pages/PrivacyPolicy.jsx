import { useState } from "react";

PrivacyPolicy.route = {
    path: '/integritetspolicy',
    index: 6
}

const sections = [
  {
    num: "1",
    title: "Vilka personuppgifter samlar vi in?",
    content: (
      <>
        <p>
          När du använder våra formulär på hemsidan för att begära en offert
          eller kontakta oss, samlar vi in de uppgifter du själv anger. Detta
          inkluderar vanligtvis:
        </p>
        <ul>
          <li>
            <strong>Kontaktuppgifter:</strong> Namn, e-postadress och
            telefonnummer.
          </li>
          <li>
            <strong>Fastighetsinformation:</strong> Adress, fastighetsbeteckning,
            boyta/yta eller information om den bostad/byggnad som projektet
            gäller.
          </li>
          <li>
            <strong>Övrig information:</strong> Beskrivning av ditt projekt,
            tidslinje, önskad standard samt eventuella meddelanden du bifogar.
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "2",
    title: "Varför samlar vi dina uppgifter?",
    content: (
      <>
        <p>Vi behandlar dina personuppgifter för att:</p>
        <ul>
          <li>Kunna besvara din kontaktförfrågan eller behandla ditt ärende.</li>
          <li>
            Kunna räkna på och återkomma med en korrekt offertförfrågan för det
            bygg- eller renoveringsarbete du önskar.
          </li>
          <li>
            (Om vi ingår avtal) Kunna administrera och utföra det beställda
            arbetet, samt hantera fakturering och eventuella ROT-avdrag.
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "3",
    title: "Rättslig grund för behandlingen",
    content: (
      <>
        <p>
          För att vi ska ha rätt att hantera dina uppgifter krävs en rättslig
          grund enligt GDPR.
        </p>
        <ul>
          <li>
            <strong>Intresseavvägning / Avtal:</strong> När du skickar in en
            offertförfrågan hanterar vi dina uppgifter för att kunna vidta
            åtgärder på begäran av dig innan ett avtal ingås, eller baserat på
            vårt berättigade intresse att kunna svara på dina frågor.
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "4",
    title: "Hur länge sparar vi dina uppgifter?",
    content: (
      <>
        <p>
          Vi sparar aldrig dina personuppgifter längre än vad som är nödvändigt
          för respektive ändamål:
        </p>
        <ul>
          <li>
            <strong>Offertförfrågningar som inte leder till avtal:</strong>{" "}
            Raderas eller anonymiseras vanligtvis inom 6–12 månader efter
            avslutad kontakt.
          </li>
          <li>
            <strong>Kunder (ingångna avtal):</strong> Vi sparar uppgifter så
            länge som det krävs för att fullfölja avtalet, hantera garantitider
            och uppfylla lagkrav (exempelvis Bokföringslagen som kräver att
            fakturaunderlag sparas i 7 år).
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "5",
    title: "Vilka delar vi uppgifterna med?",
    content: (
      <>
        <p>
          Vi säljer eller vidarebefordrar aldrig dina uppgifter till tredje part
          för marknadsföringsändamål. Vi använder oss dock av underleverantörer
          (så kallade personuppgiftsbiträden) för att driva vår verksamhet, till
          exempel:
        </p>
        <ul>
          <li>
            E-post- och formulärtjänster (t.ex. EmailJS för att vidarebefordra
            dina formulärsvar till oss).
          </li>
          <li>Webbhotell där hemsidan ligger driftad.</li>
        </ul>
        <p>
          Dessa parter är bundna av avtal att skydda dina uppgifter och får inte
          använda dem för egna ändamål.
        </p>
      </>
    ),
  },
  {
    num: "6",
    title: "Dina rättigheter under GDPR",
    content: (
      <>
        <p>
          Du har rätt till kontroll över dina egna uppgifter. Du kan när som
          helst kontakta oss för att:
        </p>
        <ul>
          <li>Få ett utdrag på vilka uppgifter vi har sparade om dig.</li>
          <li>Begära att felaktiga uppgifter rättas.</li>
          <li>
            Begära att dina uppgifter raderas (såvida det inte krockar med andra
            lagar, t.ex. Bokföringslagen).
          </li>
          <li>
            Invända mot eller begränsa hur vi behandlar dina uppgifter.
          </li>
        </ul>
      </>
    ),
  },
  {
    num: "7",
    title: "Cookies (Kakor)",
    content: (
      <>
        <p>
          Vår hemsida sätter inga spårnings- eller tredjepartscookies (kakor)
          för marknadsföring eller analys.
        </p>
        <p className="pp-note">
          <em>
            Om ni använder Google Analytics eller liknande, byt ut stycket ovan
            mot: "Vi använder cookies på vår hemsida för att förbättra
            användarupplevelsen och analysera webbplatstrafik (t.ex. via Google
            Analytics). Du kan själv välja att neka dessa cookies via vår
            cookie-banner när du går in på sidan."
          </em>
        </p>
      </>
    ),
  },
  {
    num: "8",
    title: "Kontaktuppgifter",
    content: (
      <>
        <p>
          Om du har frågor om hur vi hanterar dina personuppgifter eller vill
          utnyttja dina rättigheter, är du välkommen att kontakta oss:
        </p>
        <table className="pp-table">
          <tbody>
            <tr>
              <td>Företag</td>
              <td>[Företagets fullständiga namn]</td>
            </tr>
            <tr>
              <td>Organisationsnummer</td>
              <td>[XX-XXXXXX]</td>
            </tr>
            <tr>
              <td>E-postadress</td>
              <td>[foretagets@epost.se]</td>
            </tr>
            <tr>
              <td>Telefonnummer</td>
              <td>[Telefonnummer]</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const [open, setOpen] = useState(null);
  const toggle = (n) => setOpen(open === n ? null : n);

  return (
    <>
      <div className="pp-page">
        {/* Header */}
        <section className="pp-header">
          <div className="pp-header-tag">Juridisk information · GDPR</div>
          <h1 className="pp-headline">
            Integritetspolicy
            <br />
            <span className="pp-headline-sub">för [Företagets Namn]</span>
          </h1>
          <p className="pp-lead">
            Denna integritetspolicy beskriver hur{" "}
            <strong>[Företagets Namn]</strong> ("vi", "oss") samlar in, använder
            och skyddar dina personuppgifter när du besöker vår hemsida och
            använder våra tjänster — till exempel när du skickar in en
            offertförfrågan eller kontaktar oss.
          </p>
          <p className="pp-lead">
            Vi värnar om din personliga integritet och följer alltid gällande
            dataskyddsregler (GDPR).
          </p>
          <div className="pp-header-meta">
            <span>Senast uppdaterad: Juni 2025</span>
          </div>
        </section>

        {/* Sections */}
        <section className="pp-main">
          {sections.map((s) => {
            const isOpen = open === s.num;
            return (
              <div key={s.num} className={`pp-section${isOpen ? " pp-section--open" : ""}`}>
                <button
                  className="pp-section-btn"
                  onClick={() => toggle(s.num)}
                  aria-expanded={isOpen}
                >
                  <span className="pp-num">{s.num}.</span>
                  <span className="pp-section-title">{s.title}</span>
                  <span className="pp-icon">{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className="pp-body"
                  style={{ maxHeight: isOpen ? "800px" : "0" }}
                >
                  <div className="pp-body-inner">{s.content}</div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}