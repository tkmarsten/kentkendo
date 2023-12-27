"use client";
import NextImage from "next/image";
import SenseiTable from "@/app/components/sensei-table";
import dojoData from "@/app/data/dojo.json";

export default function About() {
  return (
    <main className="space-y-8">
      <div className="flex flex-col lg:flex-row-reverse items-center">
        <div className="flex-1">
          <NextImage
            src="/logo.png"
            width={200}
            height={100}
            alt="Logo"
            className="m-auto"
          />
        </div>
        <p className="text-5xl text-center flex-1">
          {dojoData.name} Kendo Club
        </p>
      </div>
      <section>
        <p className="text-sm text-secondary font-semibold">About Us</p>
        <p>
          Kent Kendo Club was established in 2001, and was originally the Renton
          Kendo Club. The club has been providing instruction of kendo through
          the Kent parks department. We have been located at the community
          center for over 20 years now!
        </p>
      </section>
      <section>
        <p className="text-sm text-secondary font-semibold">Instructors</p>
        <p>
          Our head sensei both have over 40 years of kendo experience. This also
          includes many years of experience teaching both at the local level and
          federation level for the Pacific Northwest.
        </p>
        <SenseiTable />
      </section>
    </main>
  );
}
