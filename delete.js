export default handleDelete = async (jobId) => {
  try {
    const response = await fetch(`http://localhost:3000/api/v1/jobs/${jobId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (response.status === 200) {
      message.textContent = "The job entry was deleted.";

      // Remove the job from the UI (if it's on the job list page)
      const jobElement = document.querySelector(`[data-job-id="${jobId}"]`);
      if (jobElement) {
        jobElement.remove();
      }

      // Optionally, you can refresh the job list
      showJobs();
    } else {
      message.textContent = data.msg;
    }
  } catch (err) {
    console.log(err);
    message.textContent = "A communication error occurred.";
  }
};
