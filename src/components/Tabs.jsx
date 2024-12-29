const tabsList = ['文章 ARTICLES', '專案 PROJECTS'];
const Tabs = (prop) => {
    const { currentTabIndex, onChangeTabIndex, onClickScrollButton } = prop;
    return (
        <div className="tabs place-content-center">
            {tabsList.map((tab, index) => (
                <a key={index}
                    className={(index === currentTabIndex ? "text-lg tab tab-bordered tab-active w-1/2 p-8" : "text-lg tab tab-bordered w-1/2 p-8")}
                    onClick={() => {
                        onChangeTabIndex(index);
                        onClickScrollButton();
                    }}>{tab}</a>
            ))}
        </div>
    )
}

export default Tabs
