import mongoose from 'mongoose';

import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

UserSchema.pre('save', async function () {
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 8);
  }
});

UserSchema.methods.checkPassword = function (requestedPassword) {
  return bcrypt.compare(requestedPassword, this.password);
};

UserSchema.virtual('meetups', {
  ref: 'Meetup',
  localField: '_id',
  foreignField: 'user_id',
  justOne: false,
});

export default mongoose.model('User', UserSchema);
