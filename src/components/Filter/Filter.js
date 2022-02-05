import './Filter.scss';
import { FaChevronDown } from 'react-icons/fa';

function Filter({ dark_mode }) {
  return (
    <div className={`${dark_mode ? 'Filter dark_mode' : 'Filter'}`}>
      <button className='dropdown__button has_shadow'>
        Filter by Region <FaChevronDown />
      </button>

      <ul className='region_list has_shadow'>
        <li className='regions'>Africa</li>
        <li className='regions'>America</li>
        <li className='regions'>Asia</li>
        <li className='regions'>Europe</li>
        <li className='regions'>Oceania</li>
      </ul>
    </div>
  );
}

export default Filter;
