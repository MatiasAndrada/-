import React, { useState, useEffect, useRef } from 'react';
import { getLaunches } from '../../services/api';
import LaunchCard from '../cards/LaunchCard.jsx';

const LaunchesList = () => {
  const [list, setList] = useState([]);
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const limit = 10;
  const containerRef = useRef();
  const loadingMoreRef = useRef(false);

  const loadMore = () => {
    if (!loading && !loadingMoreRef.current && hasNextPage) {
      loadingMoreRef.current = true;
      setLoading(true);
      getLaunches({ order, page, limit })
        .then((res) => {
          setList((prevList) => [...prevList, ...res.docs]);
          setHasNextPage(res.hasNextPage);
          setPage((prevPage) => prevPage + 1);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
          loadingMoreRef.current = false;
        });
    }
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const scrollY = window.scrollY;
    const containerBottom = container.offsetTop + container.clientHeight;
    const windowHeight = window.innerHeight;

    if (scrollY + 200 >= containerBottom - windowHeight) {
      loadMore();
    }
  };

  useEffect(() => {
    if (page === 1) {
      loadMore();
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, order]);

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
    setList([]);
    setPage(1);
  };

  return (
    <div ref={containerRef}>
      <h3 className='text-lg text-white text-center my-4'>Loaded pages: {page - 1}</h3>
      {error && <p>Error: {error.message}</p>}
      <div className='w-full flex flex-col sm:flex-row justify-center items-center sm:space-x-10'>
        <h3 className='text-lg text-white'>Order:</h3>
        <button
          className={`rounded-full p-2 ${order === 'asc' ? 'bg-blue-500 text-white' : 'bg-slate-400 text-white'} mt-2 sm:mt-0
          w-fit
          `}
          onClick={() => handleOrderChange('asc')}
        >
          Ascendant
        </button>
        <button
          className={`rounded-full p-2 ${order === 'desc' ? 'bg-blue-500 text-white' : 'bg-slate-400 text-white'} mt-2 sm:mt-0 w-fit`}
          onClick={() => handleOrderChange('desc')}
        >
          Descendant
        </button>
      </div>

      <ul className='launch-list'>
        {list.map((rocket) => (
          <LaunchCard
            key={rocket.id}
            id={rocket.id}
            img={rocket.links.patch.small}
            name={rocket.name}
            launch_date_utc={rocket.date_utc}
            launch_success={rocket.success}
          />
        ))}
      </ul>
      <style>
        {`
          .launch-list {
            list-style: none;
            padding: 0;
            margin: 1em;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
            height: auto;
          }

          @media (max-width: 768px) {
            .launch-list .LaunchCard {
              flex-basis: calc(50% - 2rem);
            }
          }

          @media (max-width: 480px) {
            .launch-list .LaunchCard {
              flex-basis: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LaunchesList;
