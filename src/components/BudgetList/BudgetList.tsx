import React, { useState } from "react";

interface BudgetListProps {
  adsChecked: boolean;
  seoChecked: boolean;
  webChecked: boolean;
  page: number;
  language: number;
  total: number;
}

interface BudgetItem {
  name: string;
  client: string;
  services: string[];
  total: number;
}

export const BudgetList: React.FC<BudgetListProps> = ({
  adsChecked,
  seoChecked,
  webChecked,
  page,
  language,
  total,
}) => {
  const [budgets, setBudgets] = useState<BudgetItem[]>([]);
  const [budgetName, setBudgetName] = useState<string>("");
  const [budgetClient, setBudgetClient] = useState<string>("");
  const services: string[] = [];

  if (seoChecked) {
    services.push("Seo ");
  }
  if (adsChecked) {
    services.push("Ads ");
  }
  if (webChecked) {
    services.push(` Web (${page} página/s ${language} idioma/s)`);
  }

  const addBudget = () => {
    if (budgetName && budgetClient) {
      const newBudget: BudgetItem = {
        name: budgetName,
        client: budgetClient,
        services: services,
        total: total,
      };
      setBudgets([...budgets, newBudget]);
      setBudgetName("");
      setBudgetClient("");
    }
  };

  return (
    <>
      <div className="card w-96 bg-neutral text-neutral-content flex-column flex justify-center">
        <h2 className="text-base-100">Guardar presupuesto</h2>       
          <input type="text" placeholder="Nombre de presupuesto" className="input input-bordered w-full max-w-xs m-1" value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)} />
          <input type="text" placeholder="Nombre de cliente" className="input input-bordered w-full max-w-xs m-1" value={budgetClient}
            onChange={(e) => setBudgetClient(e.target.value)} />
          <button className="btn btn-outlinetext-base-100 m-1 w-32 mx-auto" onClick={addBudget}>Guardar</button>  
          <ul className="list-item p-0">
                <h2 className="text-2xl mb-2">Lista de presupuestos:</h2>
                {budgets.map((budget, index) => (
                  <li key={index} className="m-4 text-left">
                    <div>
                      <strong>Nombre del Presupuesto:</strong> {budget.name}
                    </div>
                    <div>
                      <strong>Cliente:</strong> {budget.client}
                    </div>
                    <div>
                      <strong>Servicios:</strong> {budget.services}
                    </div>
                    <div>
                      <strong>Total:</strong> {budget.total} €
                    </div>
                  </li>
                ))}
              </ul>
            </div>
    </>
  );
};
