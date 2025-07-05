import React from 'react'

export const WorkBadge = ({
    isDarkMode = false,
    data,
}) => {
  return (
    <>
        {
            data.map((item, index) => (
                <span 
                    key={index} 
                    className={`inline-block rounded-full px-3 py-1 text-xs mr-2 ${isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-200 text-gray-700'}`}
                >
                    {item}
                </span>
            ))
        }
    </>
  )
}
