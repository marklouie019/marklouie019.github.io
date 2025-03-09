// GENERATE CARDS IN ABOUT PAGE

// SKILLS DATA
var skillList = [
    {
        "section": "Languages",
        "skillSet": [
            {
                "name": "JavaScript",
                "description": "Interactive web elements and dynamic behavior.",
                "skillLevel": "Intermediate",
                "displayIcon": "js-logo.svg"
            },
            {
                "name": "HTML",
                "description": "Webpage layout and structure.",
                "skillLevel": "Intermediate",
                "displayIcon": "html-logo.svg"
            },
            {
                "name": "CSS",
                "description": "Styling and design for web pages.",
                "skillLevel": "Advanced",
                "displayIcon": "css-logo.svg"
            },
            {
                "name": "Java",
                "description": "General-purpose programming and backend systems.",
                "skillLevel": "Intermediate",
                "displayIcon": "java-logo.svg"
            },
            {
                "name": "Python",
                "description": "Versatile programming for automation, AI, and data.",
                "skillLevel": "Intermediate",
                "displayIcon": "python-logo.svg"
            },
            {
                "name": "SQL",
                "description": "Database querying and management.",
                "skillLevel": "Intermediate",
                "displayIcon": "sql-logo.svg"
            },
            {
                "name": "PHP",
                "description": "Server-side scripting for dynamic web pages.",
                "skillLevel": "Beginner",
                "displayIcon": "php-logo.svg"
            },
            {
                "name": "C/C++",
                "description": "System programming and performance-critical applications.",
                "skillLevel": "Beginner",
                "displayIcon": "cpp-logo.svg"
            },
        ]
    },
    {
        "section": "Frameworks",
        "skillSet": [
            {
                "name": "Bootstrap",
                "description": "Responsive design and UI components.",
                "skillLevel": "Intermediate",
                "displayIcon": "bs-logo.svg"
            },
            {
                "name": "JavaSwing",
                "description": "GUI creation for Java desktop applications.",
                "skillLevel": "Intermediate",
                "displayIcon": "java-swing-logo.svg"
            },
            {
                "name": "JavaFX",
                "description": "Advanced GUI framework for Java apps.",
                "skillLevel": "Beginner",
                "displayIcon": "javafx-logo.svg"
            },
            {
                "name": ".NET",
                "description": "Cross-platform framework for app development.",
                "skillLevel": "Beginner",
                "displayIcon": "dotnet-logo.svg"
            }
        ]
    },
    {
        "section": "Design Tools",
        "skillSet": [
            {
                "name": "Figma",
                "description": "Collaborative UI/UX design tool.",
                "skillLevel": "Advanced",
                "displayIcon": "figma-logo.svg"
            },
            {
                "name": "Photoshop",
                "description": "Image editing and graphic design.",
                "skillLevel": "Intermediate",
                "displayIcon": "photoshop-logo.svg"
            },
            {
                "name": "Canva",
                "description": "Quick graphic design platform.",
                "skillLevel": "Advanced",
                "displayIcon": "canva-logo.svg"
            }
        ]
    },
    {
        "section": "Other Skills",
        "skillSet": [
            {
                "name": "Git",
                "description": "Version control and code collaboration.",
                "skillLevel": "Beginner",
                "displayIcon": "git-logo.svg"
            }
        ]
    }
]

var skillsSection = document.getElementById('skillsSection');
var skillsSection2 = document.getElementById('skillsSection2');
var skillsSection3 = document.getElementById('skillsSection3');

function generateCards(skillSection, skillData) {
    if (skillSection) {
        for (var i = 0; i < skillData.length; i++) {
            var skillSetName = skillData[i].name;
            var skillDesc = skillData[i].description || "No description provided.";
            var skillDisplayIcon = skillData[i].displayIcon;
            var skillLevel = skillData[i].skillLevel;

            skillSection.innerHTML += `
                <div class="col-lg-4 col-md-6 py-lg-3 py-2">
                    <a>
                        <div class="card-container">
                            <div class="skill-card rounded-4 p-3">
                                <div class="skill-name d-flex justify-content-start align-items-center">
                                    <img src="assets/img/`+ skillDisplayIcon + `" alt="` + skillSetName + `" onmouseenter="applyCursorEffect()"
                                            onmouseleave="revertCursorEffect()">
                                    <p class="ps-2" onmouseenter="applyCursorEffect()"
                                            onmouseleave="revertCursorEffect()">`+ skillSetName + `</p>
                                </div>
                                <div class="skill-desc pt-2" onmouseenter="applyCursorEffect()"
                                            onmouseleave="revertCursorEffect()">
                                    <p>`+ skillDesc + `</p>
                                </div>
                                <div class="skill-level p-3 fixed-bottom fontTheme" onmouseenter="applyCursorEffect()"
                                            onmouseleave="revertCursorEffect()">
                                    `+ skillLevel + `
                                </div>
                            </div>
                        </div>
                    </a>
                </div>`;
        }
    }
}

generateCards(skillsSection, skillList[0].skillSet);
generateCards(skillsSection2, skillList[2].skillSet);
generateCards(skillsSection3, skillList[1].skillSet);
