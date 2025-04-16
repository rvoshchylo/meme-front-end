import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/table";
import { Skeleton } from "@heroui/skeleton";

import { Column, columns } from "@/config/columns";

const TableSkeleton = () => {
  return (
    <Table aria-label="Loading meme table">
      <TableHeader columns={columns}>
        {(column: Column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="h-4 w-16 rounded-md" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[160px] rounded-md" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-[300px] rounded-md" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-10 rounded-md" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-[60px] rounded-md" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableSkeleton;
