'use client'

import GetTransactions from "@/app/feature/transactions/get.transactions";

export default function Home() {
  return (
    <section className="main-content">
      <h1>Historial de Transacciones</h1>
      <GetTransactions/>
    </section>
  );
};

// Quede en contenectarlo a la base de datos y crear el metodo para serializarlo en Base64