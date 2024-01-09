import {
  Header,
  Classes,
  Location,
  FAQ,
  Register,
} from "@/app/components/home";

export default function Home() {
  return (
    <main className="space-y-16 lg:space-y-32 max-lg:my-8 mb-16">
      <Header />
      <Classes />
      <Location />
      <FAQ />
      <Register />
    </main>
  );
}
