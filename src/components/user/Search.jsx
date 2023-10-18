import React from 'react'
import './style/Search.css'

const Search = () => {
  return (
    <section class="searchcontainer">
      <header>Search Your Partner</header>
      <form action="#" class="form">

        <div class="input-box">
          <label>Age</label>
          <div class="column">
            <input type="number" min='18' max='98' placeholder="from" required />
            <input type="number" min='19' max='99' placeholder="to" required />
          </div>
        </div>
        <div class="input-box">
          <label>Place</label>
          <div class="select-box">
              <select>
                <option hidden>Place</option>
                <option>Nilgiris</option>
                <option>Malapuram</option>
                <option>Wayanad</option>
                <option>Kozhikode</option>
              </select>
            </div>
            </div>
            <div class="input-box">
          <label>Marital Status</label>
          <div class="select-box">
              <select>
                <option hidden>Choose</option>
                <option>Never Married</option>
                <option>second Marriage</option>
              </select>
            </div>
            </div>
            <div class="input-box">
          <label>Religion</label>
          <div class="select-box">
              <select>
                <option hidden>Religion</option>
                <option>Christian</option>
              </select>
            </div>
            </div>
        <button>Search</button>
      </form>
    </section>
  )
}

export default Search