# Solve for Laboratory work 1

### Task

Make up a page containing an input field and a button to search for weather information in a given city. 

By pressing the button, an external weather API is called (for example, https://openweathermap.org/api). Received data (at least 5 elements) are drawn on the same page.
To draw the received data, one of the client template engines should be used (for example, https://proglib.io/p/templating-languages-and-engines/). 

A CSS preprocessor (SASS, LESS, Stylus) is used to visualize the page.
The work is done in a public github repository. All necessary instructions for running the project locally should be described in README.md in the root of the project.

## Requirements
* Python3 with http.server module. [More info](https://docs.python.org/3/library/http.server.html)
* Sass command line. [Install Guide](https://sass-lang.com/install)
* API Key from [OpenWeather](https://openweathermap.org). You should register and your key will be in API Keys section.

## Usage
Pass API key into assets/js/app.js to appid variable like this: 
```js 
const appid = '00000000000000000000000000000000';
```

Run in root project next command 
```bash 
>>> sass assets/scss/:assets/css
>>> python3 -m http.server 
```

Next open in the browser the link: http://0.0.0.0:8000

## Dependencies
* [nunjucks 3.2.0](https://mozilla.github.io/nunjucks)

## FAQ

**Q:** It works only with Russian cities? 

**A:** Yes. It currently works only with Russian cities. 
##

**Q:** How can I change styles?

**A:** This project using SCSS preprocessor. So you can change it and after that write command for build new css files:
```bash 
>>> sass assets/scss/:assets/css
```
##

**Q:** Can I use it for production? 

**A:** Yes. But you should use another http server for that. 
