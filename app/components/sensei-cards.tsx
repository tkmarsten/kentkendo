import React from "react";
import {
  Image,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
} from "@nextui-org/react";
import data from "@/app/data/sensei.json";

export default function SenseiCards() {
  return (
    <section className="mt-4 grid grid-cols-3 gap-8">
      {data.map((sensei, index) => (
        <Card key={index}>
          <CardHeader className="flex-col items-start">
            <p className="text-sm text-default-500">{sensei.title}</p>
            <h4 className="text-lg">{sensei.name}</h4>
            <p className="text-md">{sensei.rank}</p>
          </CardHeader>
          <CardBody className="items-center justify-center">
            <Image
              src={`/sensei/${sensei.image}`}
              width={200}
              height={200}
              fallbackSrc="https://via.placeholder.com/200x200"
              alt="Sensei"
            />
          </CardBody>
          <Divider />
          <CardFooter>
            <Button>More info</Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
