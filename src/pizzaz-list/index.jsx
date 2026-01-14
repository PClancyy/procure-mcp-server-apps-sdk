import React from "react";
import { createRoot } from "react-dom/client";
import markers from "../pizzaz/markers.json";
import { PlusCircle, Star } from "lucide-react";
import { Button } from "@openai/apps-sdk-ui/components/Button";
import { Image } from "@openai/apps-sdk-ui/components/Image";

function App() {
  const data = (window as any).__OPENAI_CONTENT__ || {};
  const items = data.items || [];


  return (
    <div className="antialiased w-full text-black px-4 pb-2 border border-black/10 rounded-2xl sm:rounded-3xl overflow-hidden bg-white">
      <div className="max-w-full">
        <div className="flex flex-row items-center gap-4 sm:gap-4 border-b border-black/5 py-4">
          <div
            className="sm:w-18 w-16 aspect-square rounded-xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://persistent.oaistatic.com/pizzaz/title.png)",
            }}
          ></div>
          <div>
            <div className="text-base sm:text-xl font-medium">
              Company House
            </div>
            <div className="text-sm text-black/60">
              Test
            </div>
          </div>
          <div className="flex-auto hidden sm:flex justify-end pr-2">
            <Button color="primary" variant="solid" size="md">
              Save List
            </Button>
          </div>
        </div>
        <div className="min-w-full text-sm flex flex-col">
         {items.map((company) => (
           <div key={company.company_number}>
             <div>{company.company_name}</div>
             <div>{company.company_number}</div>
             <div>{company.address_snippet}</div>
             <div>{company.date_of_creation}</div>
           </div>
         ))}
        <div className="sm:hidden px-0 pt-2 pb-2">
          <Button color="primary" variant="solid" size="md" block>
            Save List
          </Button>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("pizzaz-list-root")).render(<App />);

createRoot(document.getElementById("company-list-root")).render(<CompanyListWidget />);
