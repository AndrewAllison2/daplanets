import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .post('', this.createPlanet)
      .get('', this.getPlanets)
      .get('/:planetId', this.getPlanetsById)
  }

  async createPlanet(req, res, next) {
    try {
      const planetData = req.body
      const newPlanet = await planetsService.createPlanet(planetData)

      return res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }

  async getPlanets(req, res, next) {
    try {
      const planets = await planetsService.getPlanets()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsById(req, res, next) {
    try {
      const planetId = req.params.planetId

      const foundPlanet = await planetsService.getPlanetsById(planetId)
      return res.send(foundPlanet)
    } catch (error) {
      next(error)
    }
  }
}