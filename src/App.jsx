import { useState, useEffect, useRef } from 'react';
import PersonalInfo from "./components/PersonalInfo";
import Tabs from "./components/Tabs";
import FilterInput from './components/FilterInput';
const tabsData = {
  0: [
    {
      "title": "意料之外的結果-不是加了closing-tag-包住就真的被包住",
      "summary": "某些tag其實並不能在裡面放同樣的tag",
      "link": "https://medium.com/@jimmyww7710/撰寫html-意料之外的結果-不是加了closing-tag-包住就真的被包住-8449cc09ff25"
    },
    {
      "title": "結構化css文字大小設定",
      "summary": "透過相對單位可以更快速地定義大小且根據HTML內容的結構，產生對應關係",
      "link": "https://medium.com/@jimmyww7710/結構化css文字大小設定-637e632def48"
    }
  ],
  1: [
    {
      "title": "Color Generator",
      "summary": "A color generator using react.js.",
      "link": "https://jwclrgenerator.netlify.app/"
    },
    {
      "title": "Cart",
      "summary": "A cart application using React",
      "link": "https://jwcart.netlify.app/"
    },
    {
      "title": "Product Search Page",
      "summary": "A product intro collection website that contains search functionality.",
      "link": "https://jwfindproduct.netlify.app/"
    },
    {
      "title": "portfolio",
      "summary": "My website that contains some previous works.",
      "link": "https://jwworks.netlify.app/"
    },
  ]
}


const App = () => {
  const ref = useRef(null);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [filterList, setFilterList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    setCurrentTabIndex(0);
    setFilterList(tabsData[0]);
  }, []);
  const handleCurrentTabIndex = (tabIndex) => {
    setCurrentTabIndex(tabIndex);
    setFilterList(tabsData[tabIndex]);
    setInputValue("");
  };
  const handleScrollButton = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSetFilterValue = (value) => {
    setInputValue(value);
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
      <FilterInput inputValue={inputValue} onInputChange={handleSetFilterValue} />
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
