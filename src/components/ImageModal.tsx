import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export const ImageModal = ({ isOpen, onClose, imageUrl }: Props) => {
  return (
    <Modal
      backdrop="blur"
      classNames={{
        wrapper: "items-center justify-center",
      }}
      isOpen={isOpen}
      size="5xl"
      onClose={onClose}
    >
      <ModalContent>
        {(close) => (
          <>
            <ModalHeader className="flex items-center justify-center">
              <span>Full Image</span>
            </ModalHeader>
            <ModalBody className="flex justify-center items-center overflow-auto p-4">
              <Image
                alt="Full meme"
                className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-md"
                src={imageUrl}
              />
            </ModalBody>
            <ModalFooter className="justify-end">
              <Button color="primary" onPress={close}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
