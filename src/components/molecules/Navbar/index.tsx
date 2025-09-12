import { formatLink } from "@/utils";
import type { NavbarProps } from "./index.types";
import { NavLink, Column, NavbarCTA } from "@/components";

export const Navbar: React.FC<NavbarProps> = ({
  links,
  parentName,
  onDismiss,
  actionCTA,
  activeLink,
}) => {
  const linksMapped = links.map((link) => {
    const { target, targetText, type, backgroundTheme } = link;
    const isActive = formatLink(target) === activeLink;

    return (
      <Column
        key={`${parentName}-${targetText}`}
        classNames={["align-end", "justify-center"]}
        parentName={parentName}
      >
        <NavLink
          target={target}
          targetText={targetText}
          type={type}
          backgroundTheme={backgroundTheme}
          onDismiss={onDismiss}
          active={isActive}
        />
      </Column>
    );
  });

  return (
    <nav className={`${parentName}_navbar`}>
      {linksMapped}
      <Column classNames={["justify-center"]} parentName={`${parentName}--cta`}>
        <NavbarCTA onPress={actionCTA} />
      </Column>
    </nav>
  );
};
