import React, { useState } from "react";

const InputComponent = () => {
  const [formData, setFormData] = useState({
    kpi_name: "",
    sections: [
      {
        color: "",
        name: "",
        kpis: [
          {
            department: "",
            site: "",
            question: "",
            target_daily: 0,
            target_weekly: 0,
            target_monthly: 0,
            target_yearly: 0,
            passing_criteria_daily: "",
            passing_criteria_weekly: "",
            passing_criteria_monthly: "",
            passing_criteria_yearly: "",
          },
        ],
      },
    ],
  });

  const handleChange = (event, sectionIndex, kpiIndex) => {
    const { name, value } = event.target;
    if (sectionIndex !== undefined && kpiIndex !== undefined) {
      setFormData((prevData) => ({
        ...prevData,
        sections: prevData.sections.map((section, sIndex) =>
          sIndex === sectionIndex
            ? {
                ...section,
                kpis: section.kpis.map((kpi, kIndex) =>
                  kIndex === kpiIndex ? { ...kpi, [name]: value } : kpi
                ),
              }
            : section
        ),
      }));
    } else if (sectionIndex !== undefined) {
      setFormData((prevData) => ({
        ...prevData,
        sections: prevData.sections.map((section, sIndex) =>
          sIndex === sectionIndex ? { ...section, [name]: value } : section
        ),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const addSection = () => {
    setFormData((prevData) => ({
      ...prevData,
      sections: [
        ...prevData.sections,
        {
          color: "",
          name: "",
          kpis: [
            {
              department: "",
              site: "",
              question: "",
              target_daily: 0,
              target_weekly: 0,
              target_monthly: 0,
              target_yearly: 0,
              passing_criteria_daily: "",
              passing_criteria_weekly: "",
              passing_criteria_monthly: "",
              passing_criteria_yearly: "",
            },
          ],
        },
      ],
    }));
  };

  const addKpi = (sectionIndex) => {
    setFormData((prevData) => ({
      ...prevData,
      sections: prevData.sections.map((section, sIndex) =>
        sIndex === sectionIndex
          ? {
              ...section,
              kpis: [
                ...section.kpis,
                {
                  department: "",
                  site: "",
                  question: "",
                  target_daily: 0,
                  target_weekly: 0,
                  target_monthly: 0,
                  target_yearly: 0,
                  passing_criteria_daily: "",
                  passing_criteria_weekly: "",
                  passing_criteria_monthly: "",
                  passing_criteria_yearly: "",
                },
              ],
            }
          : section
      ),
    }));
  };

  return (
    <div>
      <label>
        KPI Name:
        <input
          type="text"
          name="kpi_name"
          value={formData.kpi_name}
          onChange={handleChange}
        />
      </label>
      {formData.sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <label>
            Section Color:
            <input
              type="text"
              name="color"
              value={section.color}
              onChange={(e) => handleChange(e, sectionIndex)}
            />
          </label>
          <label>
            Section Name:
            <input
              type="text"
              name="name"
              value={section.name}
              onChange={(e) => handleChange(e, sectionIndex)}
            />
          </label>
          {section.kpis.map((kpi, kpiIndex) => (
            <div key={kpiIndex}>
              <label>
                Department:
                <input
                  type="text"
                  name="department"
                  value={kpi.department}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
                Site:
                <input
                  type="text"
                  name="site"
                  value={kpi.site}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
                Question:
                <input
                  type="text"
                  name="question"
                  value={kpi.question}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
                Daily Target:
                <input
                  type="number"
                  name="target_daily"
                  value={kpi.target_daily}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
                Weekly Target:
                <input
                  type="number"
                  name="target_weekly"
                  value={kpi.target_weekly}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
                Monthly Target:
                <input
                  type="number"
                  name="target_monthly"
                  value={kpi.target_monthly}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
                Yearly Target:
                <input
                  type="number"
                  name="target_yearly"
                  value={kpi.target_yearly}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
               Daily Passing criteria:
                <input
                  type="text"
                  name="passing_criteria_daily"
                  value={kpi.passing_criteria_daily}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
               Weekly Passing criteria:
                <input
                  type="text"
                  name="passing_criteria_weekly"
                  value={kpi.passing_criteria_weekly}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
               Monthly Passing criteria:
                <input
                  type="text"
                  name="passing_criteria_monthly"
                  value={kpi.passing_criteria_monthly}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
              <label>
               Yearly Passing criteria:
                <input
                  type="text"
                  name="passing_criteria_yearly"
                  value={kpi.passing_criteria_yearly}
                  onChange={(e) => handleChange(e, sectionIndex, kpiIndex)}
                />
              </label>
            </div>
          ))}
          <button onClick={() => addKpi(sectionIndex)}>Add KPI</button>
        </div>
      ))}
      <button onClick={addSection}>Add Section</button>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
};

export default InputComponent;
