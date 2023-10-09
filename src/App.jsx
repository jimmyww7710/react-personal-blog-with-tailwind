import { useState, useEffect, useRef } from 'react';
import PersonalInfo from "./components/PersonalInfo";
import Tabs from "./components/Tabs";
import FilterInput from './components/FilterInput';
import { BiSun, BiMoon } from "react-icons/bi";
// import axios from './axios';
const tabsData = {
  0: [
    {
      "title": "意料之外的結果-不是加了closing-tag-包住就真的被包住",
      "summary": "某些tag其實並不能在裡面放同樣的tag",
      "link": "https://medium.com/@jimmyww7710/撰寫html-意料之外的結果-不是加了closing-tag-包住就真的被包住-8449cc09ff25",
      "tags": ['html']
    },
    {
      "title": "結構化css文字大小設定",
      "summary": "透過相對單位可以更快速地定義大小且根據HTML內容的結構，產生對應關係",
      "link": "https://medium.com/@jimmyww7710/結構化css文字大小設定-637e632def48",
      "tags": ['css', 'html']
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
  const [darkTheme, setDarkTheme] = useState(false);
  useEffect(() => {
    setCurrentTabIndex(0);
    setFilterList(tabsData[0]);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', (darkTheme ? 'dracula' : 'cupcake'));
  }, [darkTheme])
  const handleCurrentTheme = () => {
    setDarkTheme(!darkTheme);
  };
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
        return regexPattern.test(item.title.toLowerCase()) || regexPattern.test(item.summary.toLowerCase()) || item.tags && regexPattern.test(item.tags.join().toLowerCase());
      }
      ));

    console.log(tabsData[currentTabIndex], filterList);
  }

  return (
    <div>
      <section className="bg-base-200">
        <div className="static justify-end pt-5 pr-5 md:absolute md:pt-0 md:pr-0 top-5 right-5 z-20 flex items-center justify-content-space-between gap-2">
          {darkTheme ? <BiMoon /> : <BiSun />}
          <input type="checkbox" className='toggle toggle-sm md:toggle-md' checked={darkTheme ? true : false} onChange={handleCurrentTheme} />
        </div>
        <PersonalInfo onClickScrollButton={handleScrollButton} />
      </section>

      <div ref={ref}>
        <Tabs currentTabIndex={currentTabIndex} onChangeTabIndex={handleCurrentTabIndex} onClickScrollButton={handleScrollButton} />
      </div>
      <FilterInput inputValue={inputValue} onInputChange={handleSetFilterValue} />
      <div className='wrapper min-h-screen'>
        <div className={`grid grid-cols-1 gap-4 ${currentTabIndex === 0 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'}`}>
          {filterList.map((element, index) => (
            <div className="card card-compact bg-base-100 shadow-xl" key={index}>
              <div className="card-body">
                <h2 className="card-title">{element.title}</h2>
                <p>{element.summary}</p>
                <div className='flex justify-content-space-between gap-2'>
                  {element.tags && element.tags.map((item, i) => (
                    <div key={i} className='mt-5'>
                      {item == 'html' && <div className="badge badge-outline">html</div>}
                      {item == 'css' && <div className={`badge badge-outline badge-${item == 'css' ? 'secondary' : 'urgent'}`}>{item}</div>}
                    </div>
                  ))}
                </div>
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
