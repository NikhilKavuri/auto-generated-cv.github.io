const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const name = document.getElementById("name");
const email = document.getElementById("email");
const education = document.getElementById("education");

function handleSubmit(e) {
  e.preventDefault();

  const name_resume = document.getElementById("name_resume");
  name_resume.innerHTML = name.value;

  const email_resume = document.getElementById("email_resume");
  email_resume.innerHTML = email.value;

  const phone_resume = document.getElementById("phone_resume");
  phone_resume.innerHTML = phone.value;

  const github_resume = document.getElementById("github_resume");
  github_resume.innerHTML = github.value;

  const linkedin_resume = document.getElementById("linkedin_resume");
  linkedin_resume.innerHTML = linkedin.value;
  
  const college_name = document.getElementById("college_name");
  college_name.innerHTML = college.value;

  const degree_resume = document.getElementById("degree_resume");
  degree_resume.innerHTML = degree.value;

  const startingyear_resume = document.getElementById("startingyear_resume");
  startingyear_resume.innerHTML = Startingyear.value;

  const endingyear_resume = document.getElementById("endingyear_resume");
  endingyear_resume.innerHTML = endingyear.value;

  const cgpa_resume = document.getElementById("cgpa_resume");
  cgpa_resume.innerHTML = CGPA.value;

  const skill_resume = document.getElementById("skill_resume");
  skill_resume.innerHTML = skill.value;

  const project_resume = document.getElementById("project_resume");
  project_resume.innerHTML = project.value;

  const description1_resume = document.getElementById("description1_resume");
  description1_resume.innerHTML = description1.value;

  const link_resume = document.getElementById("link_resume");
  link_resume.innerHTML = link.value;
  const company_resume = document.getElementById("company_resume");
  company_resume.innerHTML = company.value;
  const designation_resume = document.getElementById("designation_resume");
  designation_resume.innerHTML = designation.value;
  const duration_resume = document.getElementById("duration_resume");
  duration_resume.innerHTML = duration.value;
  const description2_resume = document.getElementById("description2_resume");
  description2_resume.innerHTML = description2.value;


}


function handleLeft() {
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const print = document.querySelector(".print");
  // write more codes here
}
function handlePrint() {
  const right = document.querySelector(".right");
  const left = document.querySelector(".left");
  const print = document.querySelector(".print");
  // write more codes here
}
