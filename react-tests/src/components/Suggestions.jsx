export default function Suggestions({ data, query, handleClick }) {
    if (!query) return null;

    function getHighlightedText(text, highlight) {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return parts.map((part, i) => 
            part.toLowerCase() === highlight.toLowerCase() 
                ? <b key={i}>{part}</b> 
                : part
        );
    }

    return (
        <ul className="suggestions-list">
            {data.map((item, index) => (
                <li key={index} onClick={() => handleClick(item)}>
                    {getHighlightedText(item, query)}
                </li>
            ))}
        </ul>
    );
}
