import React, { FunctionComponent } from "react";

const PersonalInfo: FunctionComponent = () => {
  return (
    <aside>
      <div id="personal-info">
        Personal blog. Name{" "}
        <a>
          <u>Jonh Brown</u>
        </a>
        . Designing, building, scaling software
      </div>
      <img
        id="personal-image"
        src="https://picsum.photos/seed/picsum/200/300"
        alt="image"
      />
    </aside>
  );
};

export { PersonalInfo };
