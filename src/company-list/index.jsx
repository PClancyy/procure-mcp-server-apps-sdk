import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css"; // optional, if you have styles


function CompanyListWidget() {
const output = window.openai?.toolOutput;
const companies = output?.companies ?? [];


  return (
    <div>
      {items.map(company => (
        <div key={company.company_number}>
          {company.company_name}
        </div>
      ))}
    </div>
  );
}


createRoot(document.getElementById("company-list-root")).render(<CompanyListWidget />);



