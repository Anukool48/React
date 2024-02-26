import React from 'react';

export default function About(props) {
  const accordionItemStyle = {
    backgroundColor: props.mode === 'dark' ? 'rgb(0, 2, 4)' : 'white',
    color: props.mode === 'dark' ? 'light' : 'dark',
  };

  const accordionContentStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  const headingStyle = {
    color: accordionContentStyle.color,
  };

  return (
    <>
      <div className="container" style={{ backgroundColor: accordionItemStyle.backgroundColor, color: accordionItemStyle.color }}>
        <h1 style={accordionContentStyle}>About Us</h1>
        <h className="my-2" />

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={accordionItemStyle}
              >
                <strong style={headingStyle}>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
              style={accordionItemStyle}
            >
              <div className="accordion-body" style={accordionContentStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it in word count and character count and also predict how much time you need to read a paragraph.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={accordionItemStyle}
              >
                <strong style={headingStyle}>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={accordionItemStyle}
            >
              <div className="accordion-body" style={accordionContentStyle}>
                TextUtils is a free text manipulation website where you can manipulate your words like making all uppercase, lowercase, copy to clipboard, and remove extra spaces. You can also count your words. Thus, it is suitable for writing text with word/character limits.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={accordionItemStyle}
              >
                <strong style={headingStyle}>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
              style={accordionItemStyle}
            >
              <div className="accordion-body" style={accordionContentStyle}>
                This word manipulator or word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits counting characters in Facebook posts, blogs, books, Excel documents, PDF documents, essays, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
