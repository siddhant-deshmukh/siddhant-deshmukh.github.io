const projectsList = document.querySelector('#projects-list')
const projectTypeBtn = document.querySelectorAll("#project-types-list  button")

function updateProjects() {
  const url = new URL(location);
  const projectType = url.searchParams.get("project") || 'mern';
  // console.log(" :", projectType)

  console.log(projectTypeBtn, projectType)
  projectTypeBtn.forEach((btn) => {
    // console.log(btn.target, btn.name)
    if (btn.name && btn.name === projectType) {
      btn.classList.add('selected-project-type')
      btn.classList.remove('non-selected-project-type')
    } else {
      btn.classList.remove('selected-project-type')
      btn.classList.add('non-selected-project-type')
    }
  })

  // console.log('projects list', projectsList.children) 
  const projectElements = projectsList.children
  
  if (projectType && projectType !== 'all') {
    for(let i=0; i< projectElements.length; i++){
      // console.log(projectElements[i], )
      const tags = projectElements[i].dataset?.tag?.split('-') 
      // console.log(tags, projectType, tags.indexOf(projectType))
      if(tags.indexOf(projectType) != -1){
        projectElements[i].classList.add('temp-visible-project')
        projectElements[i].classList.remove('temp-hide-project')
      } else {
        projectElements[i].classList.remove('temp-visible-project')
        projectElements[i].classList.add('temp-hide-project')
      }
    }
  } else {
    for(let i=0; i< projectElements.length; i++){
      projectElements[i].classList.add('temp-visible-project')
      projectElements[i].classList.remove('temp-hide-project')
    }
  }
}

updateProjects()

const buttons = document.querySelectorAll("button.project-filter-btn")
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {

    if (event.target) {
      const url = new URL(location);
      url.searchParams.set("project", event.target.name);

      // console.log(event.target.name)
      history.pushState({ project: event.target.name, name: "meow" }, '', url)
      updateProjects()
    }
  })
})
window.onpopstate = (event) => {
  console.log(event)
}













const observerScale = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting && entry.target.classList) {
      entry.target.classList.add('show-scale')
      entry.target.classList.remove('temp-hide-scale')
    } 
    // else {
    //   entry.target.classList.remove('show-scale')
    //   entry.target.classList.add('temp-hide-scale')
    // }
  })
})

const tempHiddenElementsScale = document.querySelectorAll('.temp-hide-scale')
tempHiddenElementsScale.forEach((ele) => observerScale.observe(ele))


// ----------------------------- old version
const projects = [
  {
    "title": "GoogleForm Clone",
    "img_url": "./src/imgs/project/google-form-clone.gif",
    "github": "https://github.com/siddhant-deshmukh/GoogleFormClone-frontend",
    "url": null,
    "description": "This is a clone of Google Form. One can create form, share it and take responses from others. Have OAuth based authentication from Google and Github.",
    "tech_used": ["MERN", "Redux"]
  },
  {
    "title": "Twitter Clone",
    "img_url": "./src/imgs/project/twitter.png",
    "github": "https://github.com/siddhant-deshmukh/twitter-clone-using-nextjs",
    "url": null,
    "description": "Basic clone of twitter. Implimented SSR using NextJS. Uses azure services Azure Blob, Azure Cosmosdb for MongoDB. State management and frontend caching using React Query.",
    "tech_used": ["Next.js", "MongoDB", "Azure", "TailwindCSS", "React Query"]
  },
  {
    "title": "Instagram Clone",
    "img_url": "./src/imgs/project/insta-clone.gif",
    "github": "https://github.com/siddhant-deshmukh/firebase-insta",
    "url": "Instagram Clone made using a BaaS Firebase. Responsive UI with Dark Mode. Uses firebase services for authentication, database and file storage. Scalable and Secure.",
    "description": "Website for HR / companies to take resume and basic information from applicants. Uses AWS S3 to store resumes.",
    "tech_used": ["Firebase", "React"]
  },
  {
    "title": "Transport Hub",
    "img_url": "./src/imgs/project/transport-hub.gif",
    "github": "https://github.com/siddhant-deshmukh/TranportHub",
    "url": null,
    "description": "Have chat functionality. JWT token based custom authentication.",
    "tech_used": ["JWT", "BcrypthJS", "MERN"]
  },
  {
    "title": "Form App",
    "img_url": "./src/imgs/project/google-form-clone.gif",
    "github": "https://github.com/siddhant-deshmukh/form-app-golang-postgres",
    "url": null,
    "description": "One can create form, share it and take responses from others. Have a very functional UI, Focus has been given on scalability and secuirty of the application.",
    "tech_used": ["Go", "PostgreSQL", "Gin", "React", "Redux"]
  },
  {
    "title": "Card Printers",
    "img_url": "./src/imgs/project/card-printers.gif",
    "github": "https://github.com/siddhant-deshmukh/card-printers",
    "url": null,
    "description": "Beautiful, static, responsive website.",
    "tech_used": ["HTML", "CSS"]
  },
  // {
  //   "title": "YourHR",
  //   "img_url": "",
  //   "github": "https://github.com/siddhant-deshmukh/YourHR",
  //   "url": null,
  //   "description": "Website for HR / companies to take resume and basic information from applicants. Uses AWS S3 to store resumes.",
  //   "tech_used": ["AWS-s3", "MERN", "JWT", "BcryptJS"]
  // },
]

// ${project.tech_used.slice(0,3).map((tech)=>`<span class="bg-b py-1 px-3 rounded-md">${tech}</span>`).join(" ")}
// ${(project.img_url)?project.img_url:'./src/imgs/default.png'}
// ${project.description.split(".").slice(0,-1).map((line)=>`<li class="pl-1">&#x2022; ${line}</li>`).join(" ")}
const projectsComponents = projects.map((project) => {
  return `
  <div 
    class="temp-hide-scale w-96 min-h-fit aspect-auto lg:aspect-[1.25]  max-h-none lg:max-h-[80vh] overflow-hidden">
    <div class="relative flex flex-col border border-primary w-full lg:h-full shadow-md">
      <div class="absolute flex  z-30 bottom-0 left-0 text-sm text-base2 space-x-1">
        ${project.tech_used.slice(0, 3).map((tech) => `<span class="bg-secondary text-base2 font-semibold text-xs xl:text-sm py-0.5 px-1">${tech}</span>`).join(" ")}
      </div>
      <div class="px-5 pt-5 pb-10 text-left min-h-fit h-fit">
        <div class="flex w-full justify-between items-center">
          <h1 class="text-xl text-gray-200 truncate ... overflow-hidden font-bold">${project.title}</h1>
          <a href=${project.github} target="_blank">
            <img class="w-9 h-9  rounded-full" src="./src/imgs/github.svg" />
          </a>
        </div>
        <ul class="space-y-1 text-slate-300 min-h-[30px]">
          ${project.description.split(".").slice(0, -1).map((line) => `<li class="pl-1 whitespace-normal">&#x2022; ${line}</li>`).join(" ")}
        </ul>
      </div>
    </div>
  </div>`
})

function addProjectComponents(projectsComponents) {
  const projectsContainer = document.querySelector("#projects-list")
  projectsComponents.forEach(pro => {
    const li = document.createElement("li")
    // console.log(pro)
    li.innerHTML = pro
    projectsContainer.appendChild(li)
  })
}

// addProjectComponents(projectsComponents)

