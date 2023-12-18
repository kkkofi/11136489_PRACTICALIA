import mongoose from "mongoose";

const mongoose = require('mongoose');

const encounterSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  encounterDate: {
    type: Date,
    required: true,
  },
  chiefComplaint: {
    type: String,
    required: true,
  },
  vitalSigns: {
    temperature: Number,
    bloodPressure: String,
    heartRate: Number,
    respiratoryRate: Number,
  },
  diagnosis: [{
    code: String,
    description: String,
  }],
  medications: [{
    name: String,
    dosage: String,
    frequency: String,
  }],
  notes: String,
}, { timestamps: true });

const Encounter = mongoose.model('Encounter', encounterSchema);

module.exports = Encounter;
