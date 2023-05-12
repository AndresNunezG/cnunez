const links = [
  {slugName: "github", icon: ['fab', 'github'], url: "https://github.com/AndresNunezG", color: 'var(--color-text)'},
  {slugName: "linkedin", icon: ['fab', 'linkedin'], url: "https://linkedin.com/in/andresnunezg", color: 'var(--color-text)'},
  {slugName: "twitter", icon: ['fab', 'twitter'], url: "https://twitter.com/_camsky", color: 'var(--color-text)'},
]

const tools = [
  {slugName: "vuejs", icon: ['fab', 'vuejs'], url: "https://vuejs.org/", color: '#42B883'},
  {slugName: "bootstrap", icon: ['fab', 'bootstrap'], url: "https://getbootstrap.com/", color: '#aa66cc'},
  {slugName: "fontawesome", icon: ['fab', 'font-awesome'], url: "https://fontawesome.com/", color: '#136DBE'},
]

const techstack = [
  {slugName: "python", name:"Python", borderColor: "#3473A6"},
  {slugName: "javascript", name:"JavaScript", borderColor: "#FFCD3C"},
  {slugName: "django", name:"Django", borderColor: "#127C54"},
  {slugName: "vue",  name:"Vue", borderColor: "#42B883"},
  {slugName: "postgreql", name:"PostgreSQL", borderColor: "#336790"},
  {slugName: "aws", name:"AWS", borderColor: "#FFCD3C"},
  {slugName: "html", name:"HTML5 & CSS3", borderColor: "#00ABE4"},
  {slugName: "git", name:"Git & Github", borderColor: "#F26524"},
]

const jobs = [
  {
    startDate: "Jan 2021",
    finishData: "Jul 20021",
    companyName: "Global Hitss",
    websiteLink: "https://globalhitss.com/",
    roleTitle: "Intern",
    roleDescription: [
      `Perform the requirements analysis,
      design and partial implementation of
      a virtual assistant for the PoC of an RPA platform
      `,
      `Ensure guidelines and standards in
      the design and development of RPA virtual
      assistants in the QA stage, reviewing their code
      `
    ]
  },
  {
    startDate: "Sept 2021",
    finishData: "Present",
    companyName: "Swapps",
    websiteLink: "https://swapps.com/",
    roleTitle: "Junior Engineer",
    roleDescription: [
      `Design and develop and deploy several frontend
      and backend functionalities for an e-commerce
      platform for hardware stores in the
      Colombian valley
      `,
      `Codebase dependency maintenance of
      internal and clients proyects
      `,
      `Direct communication with customers
      to provide technical and product support
      `,
    ]
  }
]

const projects = [
  {
    title: "Product Feedback App",
    description:`Frontend mentor product feedback app`,
    link: "",
    repository: "https://github.com/AndresNunezG/product-feedback-app",
    techs: ["Vue", "Pure CSS"]
  },
  {
    title: "E-commerce Vue template",
    description:`Responsive E-commerce template with product list, cart and resume`,
    link: "",
    repository: "https://github.com/AndresNunezG/shop",
    techs: ["TypeScript", "Vue", "Bootstrap", "Vite"]
  },
  {
    title: "Atenea",
    description:`Use ChatGPT 3.5 Turbo power in terminal, rendering using markdown`,
    link: "",
    repository: "https://github.com/AndresNunezG/Atenea",
    techs: ["Python", "Typer", "Rich"]
  },
  {
    title: "Vue Password Generator",
    description: `Generate secure passwords choosing different lengths and sets of characters`,
    repository: "https://github.com/AndresNunezG/VuePasswordGenerator",
    techs: ["Vue", "Vite", "Pure CSS responsive"]
  },
  {
    title: "Crypto Data",
    description: `data and charts of the main cryptocurrencies`,
    link: "https://cryptocurrency-data.netlify.app/",
    repository: "https://github.com/AndresNunezG/crypto-react-app",
    techs: ['React', 'TailwindCSS', 'ChartJS']
  },
  {
    title: "Live Markdown Editor",
    description: `Web App to edit and Preview, in real time, markdown documents`,
    link: "https://live-md-editor.netlify.app/",
    repository: "https://github.com/AndresNunezG/markdown-editor",
    techs: ['React', 'Marked']
  },
  {
    title: "This website!",
    description: `Single page application used as portfolio, blog and contact page`,
    link: "",
    repository: "https://github.com/AndresNunezG/cnunez",
    techs: ['Vue', 'Bootstrap5', 'Firestore', 'Vite']
  },
]

export {
  links,
  tools,
  techstack,
  jobs,
  projects,
}
