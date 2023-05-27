import { Footer } from "../../../features/Home/components/organisms/Footer"
import { Header } from "../../../features/Home/components/organisms/Header"
import { NavSection } from "../../../features/Home/components/organisms/NavSection"

export const LayoutPage : React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <section className="flex bg-gray-100 min-h-screen ">
            <NavSection />
            <div className="flex-grow text-gray-800 ">
                <Header />
                <main className="p-6 sm:p-10 space-y-6">
                  {children}
                <Footer />
                </main>
            </div>
       </section>
    )
}