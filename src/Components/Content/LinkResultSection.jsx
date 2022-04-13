import React, { useState } from 'react'

function LinkResultSection({shorten}) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(shorten.full_short_link)
        setCopied(true)
    }

    return (
      <div className="link-result">
        <div className="result">
          <div className="original-link">
            <p>{shorten.original_link}</p>
          </div>
          <hr className="line" />
          <div className="shortened-link">
            <div className="result-link"> {shorten.full_short_link} </div>
            <div className="copy-result">
              <button className="copy-btn" onClick={handleCopy}>
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LinkResultSection
