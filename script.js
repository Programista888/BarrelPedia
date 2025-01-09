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