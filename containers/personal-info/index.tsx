import React, { FunctionComponent } from "react";

const PersonalInfo: FunctionComponent = () => {
  return <aside id="personal-info">Personal blog. Name <a><u>Jonh Brown</u></a>. 
  Designing, building, scaling software
  <img id="personal-image" src="https://picsum.photos/seed/picsum/200/300" alt="image"/>
  </aside>;
};

export { PersonalInfo };
