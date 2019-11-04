const real_data = {"message":"accurate","cod":"200","count":1,"list":[{"id":524901,"name":"Moscow","coord":{"lat":55.7507,"lon":37.6177},"main":{"temp":9.19,"pressure":1002,"humidity":93,"temp_min":8.33,"temp_max":10},"dt":1572898024,"wind":{"speed":5,"deg":180},"sys":{"country":"RU"},"rain":null,"snow":null,"clouds":{"all":90},"weather":[{"id":701,"main":"Mist","description":"mist","icon":"50n"}]}]};


describe('createURLRequestByCityName', () => {
    it('should return url with Moscow', () => {
        chai.expect(createURLRequestByCityName("Moscow")).to.have.string("Moscow");
    });

    it('should return url with Omsk', () => {
        chai.expect(createURLRequestByCityName("Omsk")).to.have.string("Omsk");
    });
});

describe('getDataFromResponseJson', () => {
    const real_data_local = real_data['list'][0];
    it('should be object', () => {
        chai.expect(getDataFromResponseJson(real_data_local)).to.be.an("object");
    });

    it('should have property weather', () => {
        chai.expect(getDataFromResponseJson(real_data_local)).to.have.own.property('weather');
    });

    it('should have property weather.clouds', () => {
        chai.expect(getDataFromResponseJson(real_data_local)['weather']).to.have.own.property('clouds');
    });

    it('should have property weather.temp', () => {
        chai.expect(getDataFromResponseJson(real_data_local)['weather']).to.have.own.property('temp');
    });

    it('should have property weather.pressure', () => {
        chai.expect(getDataFromResponseJson(real_data_local)['weather']).to.have.own.property('pressure');
    });

    it('should have property weather.humidity', () => {
        chai.expect(getDataFromResponseJson(real_data_local)['weather']).to.have.own.property('humidity');
    });

    it('should have property weather.wind', () => {
        chai.expect(getDataFromResponseJson(real_data_local)['weather']).to.have.own.property('wind');
    });

    it('should return real data', () => {
        const {weather: {
            temp, pressure, humidity, clouds, wind
        }} = getDataFromResponseJson(real_data_local);

        chai.expect(temp).to.equal(9.19);
        chai.expect(pressure).to.equal(1002);
        chai.expect(humidity).to.equal(93);
        chai.expect(clouds).to.equal(90);
        chai.expect(wind).to.equal(5);
    });
});


describe('removeComponenFromPageByID', () => {
    it('should make page without changes', () => {
        removeComponenFromPageByID('weather');

        chai.expect(document.getElementById('weather')).to.be.an('null');
    });

    it('should remove weather component from page', () => {
        let cont = document.getElementById('test');
        cont.insertAdjacentHTML('beforeend', '<div id="weather"></div>');

        chai.expect(document.getElementById('weather')).not.to.be.an('null');

        removeComponenFromPageByID('weather');
        chai.expect(document.getElementById('weather')).to.be.an('null');
    });
});


describe('connectionErrorIntoDOM', () => {
    it('should add error message', () => {
        connectionErrorIntoDOM("Error");
        chai.expect(document.getElementById('error-message')).not.to.be.an('null');

        removeErrorMessage();
        chai.expect(document.getElementById('error-message')).to.be.an('null');
    })
});

describe('insertResultIntoDOM', () => {
    it('should add error message', () => {
        insertResultIntoDOM("{}");
        chai.expect(document.getElementById('error-message')).not.to.be.an('null');

        removeErrorMessage();
        chai.expect(document.getElementById('error-message')).to.be.an('null');
    });

    it('should add real data message', () => {
        insertResultIntoDOM(JSON.stringify(real_data));
        chai.expect(document.getElementById('weather')).not.to.be.an('null');

        removeWeatherComponent();
        chai.expect(document.getElementById('weather')).to.be.an('null');
    })
});

describe('makeRequest', () => {
    it('should get data from openweather', (done) => {
        makeRequest('GET', createURLRequestByCityName('Moscow')).then(
            (result) => {
                chai.expect(result.status).to.be.an('undefined');
                done();
            },
            (error) => {
                done(error);
        }
        )
    })
});

describe('inputCityNameValidation', () => {
    it('should valid input', () => {
        chai.expect(inputCityNameValidation('Moscow')).not.to.be.an('null');
        chai.expect(inputCityNameValidation('Saint-Petersburg')).not.to.be.an('null');
    });

    it('should invalid input', () => {
        chai.expect(inputCityNameValidation('Saint- Petersburg')).to.be.an('null');
        chai.expect(inputCityNameValidation('M0scow')).to.be.an('null');
    })
});
