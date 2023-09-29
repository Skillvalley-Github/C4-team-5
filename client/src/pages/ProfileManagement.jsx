import React from "react";
import supabase from "../supabase";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/base";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    title: "",
    bio: "",
    education: "",
    workExperience: "",
    certifications: "",
    languages: "",
    hourlyRate: "",
    availabilty: "",
    rating: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await supabase.from("profile").insert({
        id: Math.random(),
        name: profile.name,
        phone: profile.phone,
        email: profile.email,
        location: profile.location,
        title: profile.title,
        bio: profile.bio,
        education: profile.education,
        workExperience: profile.workExperience,
        certifications: profile.certifications,
        languages: profile.languages,
        hourlyRate: profile.hourlyRate,
        availabilty: profile.availabilty,
        rating: profile.rating,
      });
      console.log("data submitted successfully!");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="name"
          name="name"
          value={profile.name}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="phone"
          name="phone"
          value={profile.phone}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="email"
          name="email"
          value={profile.email}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="location"
          name="location"
          value={profile.location}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="title"
          name="title"
          value={profile.title}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="bio"
          name="bio"
          value={profile.bio}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        {/* <input type="file" /> */}
        <TextField
          id="outlined-basic"
          label="education"
          name="education"
          value={profile.education}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="workExperience"
          variant="outlined"
          name="workExperience"
          value={profile.workExperience}
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="certifications"
          variant="outlined"
          value={profile.certifications}
          name="certifications"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="languages"
          name="languages"
          value={profile.languages}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="hourlyRate"
          name="hourlyRate"
          value={profile.hourlyRate}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="availabilty"
          name="availability"
          value={profile.languages}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="rating"
          name="rating"
          value={profile.rating}
          variant="outlined"
          onChange={(e) => {
            setProfile(e.target.value);
          }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default Profile;
