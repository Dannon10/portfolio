import React from 'react'
import Tabs from './Tabs'

export default function TabsTest() {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>Content for Tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>Content for Tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <div>Content for Tab 3</div>
        }
    ]

    function handleTabChange(currentTabIndex) {
        console.log('Current Tab Index:', currentTabIndex);
    }
  return (
    <div>
        <Tabs  tabsContent={tabs} onChange={handleTabChange}/>
    </div>
  )
}
