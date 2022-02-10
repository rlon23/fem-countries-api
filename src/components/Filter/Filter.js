import './Filter.scss';
import { FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../../context';

export default function Filter() {
  const {
    dark_mode,
    filter_open,
    setFilter_open,
    regionList,
    filterByRegion,
    setRegionFilter,
  } = useGlobalContext();

  return (
    <section className={`${dark_mode ? 'Filter dark_mode' : 'Filter'}`}>
      <button
        className='dropdown__button has_shadow'
        onClick={() => setFilter_open(!filter_open)}
      >
        Filter by Region <FaChevronDown />
      </button>

      <ul
        className={`${
          filter_open
            ? 'region_list has_shadow filter_open'
            : 'region_list has_shadow'
        }`}
      >
        {regionList.map((region, index) => {
          return (
            <li
              className='regions'
              key={index}
              onClick={() => {
                filterByRegion(`${region}`);
                setFilter_open(false);
              }}
            >
              {region}
            </li>
          );
        })}

        <li
          className='regions'
          onClick={() => {
            setRegionFilter('all');
            setFilter_open(false);
          }}
        >
          All
        </li>
      </ul>
    </section>
  );
}
