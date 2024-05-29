import React from 'react'

export function ArrowIcon({ color = "white" }: { color: string }) {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_2275_1503)">
        <path d="M19.321 11.1971L11.967 18.1341C11.726 18.3461 11.35 18.3401 11.116 18.1201C10.883 17.9001 10.876 17.5451 11.101 17.3171L17.408 11.3671L2.1 11.3661C1.762 11.3661 1.5 11.1081 1.5 10.7891C1.5 10.4701 1.762 10.2121 2.1 10.2121L17.408 10.2111L11.101 4.26115C10.876 4.03315 10.883 3.67815 11.116 3.45815C11.35 3.23815 11.726 3.23215 11.967 3.44415L19.321 10.3811C19.56 10.6061 19.56 10.9721 19.321 11.1971Z" fill={color} />
      </g>
      <defs>
        <clipPath id="clip0_2275_1503">
          <rect width="20" height="20" fill="white" transform="translate(0.5 0.789062)" />
        </clipPath>
      </defs>
    </svg>
  )
}

