import React from 'react';
import './global.css'
import './App.css'


function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usúario do Github</label>
            <input type="text" name="github_username" id="github_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="longitude" id="longitude" required/>
            </div>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" required/>
            </div>
          </div>

        <button type="subtmit">Salvar</button>

        </form>
      </aside>
      <main></main>
    </div>
    
  );
}

export default App;
