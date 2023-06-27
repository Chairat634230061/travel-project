import { useState, useEffect } from 'react';
import { styles } from '../styles';

const Travel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/attractions")
      .then(res => res.json())
      .then((result) => {
        setItems(result);
      })
  }, [])

  return (
    <section className="bg-[#ffffff] overflow-y-auto scrollbar-none scroll-snap-align-center">
      <div className='py-10'>
        <p className={`${styles.sectionSubText} text-center`}>
          Location
        </p>
        <h2 className={`${styles.sectionHeadText} text-center `}>
          Travel
        </h2>
      </div>
      <div className="mt-5 flex flex-wrap gap-8 justify-center pb-20">
        {items.map((item) => (
          <div key={item.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 object-center rounded-2xl shadow-lg bg-[#ddd7d7ad] ">
            <img src={item.coverimage} alt="" className="w-full rounded-2xl" />
            <p className="text-center font-bold py-4">{item.name}</p>
            <p className="p-4 py-2">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Travel;
