import mongoose from "mongoose";

const goalsSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    age: {
      type: Number,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Goal", goalsSchema);
