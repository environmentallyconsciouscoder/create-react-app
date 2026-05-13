// App.js (or App.tsx if you're using TypeScript)

import './App.css';
import clsx from 'clsx';

import portfolio1 from "./images/portfolio_one.png";
import portfolio2 from "./images/portfolio_two.png";
import portfolio3 from "./images/portfolio_three.png";
import portfolio4 from "./images/portfolio_four.png";
import portfolio5 from "./images/portfolio_five.png";
import portfolio6 from "./images/portfolio_six.png";
import portfolio7 from "./images/portfolio_seven.png";
import portfolio8 from "./images/portfolio_eight.png";

const projects = [
  {
    name: 'Loopi FAQ Chatbot',
    description:
      'Led FAQ Chatbot Development: Researched, designed, developed, and deployed an FAQ chatbot. Version 1 uses a rule-based system combined with AI from the Rasa open-source framework. The rule-based component provides options to guide users, while the AI predicts responses based on the questions asked. When someone asks a question, the AI compares it to trained examples and assigns a similarity score to predict the best response. The chatbot improves its conversations over time by training on conversational data.',
    link: { href: '', label: 'website' },
    image: portfolio8,
    skills: 'Rasa open-source framework, Python, and React.js. Hosted on an AWS EC2 instance.',
    linkTwo: ''
  },
  {
    name: 'Loopi eCommerce Site and P2P Platform',
    description:
      'Part of a team building the full-stack technologies for Loopi.com. Transforming the old website, Gothrift, to Loopi.com and also developing new functionalities for P2P marketplaces',
    link: { href: 'https://loopi.com/', label: 'website' },
    image: portfolio7,
    skills: 'Node.js, Next.js, React (Hooks, Context API, Redux, React Query), Tailwind CSS, OAuth, TypeScript, Fastify, tRPC, NoSQL, GraphQL, RESTful APIs, TDD, SST (Serverless Stack), and AWS.',
    linkTwo: 'https://loopi.com/'
  },
  {
    name: 'Food Waste Monitoring System',
    description:
      'Visualise a high-level summary of the financial and environmental impacts resulting from food waste. Present more granular data, including forecasts and trends, to help users plan their businesses. The data is presented on a web application and also sent as alerts via email and SMS messages.',
    link: { href: 'https://softwarecornwall.org/news/cornish-start-up-greenkode-wins-place-on-european-accelerator-programme/', label: 'website' },
    image: portfolio1,
    skills: 'React, Context API, CSS, SASS, HTML, AWS Serverless, AWS SDK, Node.js, chart libraries, AWS Lambda, API Gateway, DynamoDB, CloudWatch, Cron, AWS Cognito, AWS CodeCommit, AWS Amplify, CI/CD pipelines, SNS, and SES.',
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
    skills: 'React, Context API, Redux, CSS, SASS, HTML, AWS Serverless, AWS SDK, Node.js, chart libraries, AWS Lambda, API Gateway, DynamoDB, CloudWatch, Cron, AWS Cognito, AWS CodeCommit, AWS Amplify and CI/CD pipelines.',
    linkTwo: 'https://drive.google.com/drive/folders/16F09UZWR7aPK_6ItPUFWPLHnBBvFjTgd?usp=sharing'
  }
];

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
];

export function SocialLink({ icon: Icon, ...props }) {
  return (
    <a className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
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
        {intro && (
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {intro}
          </p>
        )}
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

function App() {
  return (
    <>
      <SimpleLayout title="Work Experiences">
        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <h2 className="mt-6 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                {project.name}
              </h2>

              <Card.Description>{project.description}</Card.Description>

              <Card.Description>
                <strong>{project.skills}</strong>
              </Card.Description>

              <div className="relative z-10 mt-6 overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-[1.02]">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* {project.linkTwo && (
                <Card.Description className="mt-4">
                  <a
                    href={project.linkTwo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    {project.link.href ? 'See more →' : 'View project →'}
                  </a>
                </Card.Description>
              )} */}
            </Card>
          ))}
        </ul>
      </SimpleLayout>

      <SimpleLayout title="Side Projects">
        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projectsTwo.map((project) => (
            <Card as="li" key={project.name}>
              <h2 className="mt-6 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
                {project.link.href ? (
                  <Card.Link
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                  </Card.Link>
                ) : (
                  project.name
                )}
              </h2>

              <Card.Description>{project.description}</Card.Description>

              <Card.Description>
                <strong>{project.skills}</strong>
              </Card.Description>

              <div className="relative z-10 mt-6 overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-[1.02]">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.name}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>

      <div className="h-40" />
    </>
  );
}

export default App;