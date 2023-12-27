import { Link, Button } from "@nextui-org/react";
import { SiGooglemaps } from "react-icons/si";
import NextImage from "next/image";
import dojoData from "@/app/data/dojo.json";

export default function Location() {
  return (
    <section id="location">
      <p className="text-sm text-secondary font-semibold">Location</p>
      <div className="flex flex-col lg:flex-row-reverse gap-4 mt-2">
        <div className="lg:basis-2/5">
          <p className="text-xl lg:text-2xl font-medium">{`${dojoData.name} Dojo`}</p>
          <p className="text-sm lg:text-base">
            Our dojo is located in between the Showare Center and Kent Station
            at the{" "}
            <Link
              href={dojoData.facilityWebsite}
              className="underline text-black text-sm lg:text-base"
              isExternal
            >
              Kent Commons Community Center.
            </Link>{" "}
            Our club has been meeting in the Green River room for over 20 years.
            The facility is also host to many large federation events such as
            tournaments, grade testings, and seminars.
          </p>
        </div>
        <div>
          <NextImage
            src="/location.jpeg"
            width={1000}
            height={1000}
            alt="An image of the main entrance of Federal Way Community Center"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          href="https://maps.app.goo.gl/roZBA2RAEvpUyt3o7"
          as={Link}
          isExternal
          radius="sm"
          size="md"
          startContent={<SiGooglemaps />}
          className="text-white font-medium bg-primary shadow mt-6"
        >
          Google Maps
        </Button>
      </div>
    </section>
  );
}
