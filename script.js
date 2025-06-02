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
        26: { title: "House", desc1: "Date: 08/10/2024", desc2: "Author: cyber" },
        27: { title: "Ocean Hook", desc1: "Date: 08/11/2024", desc2: "Author: cyber" },
        28: { title: "Tree", desc1: "Date: 03/08/2024", desc2: "Author: cyber" },
        29: { title: "Book of Life", desc1: "Date: 05/10/2025", desc2: "Author: cyber" },
        30: { title: "WhiteParrot", desc1: "Date: 05/10/2024", desc2: "Author: cyber" },
        31: { title: "Candy Christmas Tree", desc1: "Date: 25/12/2024", desc2: "Author: cyber" },
        32: { title: "Exit", desc1: "Date: 06/01/2025", desc2: "Author: cyber" },
        33: { title: "Energy Drink", desc1: "Date: 06/10/2024", desc2: "Author: cyber" },
        34: { title: "R.I.P", desc1: "Date: 08/08/2024", desc2: "Author: cyber" },
        35: { title: "Back from the Grave", desc1: "Date: 03/08/2025", desc2: "Author: cyber" },
        36: { title: "Pumpkin", desc1: "Date: 30/07/2025", desc2: "Author: cyber" },
        37: { title: "Lily in a Bottle", desc1: "Date: 02/11/2024", desc2: "Author: cyber" },
        38: { title: "Pencil tin", desc1: "Date: ??/??/2024", desc2: "Author: cyber" },
        39: { title: "Cone", desc1: "Date: 10/12/2024", desc2: "Author: cyber" },
        40: { title: "Captain", desc1: "Date: 31/07/2024", desc2: "Author: cyber" },
        41: { title: "Panties", desc1: "Date: 31/07/2024", desc2: "Author: cyber" },
        42: { title: "Pirate Boat", desc1: "Date: 31/07/2024", desc2: "Author: cyber" },
        43: { title: "Christmas Gift", desc1: "Date: 25/12/2024", desc2: "Author: cyber" },
        44: { title: "Red Parrot", desc1: "Date: 31/07/2024", desc2: "Author: cyber" },
        45: { title: "Santa's Sleigh", desc1: "Date: 25/12/2024", desc2: "Author: cyber" },
        46: { title: "Iron", desc1: "Date: 01/08/2024", desc2: "Author: cyber" },
        47: { title: "Christmas Chimney", desc1: "Date: 25/12/2024", desc2: "Author: cyber" },
        48: { title: "Zombie Dog", desc1: "Date: 16/08/2024", desc2: "Author: cyber" },
        49: { title: "Blue Cake", desc1: "Date: 16/05/2025", desc2: "Author: cyber" },
        50: { title: "Fizz Can", desc1: "Date: 21/03/2025", desc2: "Author: cyber" },
        51: { title: "2026?", desc1: "Date: 21/03/2025", desc2: "Author: cyber" }, //powrót
        52: { title: "Toxic Can", desc1: "Date: 21/03/2025", desc2: "Author: cyber" },
        53: { title: "Apple", desc1: "Date: 16/05/2025", desc2: "Author: cyber" },
        54: { title: "Wanted Dead or Alive", desc1: "Date: 14/09/2024", desc2: "Author: cyber" },
        55: { title: "Blue Blackhole", desc1: "Date: 28/03/2024", desc2: "Author: klockowaty" },
        56: { title: "Yea... Idk fr", desc1: "Date: 25/02/2024", desc2: "Author: klockowaty" },
        57: { title: "Earth Box", desc1: "Date: 02/03/2022", desc2: "Author: klockowaty" },
        58: { title: "Prism", desc1: "Date: 25/10/2023", desc2: "Author: klockowaty" },
        59: { title: "Glutek", desc1: "Date: 25/10/2023", desc2: "Author: klockowaty" },
        60: { title: "Vectoried", desc1: "Date: 25/10/2023", desc2: "Author: klockowaty" },
        61: { title: "Every bedroom shelf", desc1: "Date: 25/10/2023", desc2: "Author: klockowaty" },
        62: { title: "Gladiator's Finale", desc1: "Date: 25/02/2025", desc2: "Author: roziru" }, //nowa aktualizacja
        63: { title: "Blizzard Strayer", desc1: "Date: 25/02/2025", desc2: "Author: roziru" },
        64: { title: "Wan­der­er's Troupe", desc1: "Date: 25/02/2025", desc2: "Author: roziru" },
        65: { title: "Thundersoother", desc1: "Date: 24/02/2025", desc2: "Author: roziru" },
        66: { title: "Tenacity of the Millelith", desc1: "Date: 23/02/2025", desc2: "Author: roziru" },
        67: { title: "Obsidian Codex", desc1: "Date: 23/02/2025", desc2: "Author: roziru" },
        68: { title: "Sun", desc1: "Date: 22/02/2025", desc2: "Author: roziru" },
        69: { title: "Neptune", desc1: "Date: 22/02/2025", desc2: "Author: roziru" },
        70: { title: "Uranus", desc1: "Date: 22/02/2025", desc2: "Author: roziru" },
        71: { title: "Jupiter", desc1: "Date: 21/02/2025", desc2: "Author: roziru" },  
        72: { title: "SPACEEE", desc1: "Date: 20/05/2025", desc2: "Author: schrottii" },   //new new
        73: { title: "A healthy smoothie ", desc1: "Date: 30/04/2025", desc2: "Author: schrottii" },
        74: { title: "Changing Barrel", desc1: "Date: 02/20/2025", desc2: "Author: schrottii" },
        75: { title: "Shark", desc1: "Date: 17/03/2025", desc2: "Author: schrottii, snaker0t" },
        76: { title: "Blueberry Cake", desc1: "Date: 13/03/2025", desc2: "Author: schrottii" },
        77: { title: "Snake Energy Drink", desc1: "Date: 10/03/2025", desc2: "Author: schrottii" },
        78: { title: "Snake Energy Drink Machine", desc1: "Date: 10/03/2025", desc2: "Author: schrottii" },
        79: { title: "Cookies :3", desc1: "Date: 26/01/2025", desc2: "Author: schrottii" },
        80: { title: "Windows Barrel", desc1: "Date: 18/12/2024", desc2: "Author: schrottii" },
        81: { title: "Halloween Barrel (i scared)", desc1: "Date: 31/10/2024", desc2: "Author: schrottii" },
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