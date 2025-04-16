import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";

import { Meme } from "@/types/meme";
import { useToggleLike } from "@/api/like/like.queries";
interface MemeInterface {
  meme: Meme;
  chooseImage: (imageUrl: string) => void;
}

const MemeCard: React.FC<MemeInterface> = ({ meme, chooseImage }) => {
  const { mutate, isPending } = useToggleLike(meme.id);

  const toggleLike = () => {
    mutate();
  };

  return (
    <Card className="w-full shadow-md p-2 min-h-[350px] flex flex-col justify-between">
      <CardHeader className="p-0">
        <div
          className="flex justify-center w-full h-[200px] overflow-hidden"
          role="button"
          tabIndex={0}
          onClick={() => {
            chooseImage(meme.image);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              chooseImage(meme.image);
            }
          }}
        >
          <Image
            alt={meme.name}
            className="object-contain h-full"
            src={meme.image}
          />
        </div>
      </CardHeader>
      <CardBody>
        <h3 className="text-lg font-bold">{meme.name}</h3>
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">{meme.likes} likes</span>
          <Button
            isIconOnly
            className={`transition-colors duration-300 ${
              meme.isLiked ? "text-red-500" : "text-gray-400 hover:text-red-500"
            }`}
            isLoading={isPending}
            size="sm"
            variant="light"
            onPress={() => toggleLike()}
          >
            {meme.isLiked ? "❤️" : "🤍"}
          </Button>
        </div>
        <Link
          className="text-blue-500 text-sm"
          href={meme.image}
          rel="noreferrer"
          target="_blank"
          underline="none"
        >
          View
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MemeCard;
