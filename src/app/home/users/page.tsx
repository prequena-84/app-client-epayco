'use client'
import GetUsers from "@/app/feature/users/get.users";

export default function Home() {
  return (
    <section className="main-content">
      <GetUsers/>
    </section>
  );
};