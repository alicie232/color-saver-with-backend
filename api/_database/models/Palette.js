import mongoose from "mongoose";
import { UserSchema } from "./User";
mongoose.model("User", UserSchema, "users");
export const PaletteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  savedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  name: {
    type: String,
    required: true,
  },
  colors: [
    {
      code: {
        type: String,
        required: true,
      },
    },
  ],
});
