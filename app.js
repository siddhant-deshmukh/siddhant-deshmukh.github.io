// -------------------------------------------------------------------------------------------------------------------------------
//*  -------------------------------------------------    Project List   -------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

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
    class="max-w-xl temp-hide-scale w-auto aspect-auto lg:aspect-[0.9]  max-h-none lg:max-h-[80vh] overflow-hidden">
    <div class="relative flex flex-col border border-primary w-full lg:h-full shadow-md">
      <div class="absolute flex  z-30 bottom-0 left-0 text-sm text-base2 space-x-1">
        ${project.tech_used.slice(0, 3).map((tech) => `<span class="bg-secondary text-base2 font-semibold text-xs xl:text-sm py-0.5 px-1">${tech}</span>`).join(" ")}
      </div>
      <div class="relative overflow-hidden max-h-80 min-h-[200px] w-full bg-white">
        <img class="w-full aspect-[1.0]" src=${(project.img_url) ? project.img_url : './src/imgs/default.png'} />
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

addProjectComponents(projectsComponents)

const projectFilterBtns = document.querySelectorAll('.project-filter')
// console.log(projectFilterBtnconsole.logs)
projectFilterBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(btn.value, btn)
  })
})


// -------------------------------------------------------------------------------------------------------------------------------
//*  -------------------------------------------------    Smooth transitions on scroll  -------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // console.log(entry)
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show')
//     }
//     // else {
//     //   entry.target.classList.remove('show')
//     // }
//   })
// })
// const skillCards = document.querySelectorAll('#skills-list  img')
// for(let skillCard of skillCards){
//   skillCard.classList.add('temp-hide-scale')
// }

// const tempHiddenElements = document.querySelectorAll('.temp-hidden')
// tempHiddenElements.forEach((ele) => observer.observe(ele))

// // console.log(skillCards)
// skillCards.forEach((ele) => observer.observe(ele))

const observerScale = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
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

const inViewAnimeEle = document.querySelectorAll('.temp-hidden')

for(let ele of inViewAnimeEle){
  for(let child of ele.children){
    child.classList.add("temp-hide")
    child.classList.remove("temp-show")
  }
}

const elementInViewObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target.children.item())
      var delay = 0
      for(let child of entry.target.children){
        // console.log(child)
        child.classList.remove("temp-hide")
        child.classList.add("temp-show")
        child.style.transitionDelay = delay.toString() + "ms"
        if(delay < 1000){
          delay += 200
        }
      }
    } 
    // else {
    //   for(let child of entry.target.children){
    //     child.classList.add("temp-hide")
    //     child.classList.remove("temp-show")
    //   }
    // }
  })
}, { threshold: 0.5 })

inViewAnimeEle.forEach((ele) => elementInViewObserver.observe(ele))

// -------------------------------------------------------------------------------------------------------------------------------
//*  -------------------------------------------------    Smooth transitions of navbar  -------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------
const mainNavBar = document.querySelector('#main-nav-bar')
const tempNavBar = document.querySelector('#temp-nav-bar')

const navObserver = new IntersectionObserver((entries) => {
  // console.log(entries)
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      tempNavBar.classList.add('temp-hide-nav')
      tempNavBar.classList.remove('show-nav')
      mainNavBar.classList.add('show-nav')
      mainNavBar.classList.remove('temp-hide-nav')
    } else {
      tempNavBar.classList.remove('temp-hide-nav')
      tempNavBar.classList.add('show-nav')
      mainNavBar.classList.remove('show-nav')
      mainNavBar.classList.add('temp-hide-nav')
    }
  })
}, { rootMargin: '50px' })

const projectSection = document.querySelector('#temp-nav-bar')
navObserver.observe(projectSection)


// *--------------------------------------------------------------------------------------------------------------------------

var heroSection = document.querySelector('#hero-section')

function resizeImg() {
  let heroSecSize = heroSection?.getBoundingClientRect()
  if (heroSecSize) {
    const { width, height } = heroSecSize

    // console.log("Here")
    if (width > 1580) {
      // console.log("here")
      document.documentElement.style.setProperty("--three-d-cube-size", "650px")
    } else if (width > 1280) {
      // console.log(width, (width - 800 - 100) + "px")
      document.documentElement.style.setProperty("--three-d-cube-size", (width - 800 - 100) + "px")
    } else if(width <= 640 ) {
      document.documentElement.style.setProperty("--three-d-cube-size", (width - 100) + "px")
    } else {
      document.documentElement.style.setProperty("--three-d-cube-size", (width / 2) + "px")
    }
  }
}
resizeImg()
// if(heroSecSize){
//   const { width, height } = heroSecSize

//   console.log("Here")
//   if(width > 1580){
//     console.log("here")
//     document.documentElement.style.setProperty("--three-d-cube-size","650px")
//   } else if(width > 1000) {
//     console.log(width, (width - 800 - 100) + "px")
//     document.documentElement.style.setProperty("--three-d-cube-size", (width - 800 - 100) + "px")
//   }
// }

addEventListener('resize', resizeImg)

var cube = document.querySelector('.cube');
var currentClass = '';

const skills_img_url = [
  "./src/imgs/colored-svg/react.svg",
  "./src/imgs/colored-svg/nodejs.svg",
  "./src/imgs/colored-svg/mongodb.svg",
  "./src/imgs/colored-svg/postgresql.svg",
  "./src/imgs/colored-svg/go.svg",
  "./src/imgs/colored-svg/python.svg",
  // "./src/imgs/colored-svg/firebase.svg",
  "./src/imgs/colored-svg/docker.svg",
  "./src/imgs/colored-svg/kubernetes.svg",
  "./src/imgs/colored-svg/git.svg",
]

const sides = ['front', 'left', 'back', 'right', 'bottom', 'top']
var index = 0
var count = 0

for (let count = 0; count < sides.length; count++) {
  var currCube = document.querySelector(`#cube_${sides[count]}`)
  if (currCube) {
    currCube.innerHTML = `
      <img class="w-full h-full p-5" src = ${skills_img_url[count]} />
    `
  }
}

setInterval(() => {

  var showClass = 'show-' + sides[index];
  var currCube = document.querySelector(`.cube_${sides[index]}`)
  if (currCube) {
    currCube.innerHTML = `
      <img class="w-full h-full p-5" src = ${skills_img_url[count]} />
    `
  }
  if (currentClass) {
    cube.classList.remove(currentClass);
    cube.classList.remove('opacity-0');
  }
  cube.classList.add(showClass);
  cube.classList.add('opacity-100');

  currentClass = showClass;

  index += 1
  count += 1
  if (index > 5) {
    index = 0
  }
  if (count >= skills_img_url.length) {
    count = 0
  }
}, 3000)
// radioGroup.addEventListener( 'change', changeSide );

