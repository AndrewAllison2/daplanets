import { Schema } from "mongoose";

export const GalaxySchema = new Schema({
  name: { type: String, required: true, maxlength: 30 },
  stars: { type: Number, required: true }
})