'use client'

export function RevenueFlowVisual() {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <svg
        className="w-full h-full max-w-2xl"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="shadowFilter">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>

          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#2D6A6A" />
          </marker>
        </defs>

        {/* LEFT SIDE - DENIED/STRESSED STATE */}
        <g>
          {/* Scattered denied documents */}
          <g filter="url(#shadowFilter)">
            {/* Document 1 - tilted */}
            <rect x="40" y="100" width="80" height="110" fill="white" stroke="#D4C5B0" strokeWidth="2" rx="4" transform="rotate(-12 80 155)" />
            <text x="80" y="130" fontSize="16" fontWeight="bold" fill="#DC2626" textAnchor="middle" transform="rotate(-12 80 155)">
              DENIED
            </text>
            <line x1="50" y1="155" x2="120" y2="155" stroke="#DC2626" strokeWidth="1.5" opacity="0.6" transform="rotate(-12 80 155)" />

            {/* Document 2 */}
            <rect x="120" y="140" width="80" height="110" fill="white" stroke="#D4C5B0" strokeWidth="2" rx="4" transform="rotate(8 160 195)" />
            <text x="160" y="170" fontSize="16" fontWeight="bold" fill="#DC2626" textAnchor="middle" transform="rotate(8 160 195)">
              DENIED
            </text>
            <line x1="130" y1="195" x2="200" y2="195" stroke="#DC2626" strokeWidth="1.5" opacity="0.6" transform="rotate(8 160 195)" />

            {/* Document 3 */}
            <rect x="80" y="200" width="80" height="110" fill="white" stroke="#D4C5B0" strokeWidth="2" rx="4" transform="rotate(-5 120 255)" />
            <text x="120" y="230" fontSize="16" fontWeight="bold" fill="#DC2626" textAnchor="middle" transform="rotate(-5 120 255)">
              DENIED
            </text>
            <line x1="90" y1="255" x2="160" y2="255" stroke="#DC2626" strokeWidth="1.5" opacity="0.6" transform="rotate(-5 120 255)" />
          </g>

          {/* Red warning symbols */}
          <g fill="#DC2626" opacity="0.7">
            {/* Warning triangle 1 */}
            <path d="M 180 130 L 195 160 L 165 160 Z" />
            <text x="180" y="153" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">!</text>

            {/* Warning triangle 2 */}
            <path d="M 100 260 L 115 290 L 85 290 Z" />
            <text x="100" y="283" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">!</text>
          </g>

          {/* Expressive emojis - stressed faces */}
          <g opacity="1">
            {/* Emoji 1 - 😫 */}
            <text x="60" y="340" fontSize="36" textAnchor="middle">😫</text>
            
            {/* Emoji 2 - 😤 */}
            <text x="130" y="330" fontSize="36" textAnchor="middle">😤</text>
            
            {/* Emoji 3 - 😰 */}
            <text x="200" y="340" fontSize="36" textAnchor="middle">😰</text>
          </g>
        </g>

        {/* MAIN ARROW - Simple straight arrow from left to right with proper spacing */}
        <g>
          {/* Horizontal line with rounded caps - positioned with equal gaps */}
          <line 
            x1="240" 
            y1="200" 
            x2="320" 
            y2="200" 
            stroke="#2D6A6A" 
            strokeWidth="3" 
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
            style={{
              filter: 'drop-shadow(0 2px 8px rgba(45, 106, 106, 0.2))',
            }}
          />
        </g>

        {/* RIGHT SIDE - ORGANIZED SUCCESS STATE (with reveal animation) */}
        <g className="animate-reveal-right">
          {/* Dashboard frame - no background, just content */}
          <g filter="url(#shadowFilter)">
            {/* Dashboard container */}
            <rect x="350" y="130" width="220" height="180" fill="white" stroke="#2D6A6A" strokeWidth="2" rx="6" />

            {/* Dashboard header */}
            <rect x="350" y="130" width="220" height="30" fill="#2D6A6A" rx="6" />
            <text x="460" y="151" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">
              Recovery Dashboard
            </text>

            {/* Dashboard content - organized items */}
            <g>
              {/* Recovered amount box 1 */}
              <rect x="365" y="170" width="85" height="50" fill="#F0F9F8" stroke="#5A8A72" strokeWidth="1.5" rx="4" />
              <text x="407" y="186" fontSize="11" fontWeight="bold" fill="#2C2C2C" textAnchor="middle">
                Recovered
              </text>
              <text x="407" y="205" fontSize="16" fontWeight="bold" fill="#5A8A72" textAnchor="middle">
                $47K
              </text>

              {/* Recovered amount box 2 */}
              <rect x="465" y="170" width="85" height="50" fill="#F0F9F8" stroke="#5A8A72" strokeWidth="1.5" rx="4" />
              <text x="507" y="186" fontSize="11" fontWeight="bold" fill="#2C2C2C" textAnchor="middle">
                Success Rate
              </text>
              <text x="507" y="205" fontSize="16" fontWeight="bold" fill="#5A8A72" textAnchor="middle">
                87%
              </text>

              {/* Mini chart */}
              <g>
                <rect x="365" y="235" width="185" height="60" fill="white" stroke="#E5DDD2" strokeWidth="1" rx="3" />

                {/* Chart bars showing upward trend */}
                <rect x="375" y="280" width="12" height="8" fill="#2D6A6A" />
                <rect x="395" y="275" width="12" height="13" fill="#2D6A6A" />
                <rect x="415" y="268" width="12" height="20" fill="#5A8A72" />
                <rect x="435" y="260" width="12" height="28" fill="#5A8A72" />
                <rect x="455" y="250" width="12" height="38" fill="#5A8A72" />
                <rect x="475" y="240" width="12" height="48" fill="#2D6A6A" />
                <rect x="495" y="228" width="12" height="60" fill="#2D6A6A" />

                {/* Upward trending arrow - curved path going from lower-left to upper-right */}
                <path
                  d="M 420 275 Q 450 265, 480 240"
                  stroke="#E85D4C"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Arrow head pointing up and right */}
                <polygon points="480,240 488,235 485,250" fill="#E85D4C" />
              </g>

              {/* Checkmarks - CORAL RED with soft rounded edges */}
              <g fill="none">
                {/* Checkmark 1 */}
                <path
                  d="M 360 155 L 365 160 L 375 150"
                  stroke="#E85D4C"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Checkmark 2 */}
                <path
                  d="M 360 220 L 365 225 L 375 215"
                  stroke="#E85D4C"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}
