import { Button } from "@mantine/core";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full h-20 flex bg-midnight-blue-900 items-center justify-between px-10">
      <div className="flex items-center gap-3">
        <div>
          <img
            className="h-16 w-16 rounded-full"
            src="/Images/Logo.png"
            alt=""
          />
        </div>
        <div className="text-3xl font-semibold">
          AL Ansar <span className="text-keppel-400">Foundation</span>
        </div>
      </div>
      {NavLinks()}
      <div className="flex gap-3 items-center">
        <Button className="rounded-lg p-2 hover:bg-keppel-400">Login</Button>
        <div>
          <Button className="rounded-lg p-2 hover:bg-keppel-400">Donate</Button>
        </div>
      </div>
    </div>
  );
};
export default Header;
