type Props = {};

//ICONS
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

//IMAGES
import Logo from "@/assets/Logo.png";

const NavBar = (props: Props) => {
  //TAILWIND CLASSES
  const flexBetween = "flex items-center justify-between";
  return (
    <nav className="">
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
          </div>
          <div className={`${flexBetween} w-full`}>
            <div className={`${flexBetween} gap-8 text-sm`}>
              <p>Home</p>
              <p>Benefits</p>
              <p>Our Classes</p>
              <p>Contact Us</p>
            </div>
            <div>
              <p>Sign In</p>
              <button>Become a Member</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
