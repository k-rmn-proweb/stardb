class swapiService
{
    _apiBase = "https://swapi.dev/api";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Error: ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource('/people/');
        return res.results;
    }

    async getPerson(id) {
        const res = await this.getResource(`/people/${id}/`);
        return this._transformPerson(res);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    async getPlanet(id) {
        const res = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(res);
    }

    async getAllStarShips() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    async getStarShip(id) {
        const res = await this.getResource(`/starships/${id}/`);
        return this._transformShip(res);
    }

    _extractId = item => {
        const regExp = /\/([0-9])*\/$/;
        return item.url.match(regExp)[1];
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            birthYear: person.birth_year,
            gender: person.gender
        }
    }

    _transformPlanet = planet => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotation_period: planet.rotation_period
        }
    }

    _transformShip = ship => {
        return {
            id: this._extractId(ship),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            passengers: ship.passengers
        }
    }
}

export default swapiService;