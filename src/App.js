import './App.css';

function App() {
  return (
    <div className="App">
       <div class="weather" id="sun">
        <div className="container">
          <div className="row">
            <div className="col-4 offset-4">
              <h2>Date</h2>
            </div>
            <div class="col-4 text-end">
              <span className="time" id="timing">
                Time
              </span>
            </div>
          </div>
          <form className="form" id="searching-form">
            <div className="row">
              <div className="col-7 input">
                <input
                  type="text"
                  className="formControl"
                  id="city"
                  placeholder="Enter a city"
                  autocomplete="off"
                />
              </div>
              <div className="col-4">
                <button type="submit" className="btn btn-primary primary">
                  Search
                </button>
              </div>
            </div>
          </form>
          <h3>City</h3>
          <span id="country" className="countries"></span>
          <div className="row">
            <div className="col-8">
              <span id="temp" className="temperature"></span>
              <span className="cel"> Degrees °C </span>
              <img className="iconic" id="icon" alt="" />
            </div>
            <div className="col-4">
              <div className="parameters">
                <div id="feeling" className="feels"></div>
                <div id="wind" className="windy"></div>
                <div id="description"></div>
              </div>
            </div>
          </div>
          <h4>Forecast</h4>
          <div>
            <div id="forecast" className="forecasts"></div>
          </div>
        </div>
      </div>
      <a
        className="git"
        href="https://github.com/margaritakoroviakova/lovelyweather"
      >
        My lovely code
      </a>
      <a className='gitTwo' href='https://github.com/margaritakoroviakova/reactweatherapp'>This was code by me</a>
    </div>
  );
}

export default App;
