import mongoose, { Schema } from "mongoose";
import { IVideogame } from "./videogames.interface";

const videogameSchema = new Schema(
  {
    _id: { type: String },
    title: { type: String },
    platform: { type: String },
    state: { type: String },
    stock: {
      complete: { type: Boolean },
      manual: { type: Boolean },
      disk: { type: Boolean },
    },
    price: {
      complete: { type: Boolean },
      manual: { type: Boolean },
      disk: { type: Boolean },
    },
    discount: {
      hasDiscount: { type: Boolean },
      discountPercent: { type: Number },
    },
    image: { type: String },
    tags: { type: Array<String> },
  },
  { timestamps: true }
);

videogameSchema.index({ _id: 1, title: 1 });

export default mongoose.model<IVideogame>("videogame", videogameSchema);
