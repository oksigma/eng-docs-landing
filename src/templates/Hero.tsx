import { Background } from '../background/Background';

const Hero = () => (
  <Background color="bg-gray-100">
    {/* <div className="w-full bg-gray-100 py-2 px-3">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li>
      </NavbarTwoColumns>
    </div> */}

    <div className="w-full bg-gray-300 px-3 pb-10 pt-7">
      <h4 className="mb-4 text-center text-4xl font-bold text-primary-500">
        Eng Docs
      </h4>
      <h1 className="text-center font-bold text-black">
        The easiest way to run an Engineering Office
      </h1>
      <h1 className="mb-4 mt-10 text-center text-lg text-black">
        100&apos;s of projects
      </h1>
      <h1 className="text-center text-lg text-black">
        1000&apos;s of documents
      </h1>
    </div>
  </Background>
);

export { Hero };
