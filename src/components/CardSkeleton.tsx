import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

const CardSkeleton = () => {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} className="w-full shadow-md p-2">
          <CardHeader className="p-0">
            <Skeleton className="w-full h-[200px] rounded-md" />
          </CardHeader>
          <CardBody>
            <Skeleton className="h-4 w-3/4 rounded-md" />
          </CardBody>
          <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
            <Skeleton className="h-4 w-12 rounded-md" />
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardSkeleton;
