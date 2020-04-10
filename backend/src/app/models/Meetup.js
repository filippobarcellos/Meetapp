import mongoose from 'mongoose';

const MeetupSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('meetup', MeetupSchema);
