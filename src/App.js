import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper gambar">
      <div className="flex-wrapper">
        <div className="flex-judul">
          <div className="judul">
            <h1 className="save">Save your Earth</h1>
          </div>
        </div>
        <div className="flex-konten">
          <div className="konten">
            <p>
              Menanam satu pohon, menghasilkan sejuta manfaat.
            </p>
          </div>
        </div>
        <div className="flex-button">
          <div className="button">
            <p className="text">Donasi Pohon</p>
          </div>
        </div>
        <div className="flex-button1">
          <div className="button 1">
            <p className="text1">Hubungi Kami</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;