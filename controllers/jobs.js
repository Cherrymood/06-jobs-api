import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const getAllJobs = async (req, res) => {
  console.log("getAllJobs");
};
const getJob = async (req, res) => {
  console.log("getJob");
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const updateJob = async (req, res) => {
  console.log("updateJob");
};

const deleteJob = async (req, res) => {
  console.log("deleteJob");
};

export { createJob, deleteJob, getAllJobs, updateJob, getJob };
