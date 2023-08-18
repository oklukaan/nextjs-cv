import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    blogTitle:{
        type: String,
        required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);


const Postes = mongoose.models.Postes ||mongoose.model("Postes", userSchema);
export default Postes;
