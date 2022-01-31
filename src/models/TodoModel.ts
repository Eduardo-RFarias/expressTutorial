import mongoose from "mongoose";

interface TodoModel extends mongoose.Document {
  name: string;
  completed: boolean;
}

const TodoSchema = new mongoose.Schema<TodoModel>({
  name: {
    type: String,
    trim: true,
    maxlength: 120,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<TodoModel>("Todo", TodoSchema);
