export const convertVariantClassNames = (
  currentName: string,
  classNamesList?: string[]
) => {
  const classNamesListFiltered =
    classNamesList?.filter((name) => name !== "") || [];

  const isNewNameNotValid = () => {
    return classNamesListFiltered?.length > 0;
  };

  if (!isNewNameNotValid()) {
    return currentName;
  }

  const mapClassNamesList = () =>
    classNamesListFiltered?.map(
      (name) => ` ${currentName}--${name.toLowerCase().split(" ").join("-")}`
    );

  return `${currentName}${mapClassNamesList()}`.replace(/,/g, "");
};

export const disabledClassName = (disabled: boolean) => {
  return disabled ? "disabled" : "";
};

export const convertParentClassName = (
  currentName: string,
  parentName: string = ""
) => {
  return parentName === "" ? "" : ` ${parentName}_${currentName}`;
};

export const setClassNames = (
  currentName: string,
  parentName?: string,
  classNamesList?: string[]
) => {
  return `${convertVariantClassNames(
    currentName,
    classNamesList
  )}${convertParentClassName(currentName, parentName)}`;
};

export const formatLink = (target: string) =>
  target === "/" ? "home" : target.split("").slice(1).join("");

export const arrayJoin = <T>(array: T[], separator: string) =>
  array.join(separator);
