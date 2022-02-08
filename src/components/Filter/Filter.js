import './Filter.scss';
import { FaChevronDown } from 'react-icons/fa';

function Filter({ dark_mode, filter_open, setFilter_open, filter }) {
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
        {filter.map((region, index) => {
          return (
            <li className='regions' key={index}>
              {region}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Filter;
