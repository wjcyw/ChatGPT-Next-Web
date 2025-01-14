import * as React from "react";
import { Tooltip } from 'antd';
import styles from "./button.module.scss";

export function IconButton(props: {
  onClick?: () => void;
  icon?: JSX.Element;
  type?: "primary" | "danger";
  text?: string;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
  lang?: boolean;
  tool?:string
}) {
  return (
    <Tooltip title={props.tool}>
    <button
      className={
        styles[props.lang ? "icon-button-append" : "icon-button"] +
        ` ${props.bordered && styles.border} ${props.shadow && styles.shadow} ${
          props.className ?? ""
        } clickable ${styles[props.type ?? ""]}`
      }
      onClick={props.onClick}
      title={props.title}
      disabled={props.disabled}
      role="button"
    >
      {props.icon && (
        <div
          className={
            styles["icon-button-icon"] +
            ` ${props.type === "primary" && "no-dark"}`
          }
        >
          {props.icon}
        </div>
      )}

      {props.text && (
        <div className={styles["icon-button-text"]}>{props.text}</div>
      )}
    </button>
    </Tooltip>
  );
}
