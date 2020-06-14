import mongoose from 'mongoose';

const RegistrarionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    meetup_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'meetup',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('registration', RegistrarionSchema);
