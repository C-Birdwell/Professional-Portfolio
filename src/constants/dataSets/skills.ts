import {
  image_aws,
  image_babel,
  image_css,
  image_figma,
  image_flask,
  image_git,
  image_html,
  image_javascript,
  image_jira,
  image_jquery,
  image_mysql,
  image_node,
  image_postgresql,
  image_python,
  image_react,
  image_redux,
  image_sass,
  image_typescript,
  image_vite,
  image_vscode,
  aws_dev,
  aws_pract,
} from "@/assets";
import type { SkillsImageData } from "@/lib";

export const awsImageData: SkillsImageData = [
  {
    path: aws_pract,
    labels: [
      "AWS Certified Cloud Practitioner",
      "4498f4c056f14957a1a166769c685e7d",
    ],
  },
  {
    path: aws_dev,
    labels: [
      "AWS Certified Developer - Associate",
      "522956e59e6e476194e35bd549cba969",
    ],
  },
];

export const skillsImageData: SkillsImageData = [
  { path: image_html, labels: ["HTML", "HTML5"] },
  { path: image_css, labels: ["CSS", "CSS3", "CSS4"] },
  { path: image_javascript, labels: ["Javascript", "JavaScript"] },
  { path: image_typescript, labels: ["Typescript", "TypeScript"] },
  { path: image_python, labels: ["Python"] },
  { path: image_flask, labels: ["Flask", "Python Flask"] },
  { path: image_sass, labels: ["SaSS"] },
  { path: image_react, labels: ["React", "ReactJS", "React 19"] },
  { path: image_redux, labels: ["Redux", "Redux Toolkit", "RTK Query"] },
  { path: image_vite, labels: ["Vite"] },
  { path: image_vscode, labels: ["VSCode", "Visual Studio Code"] },
  { path: image_git, labels: ["Git", "GitHub"] },
  { path: image_aws, labels: ["AWS", "Lambda", "AWS EC2", "AWS S3"] },
  { path: image_figma, labels: ["Figma"] },
  { path: image_jira, labels: ["Jira"] },
  { path: image_node, labels: ["NodeJS", "NPM"] },
  { path: image_babel, labels: ["Babel"] },
  { path: image_postgresql, labels: ["PostgreSQL"] },
  { path: image_mysql, labels: ["MySQL"] },
  { path: image_jquery, labels: ["JQuery"] },
];
