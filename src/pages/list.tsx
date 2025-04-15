import { useDisclosure } from "@heroui/modal";
import { useState } from "react";

import DefaultLayout from "@/layouts/default";
import { useGetMemes } from "@/api/memes/memes.queries";
import { title } from "@/components/primitives";
import { Meme } from "@/types/meme";
import MemeCard from "@/components/Meme";
import { ImageModal } from "@/components/ImageModal";

export default function MemeListPage() {
  const { data: memes = [], isLoading } = useGetMemes();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>("");

  const handleImageClick = (imageUrl: string) => {
    setSelectedImageUrl(imageUrl);
    onOpen();
  };

  const handleOnClose = () => {
    onClose();
    setSelectedImageUrl("");
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center gap-6 py-10 px-4">
        <h1 className={title()}>Meme List</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full max-w-screen-xl">
            {memes.map((meme: Meme) => (
              <MemeCard
                key={meme.id}
                chooseImage={handleImageClick}
                meme={meme}
              />
            ))}
          </div>
        )}
      </section>
      <ImageModal
        imageUrl={selectedImageUrl}
        isOpen={isOpen}
        onClose={handleOnClose}
      />
    </DefaultLayout>
  );
}
