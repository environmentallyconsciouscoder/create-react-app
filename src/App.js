import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom for Link component
import clsx from 'clsx';
import image1 from "./images/image-1.jpg"
import image2 from "./images/image-2.jpg"
import image3 from "./images/image-3.jpg"

import portfolio1 from "./images/portfolio_one.png"
import portfolio2 from "./images/portfolio_two.png"
import portfolio3 from "./images/portfolio_three.png"
import portfolio4 from "./images/portfolio_four.png"
import portfolio5 from "./images/portfolio_five.png"
import portfolio6 from "./images/portfolio_six.png"
import portfolio7 from "./images/portfolio_seven.png"
import portfolio8 from "./images/portfolio_eight.png"

const projects = [
  {
    name: 'Loopi FAQ Chatbot',
    description:
      'Led FAQ Chatbot Development: Researched, designed, developed, and deployed an FAQ chatbot. Version 1 uses a rule-based system combined with AI from the Rasa open-source framework. The rule-based component provides options to guide users, while the AI predicts responses based on the questions asked. When someone asks a question, the AI compares it to trained examples and assigns a similarity score to predict the best response. The chatbot improves its conversations over time by training on conversational data.',
    link: { href: '', label: 'website' },
    image: portfolio8,
    skills:'Rasa open-source framework, Python, and React.js. Hosted on an AWS EC2 instance.',
    linkTwo: ''
  },
  {
    name: 'Loopi eCommerce Site and P2P Platform',
    description:
      'Part of a team building the full-stack technologies for Loopi.com. Transforming the old website, Gothrift, to Loopi.com and also developing new functionalities for P2P marketplaces',
    link: { href: 'https://loopi.com/', label: 'website' },
    image: portfolio7,
    skills:'Node.js, Next.js, React (Hooks, Context API, Redux, React Query), Tailwind CSS, OAuth, TypeScript, Fastify, tRPC, NoSQL, GraphQL, RESTful APIs, TDD, SST (Serverless Stack), and AWS.',
    linkTwo: 'https://loopi.com/'
  },
  {
    name: 'Food Waste Monitoring System',
    description:
      'Visualise a high-level summary of the financial and environmental impacts resulting from food waste. Present more granular data, including forecasts and trends, to help users plan their businesses. The data is presented on a web application and also sent as alerts via email and SMS messages.',
    link: { href: 'https://softwarecornwall.org/news/cornish-start-up-greenkode-wins-place-on-european-accelerator-programme/', label: 'website' },
    image: portfolio1,
    skills:'React, Context API, CSS, SASS, HTML, AWS Serverless, AWS SDK, Node.js, chart libraries, AWS Lambda, API Gateway, DynamoDB, CloudWatch, Cron, AWS Cognito, AWS CodeCommit, AWS Amplify, CI/CD pipelines, SNS, and SES.',
    linkTwo: 'https://drive.google.com/drive/folders/1yBIekBIWUp35pYzvqMzpGUWsYM2Onyb2'
  },
  {
    name: 'Business Intelligence System',
    description:
      'Created an interactive map showcasing the density of hospitality businesses across the UK. This initiative empowered our sales team to strategically choose new network locations. I sourced the data using ETL and developed the front end, back end, and database. Additionally, I created an interactive dashboard for the mobile app designed for B2B clients.',
    link: { href: 'https://limetrack.earth/', label: 'website' },
    image: portfolio2,
    skills: 'Flutter for web and mobile, Neo4j, GraphQL, BeautifulSoup, Python, Pandas, MVVM architecture',
    linkTwo: 'https://drive.google.com/drive/folders/1gGHlSFepC0UCuIeZ7Wzp4fl0jWIY8e7M?usp=sharing'
  },
  {
    name: 'CRM System',
    description:
      'Developed a CRM system for onboarding new users and managing pilots. The automated onboarding process incorporates tasks such as sending emails, completing multiple forms, creating company accounts, and integrating QR codes. Additionally, I designed and built a dashboard to display various waste records for our clients.',
    link: { href: 'https://scoopmybin.com/', label: 'website' },
    image: portfolio3,
    skills:'React, Context API, Redux, CSS, SASS, HTML, AWS Serverless, AWS SDK, Node.js, chart libraries, AWS Lambda, API Gateway, DynamoDB, CloudWatch, Cron, AWS Cognito, AWS CodeCommit, AWS Amplify and CI/CD pipelines.',
    linkTwo: 'https://drive.google.com/drive/folders/16F09UZWR7aPK_6ItPUFWPLHnBBvFjTgd?usp=sharing'
  }
]

