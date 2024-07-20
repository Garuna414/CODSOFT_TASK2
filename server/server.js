// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const connectDB = require("./db");
const { Job, Profile } = require("./models");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

// Post a new job
app.post("/api/jobs", async (req, res) => {
  try {
    const newJob = new Job(req.body);
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Fetch jobs with filters
app.get("/api/jobs", async (req, res) => {
  try {
    const { name, minSalary, modeOfWork, yearsOfExperience } = req.query;

    // Build the query object
    const query = {};

    if (name) {
      query.jobName = new RegExp(name, "i");
    }

    if (minSalary) {
      query.salary = { $gte: Number(minSalary) };
    }

    if (modeOfWork) {
      query.modeOfWork = modeOfWork;
    }

    if (yearsOfExperience) {
      // Filter jobs with yearsOfExperience less than or equal to the specified value
      query.yearsOfExperience = { $lte: Number(yearsOfExperience) };
    }

    // Find jobs based on the query
    const jobs = await Job.find(query);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Fetch profile data
app.get("/api/profiles/:email", async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.params.email });
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update profile data
app.put("/api/profiles/:email", async (req, res) => {
  try {
    const updatedProfile = await Profile.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProfile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//Signup api
app.post('/api/signup', async (req, res) => {
    const { username, email, password, phone, role } = req.body;
  
    try {
      // Check if the user already exists
      let user = await Profile.findOne({ email });
  
      if (!user) {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
  
        // Create a new user
        user = new Profile({
          username,
          email,
          password: hashedPassword,
          phone,
          role,
          profession: "", // Leave blank
          experienceYears: 0, // Default value
          technologiesKnown: [], // Default empty array
          summary: "", // Leave blank
          organization: "", // Leave blank
        });
  
        // Save the user
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
      } else {
        res.status(400).json({ error: 'User already exists' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  

//Login api
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await Profile.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Validate the password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.status(200).json({ message: "User logged in successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
