import { useState } from 'react'

export default function Tabs({tabsContent, onChange}) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0)

    function handleOnClick(getCurrentTabIndex) {
        setCurrentTabIndex(getCurrentTabIndex)
        onChange(getCurrentTabIndex)
    }
  return (
    <div className='tabs-container'>
        <div className="heading">
            {tabsContent.map((tabItem, index) => (
            <div 
            className={`tab-item ${currentTabIndex === index ? 'active' : ''}`} 
            onClick={() => handleOnClick(index)} 
            key={tabItem.label}>
                <span className="label">{tabItem.label}</span>
            </div>
        ))}
        <div className="tabs-content">
            {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
        </div>
        </div>
    </div>
  )
}
