import CinematicLoader from "../components/shared/CinematicLoader";
import Chapter01Hero from "../components/sections/Chapter01Hero";
import Chapter02About from "../components/sections/Chapter02About";
import Chapter03ProcessSlider from "../components/sections/Chapter03ProcessSlider";
import Chapter04FeaturedFilms from "../components/sections/Chapter04FeaturedFilms";
import Chapter05Toolkit from "../components/sections/Chapter05Toolkit";
import Chapter06Services from "../components/sections/Chapter06Services";
import Chapter07Contact from "../components/sections/Chapter07Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Cinematic Darkroom Sequence Bootloader */}
      <CinematicLoader />

      {/* Chapter 01: Hero Scene */}
      <Chapter01Hero />

      {/* Chapter 02: The Editor Behind the Lens */}
      <Chapter02About />

      {/* Chapter 03: Interactive Color Science & Grading Scrubber */}
      <Chapter03ProcessSlider />

      {/* Chapter 04: The Screening Room & Portfolio Showcase */}
      <Chapter04FeaturedFilms />

      {/* Chapter 05: Creative Arsenal & Post-Production Software */}
      <Chapter05Toolkit />

      {/* Chapter 06: Specialised Creator Services */}
      <Chapter06Services />

      {/* Chapter 07: Final Export & Inquiry Brief Form */}
      <Chapter07Contact />
    </div>
  );
}
