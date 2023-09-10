"use client"
import { useEffect, useState } from "react";

interface Stat {
    amount: string;
    title: string;
}

const initialStats: Stat[] = [
    { amount: "2500", title: "Happy Clients"},
    { amount: "300", title: "Full Notebooks"},
    { amount: "120", title: "Teammates"},
    { amount: "30", title: "Stores"},
]

//TODO TL cleanup
const Statistics = () => {
    const [statistics, setStatistics] = useState(initialStats);

    

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log("running ")
            const increment = Math.floor(Math.random() * 10) + 1
            const updated: Stat[] = [
                { amount: (+statistics[0].amount + increment).toString(), title: "Happy Clients"},
                { amount: (+statistics[1].amount + increment).toString(), title: "Full Notebooks"},
                { amount: (+statistics[2].amount + increment).toString(), title: "Teammates"},
                { amount: (+statistics[3].amount + increment).toString(), title: "Stores"},
            ]
            // console.log(updated);
            setStatistics(updated)

        }, 5000);
    
        return () => clearInterval(interval);
        }, [statistics]);
    
    return (
        <>
        { statistics.map((item, index) => (
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