const projectsTwo = [
  {
    name: 'Pomodoro Application',
    description:
      'A program designed to allow users to boost productivity with task tracking and a pomodoro time to record focus time. Built upon a REST API and integration with the Google Calendar Events API.',
    link: { href: '', label: '' },
    image: portfolio4,
    skills: 'TDD, Java, SpringBoot, React, Typescript and Google Calendar API',
    linkTwo: 'https://github.com/orgs/TRGroupProject/repositories'
  },
  {
    name: 'Financial Sentiment Analysis Platform',
    description:
      'Prototyped an AI-driven Financial Sentiment Analysis app for analysing news articles in real time.',
    link: { href: '', label: '' },
    image: portfolio6,
    skills: 'Hugging Faces Transformers Library, Fast API, MySQL, Python, React, TypeScript',
    linkTwo: 'https://github.com/orgs/Invest-Insight-App/repositories'
  },
  {
    name: 'Auto ML Platform',
    description:
      'Prototyped a no-code platform for performing simple data science and machine learning tasks. Users can upload their CSV files and choose their parameters. They can also chat with OpenAI to ask machine learning-related questions',
    link: { href: '', label: '' },
    image: portfolio5,
    skills: 'Pandas, Open AI, Numpy, Fast API, Python, React, Scikit-learn',
    linkTwo: 'https://github.com/orgs/Auto-ML-Platform/repositories'
  }
]

export function SocialLink({ icon: Icon, ...props }) {
  return (
    <a className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48C3 6.58 3.88 7.5 4.98 7.5C6.08 7.5 7 6.58 7 5.48C7 4.38 6.08 3.5 4.98 3.5ZM4 8H6V21H4V8ZM8.25 8H10.25V9.79H10.29C10.77 8.84 11.85 8 13.34 8C16.09 8 16.5 9.72 16.5 12.09V21H14.5V12.93C14.5 11.43 14.47 9.64 12.5 9.64C10.5 9.64 10.25 11.18 10.25 12.83V21H8.25V8Z"/>
    </svg>
  );
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
      />
    </svg>
  );
}

export function ContainerOuter({ className, children, ...props }) {
  return (
    <div className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">{children}</div>
    </div>
  );
}

export function ContainerInner({ className, children, ...props }) {
  return (
    <div className={clsx('relative px-4 sm:px-8 lg:px-12', className)} {...props}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
}

export function Container({ children, ...props }) {
  return (
    <ContainerOuter {...props}>
      <ContainerInner>{children}</ContainerInner>
    </ContainerOuter>
  );
}

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  );
}

export function Card({ as, className, children }) {
  let Component = as ?? 'div';

  return (
    <Component className={clsx(className, 'group relative flex flex-col items-start')}>
      {children}
    </Component>
  );
}

Card.Link = function CardLink({ href, children }) {
  return (
    <a href={href} className="text-blue-500 hover:text-blue-700">
      {children}
    </a>
  );
};

