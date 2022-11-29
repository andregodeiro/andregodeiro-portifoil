import React from "react";
import { Icon, IconAnchor, IconsGrid } from "./styles";

export const SocialMedia = () => {
  return (
    <IconsGrid>
      <IconAnchor
        href="https://www.linkedin.com/in/andr%C3%A9-godeiro-368b4823b/"
        target="_blank"
      >
        <Icon src="https://i.imgur.com/5C8dxyy.png" alt="LinkedIn Icon"></Icon>
      </IconAnchor>
      <IconAnchor href="https://github.com/andregodeiro" target="_blank">
        <Icon src="https://i.imgur.com/VeRacuI.png" alt="GitHub Icon"></Icon>
      </IconAnchor>
      <IconAnchor href="mailto:andrevictor.godeiro@gmail.com">
        <Icon src="https://i.imgur.com/4d7VCOW.png" alt="Email Icon"></Icon>
      </IconAnchor>
    </IconsGrid>
  );
};
