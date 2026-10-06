import { METADATA } from "../constants";

export const displayFancyLogs = () => {
  // TODO: generate your own ASCII banner (e.g. patorjk.com/software/taag)
  // and paste it here in place of the plain name below.
  console.log(
    `%c ${METADATA.author}`,
    "color: #6b17e8; font-size: 20px; font-weight: bold; padding: 6px;"
  );

  console.log(
    "%c Hope you like what you see :)",
    "color: #6b17e8; padding: 6px;"
  );

  // Easter egg hint
  console.log(
    "%c 💡 Psst! There's a secret hiding in plain sight. Follow your heart, it might lead to something... interesting.",
    "color: #6b17e8; font-style: italic; padding: 6px;"
  );
};
