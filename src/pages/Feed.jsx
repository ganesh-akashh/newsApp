import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar';
import HomeLoader from '../Loaders/HomeLoader';
import { searchTermQuery } from '../utilities';
import Footer from '../components/Footer';
import NewsCard from '../components/NewsCard';

const Feed = () => {

    const { term } = useParams();
    const string = term.toLowerCase();
    const [articlesData, setArticlesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const displayString = string.charAt(0).toUpperCase() + string.slice(1);
    
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const data = await searchTermQuery(string);
                setArticlesData(data.articles);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [term])

    return (
        <>
            <NavBar />
            <div className="container mx-auto px-4 py-10">
                <div className="text-left my-10">
                    <h2 className="font-bold text-2xl md:text-3xl my-5 text-gray-500 pb-5 border-b-2">Latest news on <span className='text-red-500'>{displayString}.</span></h2>
                </div>
                {loading ? (
                    <HomeLoader />
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {articlesData.map((article, i) => (
                            article.urlToImage && (
                                <NewsCard article={article} index={i} key={i} />
                            )
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}

export default Feed