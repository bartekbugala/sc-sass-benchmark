export const layoutProps = {
  header: {
    items: [
      { id: 1, label: "Strona główna", url: "/" },
      { id: 2, label: "O nas", url: "/o-nas" },
      { id: 3, label: "Kontakt", url: "/kontakt" },
      { id: 4, label: "Topagrar", url: "https://www.topagrar.pl" },
    ],
  },
};

export const defaultProps = {
  main: {
    title: "Strona niezatytułowana",
    description:
      "Domyślny opis strony, po nadaniu tytułu zostanie zastąpiony opisem docelowym",
  },
};

const testProps = { ...defaultProps, ...layoutProps };

export default testProps;
