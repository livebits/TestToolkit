
// define component props definition
type SearchBarProps = {
    city: string,
    setCity: (city: string) => void
}

const SearchBar = ({city, setCity}: SearchBarProps) => {
    return (
        <input type="text" value={city} onChange={e => setCity(e.target.value)} />
    )
}

export default SearchBar;