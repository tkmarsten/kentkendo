import { Divider, Link } from "@nextui-org/react";
import { SiGmail, SiGooglecalendar } from "react-icons/si";
import NextImage from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-10">
      <div className="max-w-screen-lg m-auto px-6">
        <div className="space-y-4 text-sm">
          <div className="basis-1/2">
            <p className="text-secondary">Location</p>
            <p>Kent Commons Community Center</p>
            <p>525 4th Ave N, Kent, WA 98030</p>
          </div>
          <div className="basis-1/2">
            <p className="text-secondary">Practice Hours</p>
            <p className="font-semibold">Monday</p>
            <p>Beginning 6:30-7:15pm</p>
            <p>Continuing 7:15-8pm</p>
            <p className="font-semibold mt-2">Wednesday</p>
            <p>Advanced 6:30-8pm</p>
          </div>
        </div>
        <Link
          href="mailto:kentkendoclub@gmail.com"
          className="text-white text-sm mr-4 mt-4"
        >
          <div className="flex flex-col place-items-center">
            <SiGmail className="text-xl" />
            <p>Contact</p>
          </div>
        </Link>
        <Link
          href="https://calendar.google.com/calendar/u/2?cid=a2VudGtlbmRvY2x1YkBnbWFpbC5jb20"
          className="text-white text-sm"
        >
          <div className="flex flex-col place-items-center">
            <SiGooglecalendar className="text-xl" />
            <p>Google Calendar</p>
          </div>
        </Link>
        <Divider className="bg-neutral-600 my-4" />
        <div className="flex justify-center my-2">
          <NextImage
            src="/kent.gif"
            alt="Kent Kendo logo"
            width={50}
            height={50}
          />
        </div>
        <p className="text-center">&copy; 2023 Kent Kendo Club</p>
      </div>
    </footer>
  );
}
