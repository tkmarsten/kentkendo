import { Card, CardHeader, CardBody, Button, Link } from "@nextui-org/react";
import NextImage from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function Register() {
  const data = [
    {
      src: "beginning",
      title: "Beginning",
      time: "6:30-7:15pm",
      day: "Monday",
      youth:
        "https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=33088449&InterfaceParameter=WebTrac",
      adult:
        "https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=33092946&InterfaceParameter=WebTrac",
    },
    {
      src: "continuing",
      title: "Continuing",
      time: "7:15-8pm",
      day: "Monday",
      youth:
        "https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=33088480&InterfaceParameter=WebTrac",
      adult:
        "https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=33092969&InterfaceParameter=WebTrac",
    },
    {
      src: "advanced",
      title: "Advanced",
      time: "6:30-8pm",
      day: "Wednesday",
      youth:
        "https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=33088510&InterfaceParameter=WebTrac",
      adult:
        "https://wakentweb.myvscloud.com/webtrac/web/iteminfo.html?Module=AR&FMID=33092992&InterfaceParameter=WebTrac",
    },
  ];

  return (
    <main className="min-h-screen space-y-20">
      <section>
        <p className="text-4xl">Winter Quarter Registration Open Now!</p>
        <p className="text-neutral-500 mb-4">
          Classes are for all ages. Youth and adults classes are combined.
        </p>
        <div className="grid lg:grid-cols-3 gap-10">
          {data.map((data, index) => (
            <Card key={index}>
              <CardHeader>
                <NextImage
                  src={"/icons/" + data.src + ".png"}
                  alt="Shinai"
                  width={60}
                  height={60}
                  className="aspect-square object-contain mr-4"
                />
                <div className="flex flex-col">
                  <p className="text-xl">{data.title}</p>
                  <p className="text-sm text-default-500">{data.day}</p>
                  <p className="text-sm text-default-500">{data.time}</p>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex gap-2 flex-col xl:flex-row my-2">
                  <Button
                    href={data.youth}
                    as={Link}
                    radius="sm"
                    size="md"
                    isExternal
                    className="text-white font-medium p-2 bg-primary shadow mx-auto mb-2"
                  >
                    Register (7-14 years)
                  </Button>
                  <Button
                    href={data.adult}
                    as={Link}
                    radius="sm"
                    size="md"
                    isExternal
                    className="text-white font-medium p-2 bg-primary shadow mx-auto"
                  >
                    Register (15+ years)
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <p className="text-4xl mb-4">2025 Schedule</p>
        <div className="bg-white rounded-md p-4 border-s-8 border-indigo-700">
          <p className="text-sm">Current quarter</p>
          <p>Winter</p>
          <p>January 6 - March 17 (Beginning, Continuing)</p>
          <p>January 8 - March 19 (Advanced)</p>
        </div>
        <div className="bg-white rounded-md p-4 border-s-8 border-green-600 hidden">
          <p className="text-sm hidden">Current quarter</p>
          <p>Spring</p>
          <p>April 1 - June 3 (Beginning, Continuing)</p>
          <p>April 3 - June 5 (Advanced)</p>
        </div>
        <div className="bg-white rounded-md p-4 border-s-8 border-amber-400 hidden">
          <p>Summer</p>
          <p>June 10 - August 12 (Beginning, Continuing)</p>
          <p>June 12 - August 14 (Advanced)</p>
        </div>
        <div className="bg-white rounded-md p-4 border-s-8 border-orange-500 hidden">
          <p className="text-sm">Current quarter</p>
          <p>Autumn</p>
          <p>September 23 - December 16 (Beginning)</p>
          <p>September 16 - December 16 (Continuing)</p>
          <p>September 11 - December 18 (Advanced)</p>
        </div>
      </section>
    </main>
  );
}
