export const Avatar = ({ char }) => {
  return (
    <div className="m-0 flex h-12 w-12 flex-col items-center justify-center overflow-hidden rounded-md bg-white text-center text-gray-700 before:visible before:absolute before:-mt-[9mm] before:-mr-[9mm] before:flex before:h-4 before:w-4 before:self-center before:justify-self-center before:rounded-full before:border before:border-green-400 before:bg-green-400 md:h-16 md:w-16 md:before:-mt-[12mm] md:before:-mr-[12mm] ">
      <span className="text-2xl">{char}</span>
    </div>
  );
};
