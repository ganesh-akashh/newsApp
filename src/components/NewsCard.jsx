import React, { useRef, useEffect } from 'react';
import state from '../store';

const NewsCard = ({ article, index }) => {
    const cardRef = useRef(null);
    const isActive = state.activeCard === index;

    const navbarHeight=90;

    useEffect(() => {
    if (isActive && cardRef.current) {
      const offset = cardRef.current.offsetTop - navbarHeight;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }, [isActive]);

    return (
        <div className='flex justify-center'>
            <div
                ref={cardRef}
                key={index}
                className={`bg-white rounded-lg shadow-md overflow-hidden mb-4 flex flex-col justify-between transition-transform transform hover:scale-105 hover:border-4 border-gray-500 hover:shadow-lg ${isActive && 'border-gray-500 border-4 shadow-lg scale-105'
                    }`}
            >
                <img src={article.urlToImage} alt={article.title} className="w-full h-44 object-cover" />
                <div className="p-4 flex flex-col justify-start h-full">
                    <div
                        className="sm:text-xl font-semibold mb-2 overflow-hidden"
                        style={{
                            maxHeight: '3.6rem',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 2,
                            overflow: 'hidden',
                        }}
                    >
                        {article.title}
                    </div>
                    <p className='text-gray-500'>{article.description}</p>
                </div>
                <div className="flex justify-between items-center mb-2 p-2">
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        Read more
                    </a>
                    <span className="text-gray-500 text-sm">
                        {(new Date(article.publishedAt)).toDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
