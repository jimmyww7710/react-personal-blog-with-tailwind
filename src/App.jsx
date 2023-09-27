import { useState, useEffect, useRef } from 'react';
import PersonalInfo from "./components/PersonalInfo";
import Tabs from "./components/Tabs";
import FilterInput from './components/FilterInput';
const tabsData = {
  0: [
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
  ],
  1: [
    {
      "title": "Color Generator",
      "summary": "a color generator using react.js.",
      "link": "https://jwclrgenerator.netlify.app/"
    },
    {
      "title": "Cart",
      "summary": "a cart application using React",
      "link": "https://jwcart.netlify.app/"
    },
    {
      "title": "Product Search Page",
      "summary": "a product intro collection website that contains search functionality.",
      "link": "https://jwfindproduct.netlify.app/"
    },
  ]
}


const App = () => {
  const ref = useRef(null);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [filterList, setFilterList] = useState([]);
  useEffect(() => {
    setCurrentTabIndex(0);
    setFilterList(tabsData[0]);
  }, []);
  const handleCurrentTabIndex = (tabIndex) => {
    setCurrentTabIndex(tabIndex);
    setFilterList(tabsData[tabIndex]);
  };
  const handleScrollButton = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSetFilterValue = (value) => {
    setFilterList(
      tabsData[currentTabIndex].filter((item) => {
        const regexPattern = new RegExp(value.toLowerCase().split(/\s/).filter(item => item !== '').join('|'));
        return regexPattern.test(item.title.toLowerCase()) || regexPattern.test(item.summary.toLowerCase());
      }
      ));
  }
  return (
    <div>
      <PersonalInfo onClickScrollButton={handleScrollButton} />
      <div ref={ref}>
        <Tabs currentTabIndex={currentTabIndex} onChangeTabIndex={handleCurrentTabIndex} onClickScrollButton={handleScrollButton} />
      </div>
      <FilterInput onInputChange={handleSetFilterValue} />
      <div className='wrapper min-h-screen'>
        <div className={currentTabIndex === 0 ? "grid grid-cols-1 gap-4 sm:grid-cols-2" : "grid grid-cols-1 gap-4 sm:grid-cols-3"}>
          {filterList.map((element, index) => (
            <div className="card card-compact bg-base-100 shadow-xl" key={index}>
              <div className="card-body">
                <h2 className="card-title">{element.title}</h2>
                <p>{element.summary}</p>
                <div className="card-actions justify-end">
                  {element.link && <a href={element.link} target="_blank" rel="noreferrer"><button className="btn btn-primary">{currentTabIndex === 0 ? 'READ MORE' : 'SEE PAGE'}</button></a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
