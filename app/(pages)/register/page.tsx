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
        "https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=17492981&InterfaceParameter=WebTrac",
      adult:
        "https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=17495716&InterfaceParameter=WebTrac",
    },
    {
      src: "continuing",
      title: "Continuing",
      time: "7:15-8pm",
      day: "Monday",
      youth:
        "https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=17493009&InterfaceParameter=WebTrac",
      adult:
        "https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=17495736&InterfaceParameter=WebTrac",
    },
    {
      src: "advanced",
      title: "Advanced",
      time: "6:30-8pm",
      day: "Wednesday",
      youth:
        "https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=17493038&InterfaceParameter=WebTrac",
      adult:
        "https://web2.myvscloud.com/wbwsc/wakentwt.wsc/iteminfo.html?Module=AR&FMID=17495756&InterfaceParameter=WebTrac",
    },
  ];

  return (
    <main className="min-h-screen space-y-20">
      <div className="w-full flex flex-col md:flex-row text-black bg-secondary p-4 rounded-lg gap-4 justify-around">
        <div>
          <p className="text-sm">Current quarter</p>
          <p>Autumn, 2023</p>
          <p>September 18 - December 13</p>
        </div>
        <div>
          <p className="text-sm">Next quarter</p>
          <p>Winter, 2024</p>
          <p>January 3 - March 18</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {data.map((data, index) => (
          <Card key={index} className="relative overflow-visible">
            <NextImage
              src={"/" + data.src + ".png"}
              alt="Shinai"
              width={60}
              height={20}
              className="aspect-square object-contain absolute left-1/2 translate-x-[-50%] translate-y-[-50%] bg-slate-200 shadow-sm rounded-full"
            />
            <CardHeader className="justify-center pt-10">
              <p className="text-lg">{data.title}</p>
            </CardHeader>
            <CardBody>
              <p>{data.day}</p>
              <p>{data.time}</p>
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
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
