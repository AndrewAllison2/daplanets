import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class PlanetsService {
  async createPlanet(planetData) {
    const newPlanet = await dbContext.Planets.create(planetData)
    return newPlanet
  }

  async getPlanets() {
    const planets = await dbContext.Planets.find()
    return planets
  }


  async getPlanetsById(planetId) {
    const foundPlanet = await dbContext.Planets.findById(planetId)

    if (!foundPlanet) {
      throw new BadRequest('This planet was blown up by the Death Star')
    }
    return foundPlanet
  }
}

export const planetsService = new PlanetsService()