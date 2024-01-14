import React from "react";

function RecentActivityItem({ action }) {
  return (
    <div className="activity-item flex justify-between">
      <div className="activate-label text-[12px]">{action.time}</div>
      <i className={`bi bi-circle-fill activity-badge ${action.color}`}></i>
      {action.highlight === "" ? (
        <div className="activity-content text-[15px]">{action.content}</div>
      ) : (
        <div className="activity-content text-[15px]">
          {action.content.substring(0, action.content.indexOf(action.highlight))}
          <a href="" className="font-bold text-gray-800 ">
            {action.highlight}
          </a>
          {action.content.slice(
            action.content.indexOf(action.highlight) + action.highlight.length,
            -1
          )}
        </div>
      )}
    </div>
  );
}

export default RecentActivityItem;
