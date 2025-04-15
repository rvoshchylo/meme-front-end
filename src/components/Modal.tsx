import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

import { editMemeSchema, EditMemeSchema } from "@/schemas/edit-meme.schema";
import { useUpdateMeme } from "@/api/memes/memes.queries";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  meme: { id: string; name: string; image: string };
}

export const EditMemeModal = ({ isOpen, onClose, meme }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditMemeSchema>({
    mode: "onChange",
    resolver: zodResolver(editMemeSchema),
    defaultValues: meme,
  });

  const { mutate, isPending } = useUpdateMeme();

  useEffect(() => {
    reset(meme);
  }, [meme, reset]);

  const onSubmit = (data: EditMemeSchema) => {
    mutate(
      { id: meme.id, data },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  };

  return (
    <Modal isOpen={isOpen} size="md" onClose={onClose}>
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Edit Meme</ModalHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody className="flex flex-col gap-6">
                <div className="relative">
                  <Input
                    label="Meme ID"
                    {...register("id")}
                    isReadOnly
                    variant="bordered"
                  />
                </div>

                <div className="relative">
                  <Input
                    label="Name"
                    {...register("name")}
                    isInvalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="absolute -bottom-5 left-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <Input
                    label="Image URL"
                    {...register("image")}
                    isInvalid={!!errors.image}
                  />
                  {errors.image && (
                    <p className="absolute -bottom-5 left-1 text-sm text-red-500">
                      {errors.image.message}
                    </p>
                  )}
                </div>

                <div className="relative">
                  <Input
                    label="Likes"
                    max={99}
                    min={0}
                    type="number"
                    {...register("likes", { valueAsNumber: true })}
                    isInvalid={!!errors.likes}
                  />
                  {errors.likes && (
                    <p className="absolute -bottom-5 left-1 text-sm text-red-500">
                      {errors.likes.message}
                    </p>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={close}>
                  Cancel
                </Button>
                <Button color="primary" isLoading={isPending} type="submit">
                  Save
                </Button>
              </ModalFooter>
            </form>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
