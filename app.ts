document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resume-form') as HTMLFormElement;
  const resumeContainer = document.getElementById('resume') as HTMLElement;

  form.addEventListener('submit', (event: Event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = formData.get('name') as string;
      const location = formData.get('location') as string;
      const phone = formData.get('phone') as string;
      const email = formData.get('email') as string;
      const jobTitle = formData.get('job-title') as string;
      const company = formData.get('company') as string;
      const jobDates = formData.get('job-dates') as string;
      const educationDegree = formData.get('education-degree') as string;
      const educationInstitution = formData.get('education-institution') as string;

      const resumeHtml = `
          <header>
              <h1 contenteditable="true">${name}</h1>
              <p contenteditable="true">${location} | ${phone} | ${email}</p>
          </header>
          <main>
              <section class="experience">
                  <h2>Work Experience</h2>
                  <div class="job">
                      <h3 contenteditable="true">${jobTitle}</h3>
                      <p contenteditable="true">${company} (${jobDates})</p>
                      <ul>
                          <li contenteditable="true">Developed and executed video content strategies.</li>
                          <li contenteditable="true">Scripted, shot, directed, and edited video content.</li>
                          <li contenteditable="true">Collaborated with fitness models and staff to create compelling visuals.</li>
                          <li contenteditable="true">Utilized advanced video production techniques.</li>
                          <li contenteditable="true">Enhanced social media presence, drove engagement, and promoted programs.</li>
                      </ul>
                  </div>
              </section>

              <section class="education">
                  <h2>Education</h2>
                  <div class="degree">
                      <h3 contenteditable="true">${educationDegree}</h3>
                      <p contenteditable="true">${educationInstitution} (Present)</p>
                  </div>
              </section>

              <section class="skills">
                  <h2>Skills</h2>
                  <ul>
                      <li contenteditable="true">Communication Skills</li>
                      <li contenteditable="true">Maintenance</li>
                      <li contenteditable="true">JavaScript</li>
                      <li class="hidden" contenteditable="true">ReactJS</li>
                      <li class="hidden" contenteditable="true">Video Editing</li>
                      <li class="hidden" contenteditable="true">Artificial Intelligence</li>
                      <li class="hidden" contenteditable="true">Marketing</li>
                  </ul>
                  <button class="toggle-button">see more</button>
              </section>
          </main>
      `;

      resumeContainer.innerHTML = resumeHtml;

      // Add event listener for "see more" button
      const toggleButton = document.querySelector(".toggle-button") as HTMLButtonElement | null;
      const hiddenElements = document.querySelectorAll(".hidden") as NodeListOf<HTMLElement>;

      toggleButton?.addEventListener('click', () => {
          hiddenElements.forEach(element => {
              element.classList.toggle('show');
          });
      });
  });
});
