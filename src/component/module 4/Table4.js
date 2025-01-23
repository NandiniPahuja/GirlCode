import React from "react";

export default function Table() {
  return (
    <div>
      <div className="table">
        <div className="trow">
          <div className="cell">
            <div>Topics</div>
          </div>
          <div className="cell cell2">
            <div>Resources</div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Basics </div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.youtube.com/watch?v=Gv9_4yMHFhI" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Introduction to ML
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Linear Algebra & Stats</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.youtube.com/watch?v=kjBOesZCoqc" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Preview
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>ML Algorithms</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.youtube.com/watch?v=Og847HVwRSI" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Top 5
              </a>
            </div>
          </div>
        </div>
        <div className="trow">
          <div className="cell">
            <div>Implementation</div>
          </div>
          <div className="cell cell2">
            <div>
              <a 
                href="https://www.youtube.com/watch?v=7eh4d6sabA0" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'white', textDecoration: 'none' }}
              >
                Using Python
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
