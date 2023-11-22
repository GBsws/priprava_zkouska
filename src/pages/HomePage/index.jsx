import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Šperkařství ~ Jitka Pfau</h1>
      </header>
      <main>
        
        <aside>
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
            <input id="kolekce" className="field-input" type="checkbox" />
            Z dávných dob
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
            <input id="opracovani" className="field-input" type="checkbox" />
            kované, tepané
          </label>
          <label htmlFor="opracovani">
            <input id="opracovani" className="field-input" type="checkbox" />
            wire-wraping
          </label>
          <label htmlFor="opracovani">
            <input id="opracovani" className="field-input" type="checkbox" />
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
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};
