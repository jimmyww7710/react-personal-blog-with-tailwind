import { useState, useEffect } from 'react';
import PersonalInfo from "./components/PersonalInfo";
import Tabs from "./components/Tabs";
import FilterInput from './components/FilterInput';
const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  useEffect(() => {
    setCurrentTabIndex(0);
  }, []);
  const handleCurrentTabIndex = (tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
  return (
    <div>
      <PersonalInfo />
      <Tabs currentTabIndex={currentTabIndex} onChangeTabIndex={handleCurrentTabIndex} />
      <FilterInput />

    </div>
  )
}

export default App
