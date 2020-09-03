import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div >

    <div className="App" >
      <div className="container">
        <h1>Form Pembelian Buah</h1>
        <form method="" action="">
          <table className="App-table" >
            <tr>
              <td className="App-td"><b>Nama Pelanggan</b></td>
              <td><input type="text" name="nama"></input></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="checkbox" name="buah" value="Semangka"> Semangka</input></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" name="buah" value="Jeruk"> Jeruk </input>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" name="buah" value="Nanas"> Nanas </input>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="checkbox" name="buah" value="Salak"> Salak </input>
              </td>
            </tr>
            <tr>
              <td><b>Daftar Item </b></td>
              <td>
                <input type="checkbox" name="buah" value="Anggur"> Anggur </input>
              </td>
            </tr>
            <tr>
              <td>
                <button className="App-button"> Kirim</button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  );
}

export default App;
