import * as React from "react";

import "./textBlock.scss";

interface TextBlockProps {
  name: string;
  text: string;
  variant?: string;
  color?: string;
}

const TexBlock: React.FC<TextBlockProps> = ({
  name = "Caption",
  text,
  variant,
  color,
}) => {
  return (
    <div className="text-block">
      <h3
        className={
          variant === "colorize"
            ? "text-block__caption text-block__caption_green"
            : "text-block__caption"
        }
        style={{ color: color }}
      >
        {name}
      </h3>
      <p className="text-block__text" style={{ color: color }}>
        {text
          ? text
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum dolorem exercitationem maiores consequuntur ad nam blanditiis nobis ratione itaque impedit odio nulla illum voluptatibus!"}
        {/* {props.text && "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, eum dolorem exercitationem maiores consequuntur ad nam blanditiis nobis ratione itaque impedit odio nulla illum voluptatibus!"} */}
      </p>
    </div>
  );
};

export default TexBlock;