Card.Description = function CardDescription({ children }) {
  return (
    <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  );
};

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3].map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software Engineer, Founder, Data and AI Enthusiast.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Hey, my name is James. I have over five years of experience in software development. Throughout my career, I have built and managed projects with a strong track record of taking a business-oriented approach to product development, ensuring that I understand user and data requirements while working in an agile manner to meet demands. I have experience working both independently and within cross-functional teams, collaborating with technical and non-technical members to deliver solutions.
            <br />
            <div style={{height: "1rem"}}></div>
              <p style={{fontWeight: "bold"}}>My current tech stack includes Node.js, Next.js, React (Hooks, Context API, Redux, React Query), Tailwind CSS, OAuth, TypeScript, Fastify, tRPC, NoSQL, GraphQL, RESTful APIs, TDD, SST (Serverless Stack), FastAPI, Rasa, Python, and AWS.</p>
            {/* <br /> */}
            {/* <div style={{height: "1rem"}}></div>
            I advocate for TDD and have experience in unit testing using frameworks such as jsdom, Jest, and JUnit. I prefer to keep my code DIY, applying SOLID principles and adopting good design patterns (structural, creational, and behavioral). Additionally, I manage my workflow using CI/CD and Docker. I possess a good understanding of data structures and algorithms.
            <br /> */}
            {/* <div style={{height: "1rem"}}></div>
            Throughout my career, I have a proven track record of managing and building projects. I consistently adopt a business-oriented approach to software development, ensuring I understand users' and data requirements and work agilely to meet their demands. I have experience working independently and in cross-functional teams (both technical and non-technical members) to deliver solutions. Additionally, I founded my own company where I built MVPs, pitched ideas, secured grants, hired and led teams, and managed multiple stakeholders including investors, board members, teams, and alpha testing (at venues such as O2 Stadium, Harvey Nichols, Francis Crick Institute, and more).
            <br /> */}
            {/* <div style={{height: "1rem"}}></div>
            During my career break, I enrolled in a bootcamp to learn machine learning and generative AI, which I have been integrating into software development.
            <br />
            <div style={{height: "1rem"}}></div>
            As I prepare to return to work, I am eager to find a steady job where I can settle down and contribute to the company's success. I am enthusiastic about making a positive impact at work, helping customers solve problems, collaborating with a new team, and learning from each other.
            <br /> */}
            {/* <div style={{height: "1rem"}}></div>
            You can explore my GitHub page on by clicking <a href="https://bit.ly/3WkuP5M" target="_blank">here</a> */}
          </p>
          <div className="mt-6 flex gap-6">
          <SocialLink
              href="https://github.com/environmentallyconsciouscoder"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink href="https://www.linkedin.com/in/jcct100/" aria-label="Follow on Linkedin" icon={XIcon} />
          </div>
        </div>
      </Container>
      <Photos />

      <SimpleLayout
        title="Work Experiences"
        >
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <Card as="li" key={project.name}>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <Card.Description><p style={{fontWeight: "bold"}}>{project.skills}</p></Card.Description>
                <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <img
                    src={project.image}
                    alt=""
                    sizes="(max-width: 640px) 18rem, 11rem"
                    className="w-full object-cover"
                  />
                  {/* <span className="ml-2">{project.link.label}</span> */}
                </div>
                <Card.Description><a href={project.linkTwo} target="_blank">{project.linkTwo !== "" ? "See More": ""}</a></Card.Description>
              </Card>
            ))}
          </ul>
      </SimpleLayout>

      <SimpleLayout
        title="Side Projects"
        >
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projectsTwo.map((project) => (
              <Card as="li" key={project.name}>
                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <Card.Description><p style={{fontWeight: "bold"}}>{project.skills}</p></Card.Description>
                <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <img
                    src={project.image}
                    alt=""
                    sizes="(max-width: 640px) 18rem, 11rem"
                    className="w-full object-cover"
                  />
                  {/* <span className="ml-2">{project.link.label}</span> */}
                </div>
                <Card.Description><a href={project.linkTwo} target="_blank">See GitHub</a></Card.Description>
              </Card>
            ))}
          </ul>
      </SimpleLayout>
      <div style={{height: "10rem"}}></div>

    </>
  );
}

export default App;