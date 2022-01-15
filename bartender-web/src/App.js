import mixologeek from './mixologeek.jpg';
import './App.css';
import { useState } from 'react';


function App() {
  const [cocktail, setCocktail] = useState();

  async function randomCocktail() {
    let response = await fetch('http://localhost:3001/cocktails/random');
    let data = await response.json();
    setCocktail(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p hidden={cocktail != null}>
          Hey, I'm MixoloGeek 👋
          <br/>
          I will guide you in your cocktails journey! 🍹
        </p>
        {
          cocktail ?
            <div>
              <h1>
                {cocktail['name']}
              </h1>
              <div style={{ 'display': 'grid', 'justify-items': 'center', 'grid-gap': 50}}>
                <div style={{ 'grid-column': '1' }}>
                  <div style={{ 'text-align': 'left' }}>
                    {/*<ul>*/}
                      {cocktail['ingredients'].map((ingredient) =>
                        <div key={ingredient['name']}>{ingredient['name']} - {ingredient['measure']}</div>,
                      )}
                    {/*</ul>*/}
                  </div>
                </div>
                <div style={{ 'grid-column': '2' }}>
                  <img src={cocktail['imageUrl']} height={500} width={500}/>
                </div>
              </div>
              <div>
                <p>
                  {cocktail['instructions']}
                </p>
              </div>
            </div> : null
        }

        <button className="Button" onClick={randomCocktail}>
          Let's Drink!
        </button>
        <img src={mixologeek} className="App-logo"/>
      </header>
    </div>
  );
}

export default App;
