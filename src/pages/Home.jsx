import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import { homeFeed } from "../utilities"
import HomeLoader from '../Loaders/HomeLoader';
import NewsCard from '../components/NewsCard';
import Footer from '../components/Footer';

const Home = () => {
    const [homeArticle, setHomeArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await homeFeed();
                setHomeArticle(data.articles);
                if (data.articles != null) {
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <NavBar />
            <div className="container mx-auto px-4 py-8">
                <div className="text-left my-10">
                    <h2 className="font-bold text-2xl md:text-3xl my-5 text-gray-500 border-b-2 pb-2">Today's Hot <span className='text-red-500'>Topics.</span></h2>
                </div>

                {loading ? (
                    <HomeLoader />
                ) : (
                    <div className='flex justify-center items-center'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {homeArticle?.map((article, i) => (
                                article.urlToImage && (
                                    <NewsCard article={article} i={i} key={i} />
                                )
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
