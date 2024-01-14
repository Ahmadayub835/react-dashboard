import React, { useEffect, useState } from "react";
import Card from "./Card";
import Reports from "./reports/Reports";
import RecentSales from "./Sales/RecentSales";
import TopSelling from "./topSelling/TopSelling";
import RecentActivity from "./recentactivity/RecentActivity";
import BudgetReport from "./budgetReport/BudgetReport";
import WebTraffic from "./webtraffic/WebTraffic";
import News from "./news/News";



function Dashboard() {
    const [cards, setCards] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:3000/cards')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            })
            .catch(e => console.error(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="dashboard-section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {cards && cards.length > 0 &&
                            cards.map(card => <Card key={card._id} card={card} />)}
                        <div className="col-lg-12 pr-0 border-none rounded-0">
                            <Reports key="reports" />
                        </div>
                        <div className="col-lg-12 pr-0 border-none rounded-0 mt-[15px]">
                            <RecentSales key="recentSales" />
                        </div>
                        <div className="col-lg-12 pr-0 border-none rounded-0 mt-[15px]">
                            <TopSelling key="topSelling" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 pr-0">
                    <RecentActivity key="recentActivity" />
                    <BudgetReport key="budgetReport" />
                    <WebTraffic key="webTraffic" />
                    <News key="news" />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
