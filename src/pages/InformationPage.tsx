import { PageTemplate } from "@/components";

export const InformationPage: React.FC = () => {
  return (
    <PageTemplate
      title="Site Information"
      subtitle="Information pertaining to the construction and hosting of my portfolio website."
    >
      <p>Hello, my name is Colin Birdwell.</p>
      <p>
        Thank you so much for taking time out of your day to view it and read
        over the history of my career.
      </p>
      <p>
        I built this portfolio site as a way to attract the attention of
        perspective employers.
      </p>
      <p>
        I've been using the 3rd person up until this point, but I thought it
        would be a bit more personable if I broke things up a little.
      </p>
      <p>
        This portfolio was constructed from project called
        React_19-Typescript-Boilerplate. This is a boilerplate that I coded to
        serve as a foundation of my future projects. I coded everything from
        scratch and a hyperlink can be found to it on the 'Links and Documents'
        page.
      </p>
      <p>
        This a React frontend coded in Typescript with Vite serving as the build
        tool. It uses Redux Toolkit for a state manager.
      </p>
      <p>
        I use SaSS to extend functionality to CSS which it compiles into a
        single file. Page components are rendered by React-Router based on the
        URL mimicking browser navigation.
      </p>
      <p>
        The folder architecture is based on Atomic Design principles of
        organization. Block Element Method (BEM) is implemented in the
        stylesheets.
      </p>
    </PageTemplate>
  );
};
