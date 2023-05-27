import ServiceBell from "../../../../assets/svgs/ServiceBell.svg"
import Bank from "../../../../assets/svgs/Bank.svg"
import History from "../../../../assets/svgs/History.svg"
import { Link } from "react-router-dom"
import { BANKS_PAGE, MERCHANTS_PAGE, TRANSACTIONS_PAGE } from "../../../../data/datasource/api/constant"
type StatsBoardProps = {

}
export const StatsBoard = (props: StatsBoardProps) => {
    return (
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-primary-600 bg-primary-600 rounded-full mr-6">
               <img className="w-12 h-12 text-white" src={ServiceBell} loading="lazy" alt={`Service Bell`} />
            </div>
            <div>
                <span className="block text-2xl font-bold"></span>
                <span className="block text-gray-500"><Link to={MERCHANTS_PAGE}>Merchants</Link></span>
            </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-primary-600 rounded-full mr-6">
            <img className="w-12 h-12 text-white" src={Bank} loading="lazy" alt={`Service Bell`} />
            </div>
            <div>
                <span className="block text-2xl font-bold"></span>
                <span className="block text-gray-500"><Link to={BANKS_PAGE}>Banks</Link></span>
            </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-primary-600 rounded-full mr-6">
                <img className="w-12 h-12 text-white" src={History} loading="lazy" alt={`Service Bell`} />
            </div>
            <div>
                <span className="block text-2xl font-bold"></span>
                <span className="block text-gray-500"><Link to={TRANSACTIONS_PAGE}>Past Transactions</Link></span>
            </div>
        </div>
        
    </section>
    )
}