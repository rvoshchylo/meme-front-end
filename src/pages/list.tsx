import DefaultLayout from "@/layouts/default";
import { useGetMemes } from "@/api/memes/memes.queries";
import { title } from "@/components/primitives";
import { Meme } from "@/types/meme";
import MemeCard from "@/components/Meme";

export default function MemeListPage() {
  const { data: memes = [], isLoading } = useGetMemes();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center gap-6 py-10 px-4">
        <h1 className={title()}>Meme List</h1>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full max-w-screen-xl">
            {memes.map((meme: Meme) => (
              <MemeCard key={meme.id} meme={meme} />
            ))}
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
