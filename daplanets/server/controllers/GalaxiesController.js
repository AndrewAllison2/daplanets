import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController {
  constructor() {
    super('api/galaxies')
    this.router
      .get('', this.getGalaxies)
      .get('/:galaxyId', this.getGalaxyById)
      .post('', this.createGalaxy)
  }

  async getGalaxies(req, res, next) {
    try {
      const galaxies = await galaxiesService.getGalaxies()

      return res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxyById(req, res, next) {
    try {
      const galaxyId = req.params.galaxyId
      const foundGalaxy = await galaxiesService.getGalaxyById(galaxyId)
      return res.send(foundGalaxy)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxyData = req.body

      const newGalaxy = await galaxiesService.createGalaxy(galaxyData)
      return res.send(newGalaxy)

    } catch (error) {
      next(error)
    }
  }

}