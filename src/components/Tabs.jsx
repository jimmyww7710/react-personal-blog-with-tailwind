const tabsList = ['Articles', 'Projects'];
const Tabs = (prop) => {
    const { currentTabIndex, onChangeTabIndex, onClickScrollButton } = prop;
    return (
        <div className="wrapper">
            <div className="tabs place-content-center mt-2">
                {tabsList.map((tab, index) => (
                    <a key={index}
                        className={(index === currentTabIndex ? "tab tab-bordered tab-active w-1/2" : "tab tab-bordered w-1/2")}
                        onClick={() => {
                            onChangeTabIndex(index);
                            onClickScrollButton();
                        }}>{tab}</a>
                ))}
            </div>
        </div>
    )
}

export default Tabs
