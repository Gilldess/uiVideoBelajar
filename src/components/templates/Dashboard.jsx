const Dasboard = ({header,main}) => {
    return (
        <div>
            <header className="px-4 md:px-20 py-2 md:py-4 border-b border-[#3A35411F]">
                {header}
            </header>
            <main className="px-4 md:px-20 py-2 md:py-4">
                {main}
            </main>
        </div>
    )
}

export default Dasboard;