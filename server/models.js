// models.js
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  companyName: { type: String, required: true },
  salary: { type: Number, required: true },
  yearsOfExperience: { type: Number, required: true },
  modeOfWork: { type: String, required: true },
  technologyRequired: { type: [String], required: true },
  summary: { type: String, required: true },
});

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, enum: ['Candidate', 'Employer'], required: true },
    profession: { type: String, default: '' },
    experienceYears: { type: Number, default: 0 },
    technologiesKnown: { type: [String], default: [] },
    summary: { type: String, default: '' },
    organization: { type: String, default: '' },
  });

const Job = mongoose.model('Job', JobSchema);
const Profile = mongoose.model('Profile', UserSchema);

module.exports = { Job, Profile };
