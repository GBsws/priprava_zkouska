import "./style.css";

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <h1>Já jsem header</h1>
        <h2>Šperkařství ~ Jitka Pfau</h2>
        <hr />
      </header>
      <article>
        <h1>Já jsem sekce O mně</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae tenetur enim, vel provident soluta voluptas quis suscipit. Id quam tempore rerum labore, magnam, odio possimus iste laborum quibusdam consequuntur praesentium molestiae officiis nihil dolore ratione odit aut illo optio maxime sapiente at ducimus ipsam! Qui quaerat dolores quos temporibus accusantium.
        </p>
      </article>

      <main>
        <section>
          <h1>Já jsem homepage</h1>
          <hr />
          <div class="grid-container">
            {/* <!-- First Line --> */}
            <button class="button">
              <img src="button1.jpg" alt="" />
              <span>Nahrdelnik</span>
            </button>
            <button class="button">
              <img src="button2.jpg" alt="" />
              <span>Naušnice</span>
            </button>
            <button class="button">
              <img src="button3.jpg" alt="" />
              <span>Zlato</span>
            </button>
            <button class="button">
              <img src="button4.jpg" alt="" />
              <span>Stříbro</span>
            </button>
            <button class="button">
              <img src="button5.jpg" alt="" />
              <span>České</span>
            </button>
            <button class="button">
              <img src="button6.jpg" alt="" />
              <span>Wire-wrapping</span>
            </button>

            {/* <!-- Second Line --> */}
            <button class="button">
              <img src="button7.jpg" alt="" />
              <span>Kousek Islandu</span>
            </button>
            <button class="button">
              <img src="button8.jpg" alt="" />
              <span>Okřídlení</span>
            </button>
            <button class="button">
              <img src="button9.jpg" alt="" />
              <span>Strážci a andělé</span>
            </button>
            <button class="button">
              <img src="button10.jpg" alt="" />
              <span>Fosilie</span>
            </button>
            <button class="button">
              <img src="button11.jpg" alt="" />
              <span>Vltavín</span>
            </button>
            <button class="button">
              <img src="button12.jpg" alt="" />
              <span>Novinky</span>
            </button>
          </div>
        </section>

        <aside>
          <h1>Já jsem formulář filtru</h1>
          <hr />
          <form>
            <h4>Typ ▶ ▼</h4>
            <div>
              <h4>Motiv ▶ ▼</h4>
              <div className="form__list">
                <label htmlFor="motiv">
                  <input id="motiv" className="field-input" type="checkbox" />
                  zoomorfní
                </label>
                <label htmlFor="motiv">
                  <input id="motiv" className="field-input" type="checkbox" />
                  fytomorfní
                </label>
                <label htmlFor="">
                  <input id="motiv" className="field-input" type="checkbox" />
                  antropomorfní
                </label>
                <label htmlFor="">
                  <input id="motiv" className="field-input" type="checkbox" />
                  abstraktní a jiné
                </label>
              </div>
            </div>

            <div className="form__list">
              <h4>Kameny ▶ ▼</h4>
              <label htmlFor="kameny">
                <input id="kameny" className="field-input" type="checkbox" />
                achát
              </label>
              <label htmlFor="kameny">
                <input id="kameny" className="field-input" type="checkbox" />
                akvamarín
              </label>
              <label htmlFor="kameny">
                <input id="kameny" className="field-input" type="checkbox" />
                amazonit
              </label>
              <label htmlFor="kameny">
                <input id="kameny" className="field-input" type="checkbox" />
                ametyst
              </label>
              <label htmlFor="kameny">
                <input id="kameny" className="field-input" type="checkbox" />
                amonit
              </label>
            </div>
            <p>máme pak dalších cca 30 položek v tomto seznamu</p>

            <div className="form__list">
              <h4>Kolekce ▶ ▼</h4>
              <label htmlFor="kolekce">
                <input id="kolekce" className="field-input" type="checkbox" />
                Kousek Islandu
              </label>
              <label htmlFor="kolekce">
                <input id="kolekce" className="field-input" type="checkbox" />
                Marokem
              </label>
              <label htmlFor="kolekce">
                <input id="kolekce" className="field-input" type="checkbox" />
                Okřídlení
              </label>
              <label htmlFor="kolekce">
                <input id="kolekce" className="field-input" type="checkbox" />
                Země Česká
              </label>
              <label htmlFor="kolekce">
                <input id="kolekce" className="field-input" type="checkbox" />Z
                dávných dob
              </label>
            </div>

            <div className="form__list">
              <h4>Materiál ▶ ▼</h4>
              <label htmlFor="material">
                <input id="material" className="field-input" type="checkbox" />
                chirurgická ocel
              </label>
              <label htmlFor="material">
                <input id="material" className="field-input" type="checkbox" />
                měď
              </label>
              <label htmlFor="material">
                <input id="material" className="field-input" type="checkbox" />
                mosaz
              </label>
              <label htmlFor="material">
                <input id="material" className="field-input" type="checkbox" />
                bronz
              </label>
              <label htmlFor="material">
                <input id="material" className="field-input" type="checkbox" />
                zlato
              </label>
              <label htmlFor="material">
                <input id="material" className="field-input" type="checkbox" />
                stříbro
              </label>
              <label htmlFor="material">
                <input id="material" className="field-input" type="checkbox" />
                obecný kov
              </label>
            </div>

            <div className="form__list">
              <h4>Technika ▶ ▼</h4>
              <label htmlFor="technika">
                <input id="technika" className="field-input" type="checkbox" />
                kované, tepané
              </label>
              <label htmlFor="technika">
                <input id="technika" className="field-input" type="checkbox" />
                wire-wrapping
              </label>
              <label htmlFor="technika">
                <input id="technika" className="field-input" type="checkbox" />
                klenotnická technika
              </label>
            </div>

            <div className="form__list">
              <h4>Opracování ▶ ▼</h4>
              <label htmlFor="opracovani">
                <input
                  id="opracovani"
                  className="field-input"
                  type="checkbox"
                />
                kované, tepané
              </label>
              <label htmlFor="opracovani">
                <input
                  id="opracovani"
                  className="field-input"
                  type="checkbox"
                />
                wire-wraping
              </label>
              <label htmlFor="opracovani">
                <input
                  id="opracovani"
                  className="field-input"
                  type="checkbox"
                />
                klenotnická technika
              </label>
            </div>

            <div className="form__list">
              <h4>Lokalita ▶ ▼</h4>
              <label htmlFor="lokalita">
                <input id="lokalita" className="field-input" type="checkbox" />
                české
              </label>
              <label htmlFor="lokalita">
                <input id="lokalita" className="field-input" type="checkbox" />
                zahraniční
              </label>
            </div>

            <button>Vymazat výběr</button>
            <button>potvrdit výběr</button>
          </form>
        </aside>
      </main>
      <footer>
        <h1>Já jsem patička</h1>
        <hr />
        <a href="">Vlastnosti materiálu</a>
        <a href="">Prodejní akce a trhy</a>
        <a href="">Objednání a dodávka zboží</a>
        <a href="">Šperkařská dílna</a>
        <a href="">Kontaktní údaje</a>
        <a href="">.......... </a>
      </footer>
    </div>
  );
};
