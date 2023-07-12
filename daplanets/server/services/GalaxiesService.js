import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class GalaxiesService {
  async getGalaxies() {
    const galaxies = await dbContext.Galaxies.find()
    return galaxies
  }

  async getGalaxyById(galaxyId) {
    const foundGalaxy = await dbContext.Galaxies.findById(galaxyId)

    if (!foundGalaxy) {
      throw new BadRequest('No galaxy with that id')
    }
    return foundGalaxy
  }

  async createGalaxy(galaxyData) {
    const newGalaxy = await dbContext.Galaxies.create(galaxyData)
    return newGalaxy
  }

}

export const galaxiesService = new GalaxiesService()