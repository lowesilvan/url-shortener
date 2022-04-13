import React from "react";

function ShortenLinkSection({ input, setInput, handleSubmit}) {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit}
      >
        <div className="shorten-link">
          <div className="input-field">
            <input
              type="text"
              name="link"
              placeholder="Shorten a link here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="submit-button">
            <button>Shorten it!</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShortenLinkSection;
