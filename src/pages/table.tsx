import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";
import { Button } from "@heroui/button";
import { useDisclosure } from "@heroui/modal";
import { useState } from "react";
import { Link } from "@heroui/link";

import { useGetMemes } from "@/api/memes/memes.queries";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { Column, columns } from "@/config/columns";
import { Meme } from "@/types/meme";
import { EditMemeModal } from "@/components/Modal";
import TableSkeleton from "@/components/TableSkeleton";

export default function TablePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const { data: memes = [], isLoading } = useGetMemes();

  const handleOnClose = () => {
    onClose();
    setSelectedMeme(null);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 w-full px-4">
        <div className="inline-block max-w-lg text-center justify-center mb-6">
          <h1 className={title()}>Meme Table</h1>
        </div>

        {isLoading ? (
          <TableSkeleton />
        ) : (
          <Table aria-label="Meme table">
            <TableHeader columns={columns}>
              {(column: Column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              )}
            </TableHeader>
            <TableBody items={memes}>
              {(item: Meme) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>
                      {columnKey === "actions" ? (
                        <Button
                          size="sm"
                          variant="light"
                          onPress={() => {
                            setSelectedMeme(item);
                            onOpen();
                          }}
                        >
                          Edit
                        </Button>
                      ) : columnKey === "id" ? (
                        item.id.slice(0, 6) + "..."
                      ) : columnKey === "image" ? (
                        <Link
                          isExternal
                          className="relative inline-block hover:text-blue-500 transition-colors duration-300 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 hover:after:w-full after:bg-current after:transition-all after:duration-300"
                          href={item.image}
                        >
                          {item.image}
                        </Link>
                      ) : (
                        getKeyValue(item, columnKey)
                      )}
                    </TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </section>
      {selectedMeme && (
        <EditMemeModal
          isOpen={isOpen}
          meme={selectedMeme}
          onClose={handleOnClose}
        />
      )}
    </DefaultLayout>
  );
}
