import React, { useEffect } from "react";
import { Stack, Typography, Chip, Paper, styled } from "@mui/material";
import { Skills } from "../pages/Projects";
import supabase from "../supabase";
import { useState } from "react";
import "./jobItem.css";
import { useNavigate } from "react-router-dom";
import JobCard from "./jobCard";
import Swal from "sweetalert2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Job(props) {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [apply, setApply] = useState(false);
  const [jobData, setJobData] = useState([]);

  function applyAlert() {
    Swal.fire({
      title: "Google Chrome Extension Developer",
      text: "Wish to apply for this job",
      icon: "swal2-icon-show",
      confirmButtonText: "Apply Now",
      confirmButtonColor: "green",
    })
      .then(setApply(true))
      .then(navigate("../apply"));
  }

  useEffect(() => {
    const fetchJobs = async () => {
      let { data: jobs, error } = await supabase.from("jobs").select("*");

      console.log("data: ", jobs[0].job.jobDescription);
      console.log("data: ", jobs[0].job.jobTitle);

      setEvents(jobs);
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("channel-for-jobs")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "job" },
        (payload) => {
          console.log("Change received!", payload);
          setEvents((prevEvents) => [payload.new, ...prevEvents]);
        }
      )
      .subscribe();

    return () => {
      // supabase.removeSubscription();
    };
  }, []);

  return (
    <>
      <Item sx={{ m: 2, p: 2, display: "block" }}>
        <Stack direction={"row"}>
          <Typography
            sx={{ display: "flex", color: "green", lineHeight: 5 }}
            className="jobTitle"
            onClick={applyAlert}
          >
            {events[0].job.jobTitle}
          </Typography> 
        </Stack>
        <Stack direction={"row"}>
          <Typography variant="body2">
           {events[0].job.jobDescription}
          </Typography>
        </Stack>
        <Stack direction={"row"}>
          <div className="skills">
            <Chip label="google chrome extension" sx={{ m: 2 }} />
            <Chip label="Javascript" />
          </div>
        </Stack>

        <Stack direction={"row"}>
          <Typography sx={{ fontSize: "15px", ml: 2 }}> $8K</Typography>
          <Typography sx={{ fontSize: "15px", ml: 2 }}>Remote</Typography>
        </Stack>
      </Item>
      {showDetails && <JobCard />}
    </>
  );
}

export default Job;
