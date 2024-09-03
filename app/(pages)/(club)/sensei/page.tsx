import { Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import data from "@/app/data/sensei.json";

export default function Page() {
  return (
    <main>
      <p className="text-secondary font-semibold">Instructors</p>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data.map((sensei, index) => (
          <Card key={index} className="max-w-[300px]" radius="sm" isPressable>
            <CardBody className="items-center justify-center overflow-visible p-2">
              <Image
                width="100%"
                radius="none"
                src={`/sensei/${sensei.image}`}
                fallbackSrc="https://via.placeholder.com/300x3x00"
                alt="Sensei"
              />
            </CardBody>
            <CardFooter className="flex-col items-start">
              <p className="text-sm text-default-500">{sensei.title}</p>
              <h4 className="text-lg">{sensei.name}</h4>
              <p className="text-md">{sensei.rank}</p>
            </CardFooter>
          </Card>
        ))}
      </section>
    </main>
  );
}
