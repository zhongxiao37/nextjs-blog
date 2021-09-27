import normalize from "normalize-jss";
import { createUseStyles } from "react-jss";

export default createUseStyles(
  {
    "@global": normalize,
    "@global a": {
      color: "#0070f3",
      textDecoration: "none",
    },
    "@global a:hover": {
      color: "#0070e3",
      textDecoration: "underline",
    },
    container: {
      maxWidth: "36rem",
      padding: "0 1rem",
      margin: "3rem auto 6rem",
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    backToHome: {
      margin: "3rem 0 0",
    },
    heading2Xl: {
      fontSize: "2.5rem",
      lineHeight: 1.2,
      fontWeight: 800,
      letterSpacing: "-0.05rem",
      margin: "1rem 0",
    },
    headingXl: {
      fontSize: "2rem",
      lineHeight: 1.3,
      fontWeight: 800,
      letterSpacing: "-0.05rem",
      margin: "1rem 0",
    },

    headingLg: {
      fontSize: "1.5rem",
      lineHeight: 1.4,
      margin: "1rem 0",
    },

    headingMd: {
      fontSize: "1.2rem",
      lineHeight: 1.5,
    },
    borderCircle: {
      borderRadius: "9999px",
    },

    colorInherit: {
      color: "inherit",
    },

    padding1px: {
      paddingTop: "1px",
    },

    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },

    listItem: {
      margin: "0 0 1.25rem",
    },

    lightText: {
      color: "#666",
    },
  },
  {
    name: "Layout",
  }
);
