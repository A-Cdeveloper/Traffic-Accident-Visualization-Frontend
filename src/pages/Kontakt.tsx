import { Link } from "react-router";

  const Kontakt = () => {
  return (
    <div className="container mx-auto p-8 max-w-xl">

      
      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold mb-2">Kontakt informacije</h2>
          <div className="space-y-1">
            <p>
              <strong>Telefon:</strong>{' '}
              <a 
                href="tel:+381637675989" 
                className="text-primary hover:underline"
                title="Kontaktirajte nas putem telefona"
                aria-label="Kontaktirajte nas putem telefona"
              >
                +381 63 7675989
              </a>
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a 
                href="mailto:kontakt@e-seo.info" 
                className="text-primary hover:underline"
                title="Kontaktirajte nas putem email-a"
                aria-label="Kontaktirajte nas putem email-a"
              >
                kontakt@e-seo.info
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Poslovni podaci</h2>
          <div className="space-y-2">
            <p><strong>PIB:</strong> 107319556</p>
            <p><strong>Matični broj:</strong> 62659459</p>
            <p><strong>Šifra delatnosti:</strong> 6201 (Computer Programming)</p>
            <p><strong>Ovlašćeno lice:</strong> IT Engineer Aleksandar Cvetković</p>
          </div>
        </section>


        <section>
          <h2 className="text-xl font-semibold mb-3">Pišite nam</h2>
          <p className="mb-4">
            Za sva pitanja, sugestije ili tehničku podršku, slobodno nas kontaktirajte putem email-a.
          </p>
          <div className="bg-muted p-4 rounded-md">
            <p className="text-xs text-muted-foreground">
              Za pitanja vezana za podatke prikazane na sajtu, molimo pogledajte{' '}
              <Link to="/impressum" className="text-primary hover:underline" title="Pogledajte Impressum stranicu" aria-label="Pogledajte Impressum stranicu">
                Impressum
              </Link>{' '}
              stranicu.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Kontakt;
