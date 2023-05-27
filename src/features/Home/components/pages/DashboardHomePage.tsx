import { useNavigate } from "react-router-dom";
import GoogleIcon from "../../../../assets/svgs/GoogleIcon.svg"
import { LayoutPage } from "../../../../common/components/organisms/LayoutPage";
import { NavItems } from "../molecules/NavItems"
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { HomeSection } from "../organisms/HomeSection";
import { NavSection } from "../organisms/NavSection";
import { StatsBoard } from "../organisms/StatsBoard";
import { GENERATE_TRN_PAGE } from "../../../../data/datasource/api/constant";
export const DashboardHomePage = () => {
    const navigate = useNavigate();
    return (
        <LayoutPage>
               <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                    <div className="mr-6">
                        <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
                        <h2 className="text-gray-600 ml-0.5">Nova Payments</h2>
                    </div>
                    <div className="flex flex-wrap items-start justify-end -mb-3">
                        {/*<button className="inline-flex px-5 py-3 text-primary-600 hover:text-primary-900 focus:text-primary-900 hover:bg-primary-100 focus:bg-primary-100 border border-primary-600 rounded-md mb-3">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            Generate TRN
                          </button>*/}
                        <button onClick={() => navigate(GENERATE_TRN_PAGE)} className="inline-flex px-5 py-3 text-white bg-primary-600 hover:bg-primary-900 focus:bg-primary-900 rounded-md ml-6 mb-3">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                            Generate TRN
                        </button>
                    </div>
                </div>
                <StatsBoard />
                <HomeSection />
      </LayoutPage>
    );
}