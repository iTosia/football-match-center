import mongoose, { Schema, Document } from "mongoose";

export interface IMatch extends Document {
  homeTeam: string;
  awayTeam: string;
  date: Date;
  competition: string;
  stadium: string;
}

const matchSchema = new Schema<IMatch>({
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  date: { type: Date, required: true },
  competition: { type: String, required: true },
  stadium: { type: String, required: true },
});

export default mongoose.model<IMatch>("Match", matchSchema);
