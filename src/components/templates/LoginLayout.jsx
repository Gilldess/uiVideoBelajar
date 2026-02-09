
function LoginLayout({navbar, froamlogin}) {
  return (
    <div>
        <header className="border-b border-[#3A35411F] px-6 py-4  xl:py-3 xl:px-30">
            {navbar}
        </header>
        <main className="bg-[#FCF8CA] flex py-7  lg:py-16 px-5 md:px-30 justify-center h-screen items-center">
            <section>{froamlogin}</section>
        </main>
    </div>
  )
}

export default LoginLayout