import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[calc(100vh-80px-80px)] overflow-y-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
        <div className="col-span-1 flex justify-center items-center p-8">
          <AspectRatio ratio={4 / 3}>
            <Image
              src={`/images/landing-page/carousel-0.jpg`}
              alt={"Picture of Cyocrawlers in different poses"}
              fill
            />
          </AspectRatio>
        </div>
        <div className="col-span-1">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 p-8 h-full">
            <Dialog>
              <DialogTrigger asChild>
                <button>
                  <div className="col-span-1 row-span-1 rounded-lg w-full h-full bg-primary/80 text-primary-foreground flex justify-center items-center font-bold text-xl">
                    Downloads
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Choose Download Type</DialogTitle>
                </DialogHeader>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
                  <Link href={""}>
                    <div className="col-span-1 row-span-1 rounded-lg w-full bg-primary/80 hover:bg-primary/70 text-primary-foreground flex justify-center items-center font-bold text-xl h-60">
                      Embeded
                    </div>
                  </Link>
                  <Link href={""}>
                    <div className="col-span-1 row-span-1 rounded-lg w-full bg-primary/80 hover:bg-primary/70 text-primary-foreground flex justify-center items-center font-bold text-xl h-60">
                      Standalone
                    </div>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
            <Link
              href={
                "https://cyobot.notion.site/a845040ff7484627a544b4d025d32f9d?v=201e9cd408014c6cad27ed2f8226b786"
              }
            >
              <div className="col-span-1 row-span-1 rounded-lg w-full h-full bg-primary/80 text-primary-foreground flex justify-center items-center font-bold text-xl">
                Wiki
              </div>
            </Link>
            <Link
              href={
                "https://www.kickstarter.com/projects/cyobot/cyocrawler-building-tomorrows-innovators"
              }
            >
              <div className="col-span-1 row-span-1 rounded-lg w-full h-full bg-primary/80 text-primary-foreground flex justify-center items-center font-bold text-xl">
                About Us
              </div>
            </Link>
            <Link
              href={
                "https://www.reddit.com/r/CYOBot/comments/183kqor/cyobot_challenge_how_to_participate/"
              }
            >
              <div className="col-span-1 row-span-1 rounded-lg w-full h-full bg-primary/80 text-primary-foreground flex justify-center items-center font-bold text-xl">
                Join Challenge
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
