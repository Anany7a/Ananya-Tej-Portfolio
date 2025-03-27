import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ImageWithFallback from "@/components/ui/ImageWithFallback"

const ProjectCard = ({ title, role, year, type, imageUrl }) => {
  return (
    <Card className="w-64 relative group bg-zinc-900 border-0">
      <CardContent className="p-0">
        <ImageWithFallback 
          src={imageUrl} 
          alt={title} 
          className="w-full rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-end">
          <div className="p-3">
            <h3 className="font-bold text-white">{title}</h3>
            <p className="text-sm text-gray-300">{role}</p>
            <div className="flex items-center mt-2 gap-2">
              <Badge variant="outline" className="text-xs">{year}</Badge>
              <span className="text-xs text-gray-300">{type}</span>
            </div>
          </div>
        </div>
        <Badge variant="destructive" className="absolute top-2 left-2">
          AT
        </Badge>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;