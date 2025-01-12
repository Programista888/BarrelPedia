document.addEventListener('DOMContentLoaded', () => {
    const tooltip = document.getElementById('tooltip');
    const tooltipTitle = document.getElementById('tooltip-title');
    const tooltipDesc1 = document.getElementById('tooltip-desc1');
    const tooltipDesc2 = document.getElementById('tooltip-desc2');

    const barrelData = {
        1: { title: "Glowing Tower", desc1: "Date: 01/01/2025", desc2: "Author: roziru" },
        2: { title: "Piece of Sushi", desc1: "Date: 04/01/2025", desc2: "Author: roziru" },
        3: { title: "Gramophone", desc1: "Date: 06/01/2025", desc2: "Author: roziru" },
        4: { title: "Dragon tube", desc1: "Date: 07/01/2025", desc2: "Author: roziru" },
        5: { title: "Earthen Meteor", desc1: "Date: 08/01/2025", desc2: "Author: roziru" },
        6: { title: "Can", desc1: "Date: 09/01/2025", desc2: "Author: roziru" },
        7: { title: "Shiny Virtue", desc1: "Date: 09/01/2025", desc2: "Author: roziru" },
        8: { title: "Squeezer", desc1: "Date: 08/01/2025", desc2: "Author: roziru" },
        9: { title: "Powers Buttons", desc1: "Date: 08/01/2025", desc2: "Author: roziru" },
        10: { title: "Just Keep", desc1: "Date: ??/11/2024", desc2: "Author: greatchampion_5142" },
        11: { title: "valentine's", desc1: "Date: ??/12/2024", desc2: "Author: greatchampion_5142" },
        12: { title: "Star King", desc1: "Date: ??/12/2024", desc2: "Author: greatchampion_5142" },
        13: { title: "Green Bin", desc1: "Date: ??/12/2024", desc2: "Author: greatchampion_5142" },
        14: { title: "Black Red White", desc1: "Date: ??/12/2024", desc2: "Author: greatchampion_5142" },
        15: { title: "*Simple Sounds*", desc1: "Date: ??/12/2024", desc2: "Author: greatchampion_5142" },
        16: { title: "Sound waves", desc1: "Date: ??/12/2024", desc2: "Author: greatchampion_5142" },
        17: { title: "Magic Fountain", desc1: "Date: 10/01/2025", desc2: "Author: roziru" },
        18: { title: "Cyber milk v10", desc1: "Date: 07/01/2025", desc2: "Author: roziru" },
        19: { title: "Your barrel ran into a Problem", desc1: "Date: 27/09/2024", desc2: "Author: cyber" },
        20: { title: "Cyber City", desc1: "Date: 24/09/2024", desc2: "Author: cyber" },
        21: { title: "Japanese handsomeness", desc1: "Date: 25/09/2024", desc2: "Author: cyber" },
        22: { title: "Lava Cake", desc1: "Date: 19/10/2024", desc2: "Author: cyber" },
        23: { title: "Happy 2025", desc1: "Date: 01/08/2024", desc2: "Author: cyber" },
        24: { title: "World Core", desc1: "Date: 25/09/2025", desc2: "Author: cyber" },
        25: { title: "Sand Ghost", desc1: "Date: 14/09/2024", desc2: "Author: cyber" },
        26: { title: "Sand Ghost", desc1: "Date: 08/10/2024", desc2: "Author: cyber" },
    };

    document.querySelectorAll('.image-container').forEach(container => {
        container.addEventListener('mouseenter', (e) => {
            const barrelId = container.getAttribute('data-barrel-id');
            const data = barrelData[barrelId];
            tooltipTitle.textContent = data.title;
            tooltipDesc1.textContent = data.desc1;
            tooltipDesc2.textContent = data.desc2;
            tooltip.style.display = 'block';
            const rect = container.getBoundingClientRect();
            tooltip.style.top = `${rect.top + window.scrollY}px`;
            if (rect.right + tooltip.offsetWidth > window.innerWidth) {
                tooltip.style.left = `${rect.left - tooltip.offsetWidth}px`;
            } else {
                tooltip.style.left = `${rect.right}px`;
            }
        });

        container.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});