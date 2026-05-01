document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById('tile-grid');
    if (!gridContainer) return; // Only run on pages with the grid
    
    const rows = 4;
    const cols = 8;
    const totalTiles = rows * cols;

    // Available images in the immagini directory
    const images = [
        'immagini/image1.jpeg',
        'immagini/image2.jpeg',
        'immagini/image3.jpeg',
        'immagini/image4.jpeg',
        'immagini/image5.jpeg',
        'immagini/image6.jpeg'
    ];

    for (let i = 0; i < totalTiles; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');

        const tileInner = document.createElement('div');
        tileInner.classList.add('tile-inner');

        const tileFront = document.createElement('div');
        tileFront.classList.add('tile-front');
        // Front face remains empty and transparent per CSS styling
        
        const tileBack = document.createElement('div');
        tileBack.classList.add('tile-back');

        // Select a random image for the back of the tile
        const randomImg = images[Math.floor(Math.random() * images.length)];
        tileBack.style.backgroundImage = `url(${randomImg})`;

        // Append faces to inner, and inner to tile
        tileInner.appendChild(tileFront);
        tileInner.appendChild(tileBack);
        tile.appendChild(tileInner);

        // Add flip interaction on click
        tile.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });

        gridContainer.appendChild(tile);
    }
});
