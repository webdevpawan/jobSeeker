import { createSlice } from "@reduxjs/toolkit";


const jobSlice = createSlice({
    name: "job",
    initialState: {
        jobs: []
    },
    reducers: {
        setInput: (state, action) => {
            const newJobs = {}
            const { jobTitle, company, salary, date, description } = action.payload;
            newJobs.title = jobTitle;
            newJobs.company = company;
            newJobs.salary = salary;
            newJobs.date = date;
            newJobs.description = description;
            state.jobs = [...state.jobs, newJobs]
        },
        deleteJob: (state, action) => {
            state.jobs = state.jobs.filter((job, i) => i !== action.payload.id)
        },
        updateJob: (state, action) => {
            const { id, jobTitle, company, salary, date, description } = action.payload;
            const jobIndex = state.jobs.findIndex((job) => job.id === id);
            if (jobIndex !== -1) {
                state.jobs[jobIndex] = {
                    ...state.jobs[jobIndex],
                    title: jobTitle,
                    company,
                    salary,
                    date,
                    description
                };
            }
        }
    }
})

export const { setInput, deleteJob, updateJob } = jobSlice.actions;

export default jobSlice.reducer;
