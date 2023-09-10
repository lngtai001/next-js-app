interface Stat {
    amount: string;
    title: string;
}

const stats: Stat[] = [
    { amount: "2500", title: "Happy Clients"},
    { amount: "300", title: "Full Notebooks"},
    { amount: "120", title: "Teammates"},
    { amount: "30", title: "Stores"},
]

const Statistics = () => {
    return (
        <>
        { stats.map((item, index) => (
            <div key={index} className="p-4 sm:w-1/4 w-1/2">
                <h2 className=" text-pink-500 title-font font-medium sm:text-4xl text-3xl text-gray-900">{item.amount}</h2>
                <p className="leading-relaxed">{item.title}</p>
            </div>
        ))}
        </>
    )
}

export function StatisticsContainer(){
    return (
        <div className="text-gray-600 body-font bg-pink-100 py-10">
            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-wrap -m-4 text-center text-pink-500">
                    <Statistics />
                </div>
            </div>
        </div>
    )
}