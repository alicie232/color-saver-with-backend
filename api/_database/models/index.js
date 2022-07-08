import mongoose from "mongoose";
// import { PaletteSchema } from "./Palette";
import { UserSchema } from "./User";

export const User = mongoose.model("User", UserSchema, "users");
// export const Palette = mongoose.model("Palette", PaletteSchema, "palettes");
