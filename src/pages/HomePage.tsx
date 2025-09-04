import { PageTemplate } from "@/components";
const envTitle = import.meta.env.VITE_API_TITLE;
const envOwner = import.meta.env.VITE_API_OWNER;

export const HomePage: React.FC = () => {
  return (
    <PageTemplate title={envTitle} subtitle={`Created by ${envOwner}`}>
      <p>Hello World</p>
    </PageTemplate>
  );
};
