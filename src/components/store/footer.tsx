export default function Footer () {
    return (
        <div>
            {/* FOOTER */}
            <footer className="bg-black text-white text-xs px-6 py-12 border-t border-zinc-900">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-2 opacity-60">
                    <p>ABOUT / PRODUCTS / STORES</p>
                    <p>© OWNDAYS CO., LTD. ALL RIGHTS RESERVED.</p>
                </div>
                <div className="md:text-right">
                    <a href="https://owndays.com" target="_blank" rel="noreferrer" className="inline-block border border-zinc-700 px-6 py-3 font-bold uppercase tracking-widest hover:bg-[#FF5A1F] hover:text-black hover:border-transparent transition">
                    ONLINE STORE ↗
                    </a>
                </div>
                </div>
            </footer>
        </div>
    )
}