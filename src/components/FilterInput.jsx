const FilterInput = (prop) => {
    const { onInputChange } = prop;
    return (
        <div className="wrapper">
            <div className="flex place-content-center">
                <input
                    type="text"
                    placeholder="search for"
                    className="input input-bordered w-full"
                    onChange={(e) => onInputChange(e.target.value)}
                />
            </div>
        </div>
    )
}

export default FilterInput
