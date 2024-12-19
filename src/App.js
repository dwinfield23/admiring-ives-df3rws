import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="src/styles.css" />
          <title>My weather application</title>
          <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        </head>
        <body>
          <div class="weather-app">
            <header>
              <form id="search-form">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  required
                  class="search-input"
                  id="search-input"
                />
                <input type="submit" value="Search" class="search-button" />
              </form>
            </header>
            <main>
              <div class="current-weather">
                <div>
                  <h1 class="current-city" id="current-city">
                    Paris
                  </h1>
                  <p class="current-details">
                    <span id="current-date"></span>,{" "}
                    <span id="description"></span>
                    <br />
                    <div>
                      Humidity:
                      <strong>
                        <span class="current-humidity" id="humidity">
                          %
                        </span>
                      </strong>
                      , Wind:
                      <strong>
                        <span class="current-wind" id="wind">
                          km/h
                        </span>
                      </strong>
                    </div>
                  </p>
                </div>
                <div class="current-temperature">
                  <span
                    class="current-temperature-icon"
                    id="temperature-icon"
                  ></span>
                  <span
                    class="current-temperature-value"
                    id="current-temperature-value"
                  >
                    24
                  </span>
                  <span class="current-temperature-unit">°F</span>
                </div>
              </div>
            </main>
            <footer>
              <p>
                This project was coded by
                <a href="#" target="_blank" rel="noreferrer">
                  Delores Winfield
                </a>{" "}
                and is
                <a href="https://github.com/dwinfield23/admiring-ives-df3rws/tree/main/public" target="_blank" rel="noreferrer">
                  {" "}
                  on GitHub
                </a>{" "}
                and
                <a href="#" target="_blank" rel="noreferrer">
                  hosted on Netlify
                </a>
              </p>
            </footer>
          </div>
        </body>
        <script src="src/index.js"></script>
      </html>
    </div>
  );
}
