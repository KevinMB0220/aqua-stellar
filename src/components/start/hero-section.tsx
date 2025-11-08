import { useNavigate } from "react-router-dom";
import PrimaryButton from "../ui/primary-button";

interface HeroSectionProps {
  onTriggerPulse?: () => void;
}

// Presents the main call to action for the landing page without backend logic.
const HeroSection = ({ onTriggerPulse }: HeroSectionProps) => {
  const navigate = useNavigate();

  const handleStart = () => {
    onTriggerPulse?.();
    navigate("/loading");
  };

  return (
    <section className="relative z-20 mx-auto max-w-4xl space-y-6 px-6 py-12 text-center text-white">
      <h1 className="text-3xl font-extrabold drop-shadow-[0_0_20px_rgba(6,182,212,0.35)] sm:text-4xl md:text-5xl">
        Dive into the world of Aqua Stellar!
      </h1>
      <p className="mx-auto max-w-2xl text-base text-blue-50/90 sm:text-lg md:text-xl">
        Build breathtaking aquariums, collect legendary fish, and share your
        underwater sanctuary with friends. No wallet required for this prototype.
      </p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <PrimaryButton
          onClick={handleStart}
          className="animate-heartbeat rounded-2xl px-8 py-4 text-base sm:text-lg"
        >
          Start Game
        </PrimaryButton>
        <PrimaryButton
          variant="secondary"
          onClick={() => navigate("/onboarding")}
          className="rounded-2xl px-8 py-4 text-base sm:text-lg"
        >
          Preview Onboarding
        </PrimaryButton>
      </div>
    </section>
  );
};

export default HeroSection;

