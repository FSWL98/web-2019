# Solve for Laboratory work 2

### Task

Create an application using the React library.

The first time the page loads, the user is prompted to receive geolocation data using the HTML5 Geolocation API. If the user agrees to provide geolocation data, we obtain weather data from the external API. If not, we request information for the default city (you can choose the default city yourself). Information about the city, weather data (temperature, wind, pressure, humidity), weather icon, coordinates are drawn on the page in accordance with the layout.

The icon and all the necessary data are in the API https://openweathermap.org.

The interface also has a button with a repeated request for user geolocation.

The user has the ability to add and remove cities to favorites. Weather information is displayed for all cities from the favorites according to the layout. Favorites are stored in LocalStorage.

While data is being downloaded for a specific city / location, we show a loader and / or a message about waiting for data to load.

Working with the global state of the application (for example, a list of selected cities) is implemented using Redux.

The local state of the component (for example, the waiting state for data loading) is through the local state of the component.

## Requirements
* NodeJS. [More info](https://nodejs.org/)
* API Key from [OpenWeather](https://openweathermap.org). You should register and your key will be in API Keys section.

## Usage
Pass API key into src/utils/OpenWeatherAPI.js to appid variable like this: 
```js 
const appid = '00000000000000000000000000000000';
```

Run in root project next command 
```bash 
>>> npm install
>>> npm start
```

Next open in the browser the link: http://0.0.0.0:8000

## FAQ

**Q:** It works only with Russian cities? 

**A:** Yes. It currently works only with Russian cities. 

##

**Q:** Can I use it for production? 

**A:** Yes. But you should use https server for that. 
