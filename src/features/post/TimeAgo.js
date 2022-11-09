import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

function TimeAgo(props) {
  let timeAgo = "";

  if (props.timestamp) {
    const date = parseISO(props.timestamp);
    const timePeriods = formatDistanceToNow(date);
    timeAgo = `${timePeriods} ago`;
  }

  return (
    <span title={props.timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
}

export default TimeAgo;
