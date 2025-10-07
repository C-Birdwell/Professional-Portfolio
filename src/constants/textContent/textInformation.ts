import { ENV_OWNER } from "../theme";

const textInformation1 = `Hello my name is ${ENV_OWNER}.`;

const textInformation2 = `Thank you so much for taking time out of your day to view my website and read over the history of my career. I built this portfolio as a way to attract the attention of perspective employers. If you're reading this then it is working!`;

const textInformation3 = `I've been writing in the 3rd person up until this point, but I thought it would be a bit more personable if I broke things up a little. I have written and showcased my frontend and backend expertise, but I wanted to explain how I leveraged those skills to create this website.`;

const textInformation4 = `This portfolio was constructed from a project called React_19-Typescript-Boilerplate which I created. This is a boilerplate serves as a foundation for most projects that I develop. I constructed everything from scratch (excluding some essential libraries) and a hyperlink can be found to code repository on the 'Links and Documents' page. The boilerplate has Redux Toolkit, React Router, SaSS, and Github Pages deployment baked in so it makes refactoring it for projects such as my Professional Portfolio website straightforward.`;

const textInformation5 = `This a React frontend written in Typescript with Vite serving as the build tool. It uses Redux with Redux Toolkit for a state manager. I use SaSS to extend functionality to CSS which it compiles into a single file. Page components are rendered by React-Router based on the URL mimicking browser navigation. I have implemented the Block Element Method (BEM) in my SaSS markup as an organized way of targeting HTML classes.`;

const textInformation6 = `The folder architecture of the portfolio site code is based on Atomic Design principles of organization. The basic idea is that smaller simpler components make larger more complex components. This philosophy and approach leads to clear organized code that is better equipped to handle technical debt. The styles folder reflects this structure by mirroring the React .tsx files.`;

const textInformation7 = `As mentioned before Github hosts the actual site code in a repository. I use that as a central location for split deployments. I have configured a Github Page to host a visual preview of this site and anything else I have built with my React_19-Typescript-Boilerplate. It is deployed to the Github Page via the gh-pages library by running "npm run deploy". For hosting on the actual url WebByBirdwell.com I have utilized AWS. The build files of the site are hosted on an S3 bucket which are populated via a Github Action which utilizes a deploy.yml file located in .github/workflows. Every time the 'main' git branch is updated it's set to auto deploy. These files are served to end users by a CloudFront distribution acting as a CDN.`;

export const textInformationData = [
  textInformation1,
  textInformation2,
  textInformation3,
  textInformation4,
  textInformation5,
  textInformation6,
  textInformation7,
];
