import "./Link.scss";

type Props = {
  link: { name: ""; link: "" };
};

export const Link: React.FC<Props> = ({ link }) => {
  return (
    <li>
      <a className="link" href={link.link}>
        {link.name}
      </a>
    </li>
  );
};
