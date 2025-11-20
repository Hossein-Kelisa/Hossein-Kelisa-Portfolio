import "./MyLanguages.css";

function MyLanguages() {
  const getLevel = (percent) => {
    if (percent >= 90) return "Native";
    if (percent >= 70) return "Advanced";
    if (percent >= 50) return "Intermediate";
    if (percent >= 30) return "Basic";
    return "Beginner";
  };

  const languages = [
    { name: "Persian (Farsi)", percent: 100 },
    { name: "Azeri", percent: 100 },
    { name: "Turkish", percent: 50 },
    { name: "English", percent: 60 },
    { name: "Dutch", percent: 40 },
  ];

  return (
    <div id="my-languages" className="lang-container">
      <h2 className="lang-title">Languages I Speak</h2>

      <div className="lang-list">
        {languages.map((lang, index) => (
          <div key={index} className="lang-item">
            <div className="lang-header">
              <span className="lang-name">{lang.name}</span>
              <span className="lang-level">{getLevel(lang.percent)}</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${lang.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyLanguages;
