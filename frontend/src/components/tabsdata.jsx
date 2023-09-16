// Sheet1Content.js
import React, { useState, useRef } from "react";
import "./ExcelSheet.css"; // Import your stylesheet

const data = [
  {
    department: "abc",
    site: "cdf",
    question: "abc",
    target_daily: 1,
    target_weekly: 1,
    target_monthly: 1,
    target_yearly: 1,
    passing_criteria_daily: "cdf",
    passing_criteria_weekly: "cdf",
    passing_criteria_monthly: "cdf",
    passing_criteria_yearly: "cdf",
    id: 1,
  },
  {
    department: "stng",
    site: "string",
    question: "sing",
    target_daily: 0,
    target_weekly: 0,
    target_monthly: 0,
    target_yearly: 0,
    passing_criteria_daily: "strg",
    passing_criteria_weekly: "string",
    passing_criteria_monthly: "string",
    passing_criteria_yearly: "string",
    id: 2,
  },
  {
    department: "string",
    site: "string",
    question: "string",
    target_daily: 0,
    target_weekly: 0,
    target_monthly: 0,
    target_yearly: 0,
    passing_criteria_daily: "string",
    passing_criteria_weekly: "string",
    passing_criteria_monthly: "string",
    passing_criteria_yearly: "string",
    id: 3,
  },
  {
    department: "Test",
    site: "Test",
    question: "Test",
    target_daily: 0,
    target_weekly: 0,
    target_monthly: 0,
    target_yearly: 0,
    passing_criteria_daily: "Test",
    passing_criteria_weekly: "Test",
    passing_criteria_monthly: "Test",
    passing_criteria_yearly: "Test",
    id: 4,
  },
  {
    department: "Test1",
    site: "Test",
    question: "Test1",
    target_daily: 0,
    target_weekly: 0,
    target_monthly: 0,
    target_yearly: 0,
    passing_criteria_daily: "Test1",
    passing_criteria_weekly: "Test1",
    passing_criteria_monthly: "Test1",
    passing_criteria_yearly: "Test1",
    id: 5,
  },
];

const Sheet1Content = () => {
  const [cellData, setCellData] = useState({});
  const [activeCell, setActiveCell] = useState(null);
  const tableRef = useRef(null);

  const handleCellChange = (row, col, value) => {
    setCellData((prevData) => ({
      ...prevData,
      [`${row}-${col}`]: value,
    }));
  };

  const handleCommit = () => {
    if (activeCell) {
      const [row, col] = activeCell.split("-");
      handleCellChange(row, col, cellData[activeCell]);
      setActiveCell(null);
    }
  };

  const handleCellClick = (cellKey) => {
    setActiveCell(cellKey);
  };

  const handleScroll = () => {
    if (tableRef.current) {
      const { scrollLeft, scrollTop } = tableRef.current;
      const headerRow = tableRef.current.querySelector(".header-row");
      const leftColumn = tableRef.current.querySelector(".left-column");

      if (headerRow) {
        headerRow.scrollLeft = scrollLeft;
      }

      if (leftColumn) {
        leftColumn.scrollTop = scrollTop;
      }
    }
  };

  return (
    <div className="sheet-content">
      <div className="table-container" onScroll={handleScroll} ref={tableRef}>
        <table className="excel-table">
          <thead>
            <tr className="header-row">
              <th className="fixed-cell" />
              {Array.from({ length: 30 }, (_, colIndex) => (
                <th key={colIndex}>{colIndex + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, rowIndex) => (
              <tr key={rowIndex}>
                <td className="left-column">{item.id}</td>
                {Array.from({ length: 30 }, (_, colIndex) => {
                  const cellKey = `${rowIndex}-${colIndex}`;
                  return (
                    <td key={colIndex}>
                      <input
                        type="text"
                        value={cellData[cellKey] || ""}
                        onChange={(e) =>
                          handleCellChange(rowIndex, colIndex, e.target.value)
                        }
                        className="editable-input"
                        onClick={() => handleCellClick(cellKey)}
                      />
                      {activeCell === cellKey && (
                        <button
                          className="commit-button"
                          onClick={handleCommit}
                        >
                          Commit
                        </button>
                      )}
                      {activeCell !== cellKey && (
                        <span className="target-value">
                          {item[`target_daily`]}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sheet1Content;
