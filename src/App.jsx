import { useState, useEffect } from 'react';
import PersonalInfo from "./components/PersonalInfo";
import Tabs from "./components/Tabs";
import FilterInput from './components/FilterInput';
const articles = [
  {
    "title": "t01",
    "summary": "test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "t02",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "t03",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "t04",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "t05",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    "title": "t06",
    "summary": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];
const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    setCurrentTabIndex(0);
    setFilterList([...articles]);
  }, []);
  const handleCurrentTabIndex = (tabIndex) => {
    setCurrentTabIndex(tabIndex);

  };
  const handleSetFilterValue = (value) => {
    setFilterList(
      articles.filter((item) => {
        const regexPattern = new RegExp(value.toLowerCase().split(/\s/).filter(item => item !== '').join('|'));
        return regexPattern.test(item.title.toLowerCase()) || regexPattern.test(item.summary.toLowerCase());
      }
      ));
  }
  return (
    <div>
      <PersonalInfo />
      <Tabs currentTabIndex={currentTabIndex} onChangeTabIndex={handleCurrentTabIndex} />
      <FilterInput onInputChange={handleSetFilterValue} />
      <div className='wrapper'>
        {
          currentTabIndex == 0 && (
            <div className="grid grid-cols-4 gap-4">
              {filterList.map((element, index) => (
                <div className="card card-compact bg-base-100 shadow-xl" key={index}>
                  <div className="card-body">
                    <h2 className="card-title">{element.title}</h2>
                    <p>{element.summary}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">read more</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App
