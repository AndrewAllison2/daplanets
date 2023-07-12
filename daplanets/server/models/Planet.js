import { Schema } from "mongoose";

export const PlanetSchema = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  biome: { type: String, required: true, maxlength: 100 },
  atmosphere: { type: Boolean, default: false },
  galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
})