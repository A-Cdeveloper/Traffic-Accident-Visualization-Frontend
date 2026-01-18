const Impressum = () => {
  return (
    <div className="container mx-auto p-8 max-w-4xl">

      
      <div className="space-y-6 text-sm leading-relaxed">


        <section>
          <p>
            Ovaj sajt je kreiran u svrhu vizuelizacije i analize javnih podataka o saobraćajnim nesrećama 
            na teritoriji opštine Vlasotince.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Izvor podataka</h2>
          <p className="mb-2">
            Svi podaci prikazani na ovom sajtu su javni podaci koji potiču iz zvaničnih izvora:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              <strong>Portal otvorenih podataka Republike Srbije:</strong>{' '}
              <a 
                href="https://data.gov.rs/sr/datasets/podatsi-o-saobratshajnim-nezgodama-po-politsijskim-upravama-i-opshtinama/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
                title="Pogledajte podatke na data.gov.rs"
                aria-label="Pogledajte podatke na data.gov.rs"
              >
                data.gov.rs
              </a>
            </li>
            <li>
              <strong>Izdavač podataka:</strong> Ministarstvo unutrašnjih poslova (MUP) - Republika Srbija
            </li>
            <li>
              <strong>Licenca:</strong> Javni podaci (Јавни подаци)
            </li>
            <li>
              <strong>Frekvencija ažuriranja:</strong> Mesečno
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Odgovornost za sadržaj</h2>
          <p className="mb-2">
            Iako se trudimo da prikažemo podatke tačno i ažurno, ne možemo garantovati potpunu tačnost 
            ili ažurnost svih prikazanih podataka. Podaci su preuzeti iz javnih izvora i mogu biti 
            podložni greškama ili zastarevanju.
          </p>
          <p>
            Vlasnik sajta ne snosi odgovornost za eventualne greške u podacima, njihovu interpretaciju 
            ili posledice koje mogu proizaći iz korišćenja ovih podataka.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Tehnička realizacija</h2>
          <p>
            Sajt je izgrađen koristeći React, TypeScript, Leaflet za mapu i povezan je sa backend API-jem 
            za dohvatanje i filtriranje podataka. Detaljne informacije o tehnologijama i izvornom kodu 
            mogu se naći u README.md fajlu projekta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Autorska prava</h2>
          <p>
            Svi podaci prikazani na sajtu su javni podaci i mogu se slobodno koristiti u skladu sa 
            licencom javnih podataka Republike Srbije.
          </p>
          <p>
            Kod aplikacije je dostupan kao open source projekat. Za detalje o licenci, pogledajte 
            LICENSE fajl u repozitorijumu projekta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>
            Za pitanja, sugestije ili prijavu grešaka, molimo kontaktirajte nas preko GitHub repozitorijuma projekta.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Impressum;
