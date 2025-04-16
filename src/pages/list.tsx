import { useDisclosure } from "@heroui/modal";
import { useState } from "react";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import { useGetMemes } from "@/api/memes/memes.queries";
import { title } from "@/components/primitives";
import MemeCard from "@/components/Meme";
import { ImageModal } from "@/components/ImageModal";
import CardSkeleton from "@/components/CardSkeleton";
import { Meme } from "@/types/meme";

export default function MemeListPage() {
  const { data: memes = [], isLoading, isFetched, isFetching } = useGetMemes();
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

  const listAnimation = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center gap-6 py-10 px-4">
        <h1 className={title()}>Meme List</h1>
        <motion.div
          animate={isFetched && !isFetching ? "show" : false}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full max-w-screen-xl"
          initial="hidden"
          variants={listAnimation}
        >
          {isLoading
            ? Array.from({ length: 10 }).map((_, i) => <CardSkeleton key={i} />)
            : memes.map((meme: Meme) => (
                <motion.div key={meme.id} variants={cardAnimation}>
                  <MemeCard chooseImage={handleImageClick} meme={meme} />
                </motion.div>
              ))}
        </motion.div>
      </section>
      <ImageModal
        imageUrl={selectedImageUrl}
        isOpen={isOpen}
        onClose={handleOnClose}
      />
    </DefaultLayout>
  );
}
