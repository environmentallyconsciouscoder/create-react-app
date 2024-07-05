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

const projects = [
  {
    name: 'Food Waste Monitoring System',
    description:
      'Visualise a high-level summary of the financial and environmental impacts resulting from food waste. Present more granular data, including forecasts and trends, to help users plan their businesses. Additionally, I have created a customer live feed to showcase the positive impact for our B2C clients.',
    link: { href: 'https://softwarecornwall.org/news/cornish-start-up-greenkode-wins-place-on-european-accelerator-programme/', label: 'website' },
    image: portfolio1
  },
  {
    name: 'Business Intelligence System',
    description:
      'Headed an Innovate UK project, where I created an interactive map showcasing the density of hospitality businesses across the UK. This initiative empowered our sales team to strategically choose new network locations. I sourced the data using ETL and developed the front end, back end, and database. Additionally, I created an interactive dashboard for the mobile app designed for B2B clients.',
    link: { href: 'https://limetrack.earth/', label: 'website' },
    image: portfolio2
  },
  {
    name: 'CRM System',
    description:
      'Developed a CRM system for onboarding new users and managing pilots. The automated onboarding process incorporates tasks such as sending emails, completing multiple forms, creating company accounts, and integrating QR codes. Additionally, I designed and built a dashboard to display various waste records for our clients.',
    link: { href: 'https://scoopmybin.com/', label: 'website' },
    image: portfolio3
  }
]

const projectsTwo = [
  {
    name: 'Azure Project',
    description:
      'Configured and managed a Databricks workspace, including cluster setup, storage, and secure access using service principals. Created notebooks for ETL processes in the ingestion and processing layers, displaying results in reports and tables. Utilized various data patterns, such as full load and incremental load, to meet pipeline requirements. Employed Azure Data Factory to schedule and run notebooks for ingestion and transformations.',
    link: { href: '', label: '' },
    image: portfolio4
  },
  {
    name: 'Financial Sentiment Analysis Platform',
    description:
      'Prototyped an AI-driven Financial Sentiment Analysis app for analyzing news articles in real time.',
    link: { href: '', label: '' },
    image: portfolio5
  },
  {
    name: 'Auto ML Platform',
    description:
      'Prototyped a no-code platform for performing data science and machine learning tasks. Users can upload their CSV files and choose their parameters. They can also chat with OpenAI to ask machine learning-related questions',
    link: { href: '', label: '' },
    image: portfolio6
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
      <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
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
            I’m James, a Software Engineer based in the United Kingdom. I’m passionate about building web and mobile applications.
            I have gained experience as a Full Stack Developer in several startups, which enabled me to acquire a diverse set of technical and non-technical skills.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://twitter.com/friendlycoding" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="https://github.com/environmentallyconsciouscoder"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
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
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <img
                    src={project.image}
                    alt=""
                    sizes="(max-width: 640px) 18rem, 11rem"
                    className="w-full object-cover"
                  />
                  {/* <span className="ml-2">{project.link.label}</span> */}
                </div>
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
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
                <div className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <img
                    src={project.image}
                    alt=""
                    sizes="(max-width: 640px) 18rem, 11rem"
                    className="w-full object-cover"
                  />
                  {/* <span className="ml-2">{project.link.label}</span> */}
                </div>
              </Card>
            ))}
          </ul>
      </SimpleLayout>
    </>
  );
}

export default App;