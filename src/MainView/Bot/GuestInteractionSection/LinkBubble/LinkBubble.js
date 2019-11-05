import React from "react";
import { css, StyleSheet } from "aphrodite";

import { floatingButtonColor } from "styles/constants.js";

export default function LinkBubble(props) {
  const styles = StyleSheet.create({
    linkItem: {
      background: floatingButtonColor,
      border: "1px solid " + floatingButtonColor,
      borderRadius: "50%",
      width: "3em",
      height: "3em",
      margin: "1em",
      boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
      display: "grid",
      alignItems: "center",
      justifyItems: "center",
      transition: "all 0.2s cubic-bezier(.25,.8,.25,1)",
      ":hover": {
        boxShadow: "0 8px 15px rgba(0,0,0,0.20), 0 5px 13px rgba(0,0,0,0.17)"
      }
    },
    icon: {
      width: props.iconWidth || "100%"
    },
    linkWrapper: {
      width: "100%",
      height: "100%",
      display: "grid",
      alignItems: "center",
      justifyItems: "center"
    },
    hidden: {
      display: "none"
    }
  });

  return (
    <div
      className={css(styles.linkItem, props.hidden && styles.hidden)}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
      onClick={props.onClick}
    >
      <a className={css(styles.linkWrapper)} href={props.link}>
        <img className={css(styles.icon)} src={props.iconImg} alt={props.alt} />
      </a>
    </div>
  );
}
