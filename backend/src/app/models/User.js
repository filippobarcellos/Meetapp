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
  }
);

UserSchema.methods.checkPassword = function (requestedPassword) {
  return bcrypt.compare(requestedPassword, this.password);
};

UserSchema.pre('save', async function (password) {
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 8);
  }
});

export default mongoose.model('user', UserSchema);
