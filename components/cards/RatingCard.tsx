import Card from "../ui/Card";
import CircleProgress from "../charts/CircleProgress";

export default function RatingCard() {
  return (
    <Card className="border-r border-t">
      <h3 className="font-semibold mb-1">Your Rating</h3>
      <p className="text-sm text-gray-400 mb-6">
        Lorem ipsum dolor sit amet, consectetur
      </p>

      {/* Desktop */}
      <div className="relative hidden md:flex justify-center items-center h-56">
        <div className="absolute left-0 bottom-0">
          <CircleProgress
            value={92}
            color="#22D3EE"
            label="Packaging"
            size={110}
          />
        </div>

        <div className="absolute top-0 left-24">
          <CircleProgress
            value={85}
            color="#A78BFA"
            label="Hygiene"
            size={100}
          />
        </div>

        <CircleProgress
          value={85}
          color="#F59E0B"
          label="Food Taste"
          size={140}
        />
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-6 md:hidden">
        <CircleProgress value={85} color="#F59E0B" label="Food Taste" />
        <CircleProgress value={92} color="#22D3EE" label="Packaging" />
        <CircleProgress value={85} color="#A78BFA" label="Hygiene" />
      </div>
    </Card>
  );
}
