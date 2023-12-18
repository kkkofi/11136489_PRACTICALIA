import {Schema} from "mongoose"

const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  contact: {
    email: String,
    phoneNumber: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },
  },
  medicalHistory: [{
    condition: String,
    diagnosisDate: Date,
  }],
}, { timestamps: true });

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
