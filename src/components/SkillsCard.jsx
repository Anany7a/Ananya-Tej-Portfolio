import { Progress } from "@/components/ui/progress"

const SkillsCard = ({ skill, percentage }) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{skill}</span>
        <span className="text-gray-400">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" />
    </div>
  );
};

export default SkillsCard;