import melee from '~/images/melee.png';
import {Button} from '~/components/ui/button';

export default function ComingSoon() {
  return (
    <div>
      <div className="bg-black py-24 text-white ">
        <div className="mx-auto max-w-screen-lg flex flex-col sm:flex-row justify-between items-center">
          <div className="block max-w-72">
            <img src={melee} alt="big muff" className="w-full h-auto" />
          </div>
          <div className="flex flex-col gap-y-12 sm:gap-y-16 text-center items-center">
            <h1 className="text-4xl sm:text-[100px] font-bold">coming soon</h1>
            <h1 className="block sm:hidden text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              walrus audio melee
            </h1>
            <h1 className="hidden sm:block text-[80px] bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              walrus audio melee
            </h1>
            <Button className="bg-white text-zinc-900 hover:bg-zinc-400 active:bg-zinc-700 active:text-zinc-200 w-36">
              notify me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
