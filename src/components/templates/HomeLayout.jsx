const HomeLayout = ({ navbar, hero, footer, collection, call }) => {
  return (
    <div>
      <header className="border-b border-[#3A35411F] px-6 py-4  xl:py-3 xl:px-30">
        {navbar}
      </header>
      <main className="bg-[#FCF8CA] px-5 py-7 xl:px-30 xl:py-16 flex flex-col gap-6 md:gap-16">
        <section>{hero}</section>
        <section>{collection}</section>
        <section>{call}</section>
      </main>
      <footer className="border-t-2 border-[#3A35411F] p-5 md:px-8 md:py-10 xl:px-30 xl:py-15 ">{footer}</footer>
    </div>
  );
};

export default HomeLayout;
