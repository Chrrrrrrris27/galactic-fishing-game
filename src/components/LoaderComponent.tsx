export const LoaderComponent = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center w-full h-full z-50">
          <span className="block w-16 h-16 rounded-full border-4 border-meadow-400 border-t-transparent animate-spin"></span>
          <span className="hidden">loading</span>
        </div>
      )}
    </>
  );
};
