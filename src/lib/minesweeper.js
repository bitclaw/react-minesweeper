import * as _ from 'lodash';

export const TILES = 144;
export const MINES = parseInt(TILES / 10);
export const COLS  = Math.sqrt(TILES);
export const TILE_WIDTH = 20;

export const getNeighbors = (tiles, idx) => {
    const { row, col } = to2D(idx);
    const adjacents = [
        { r: row + 1, c: col     }, { r: row - 1, c: col },
        { r: row,     c: col + 1 }, { r: row,     c: col - 1 },
        { r: row + 1, c: col + 1 }, { r: row - 1, c: col + 1 },
        { r: row + 1, c: col - 1 }, { r: row - 1, c: col - 1 }
    ];

    return _.reduce(adjacents, (acc, adj) => {
        acc[to1D(adj.r, adj.c)] = tiles[to1D(adj.r, adj.c)];

        return acc;
    }, {});
}


export const getTilesInitialState = (tilesCount = TILES, minesCount = MINES) => {
    const tiles = createTiles(tilesCount);
    plantMines(tiles, tilesCount, minesCount);
    setNeighborMinesCount(tiles);

    return {
        ...tiles,
        count: tilesCount,
        minesCount
    };
};

export const to1D = (row, col) => ((row * COLS) + col);
export const to2D = (idx) => ({
    row: parseInt(idx / COLS),
    col: parseInt(idx % COLS)
});

export const createTiles = (count) => {
    // Default tile state
    const state = {
        hasMine: false,
        uncovered: false,
        neighborsMineCount: 0
    };

    return _.chain(count).range().reduce((acc, n) => {
        acc[n] = { ...state };
        return acc;
    }, {}).value();
};

export const plantMines = (tiles, tilesCount, count) => {
    _.chain(tilesCount).range().shuffle().take(count).each((idx) => {
        tiles[idx].hasMine = true;
    }).value();
};

export const setNeighborMinesCount = (tiles) => {
    _.each(tiles, (tile, idx) => {
        if (tile.hasMine) return;
        const neighbors = getNeighbors(tiles, idx);

        tile.neighborsMineCount = _.reduce(neighbors, (acc, neighbor) => {
            return (
                neighbor && neighbor.hasMine ? acc + 1 : acc
            );
        }, 0);
    });
}

export const uncoverTile = (tiles, idx) => {
    if (!tiles[idx]){
        return;
    }
    const neighbors = getNeighbors(tiles, idx);

    tiles[idx].uncovered = true;

    _.each(neighbors, (neighbor, idx) => {
        if(neighbor && !neighbor.hasMine && !neighbor.uncovered) {
            tiles[idx].uncovered = true;
        }
    });

    return tiles;
};

export const isGameWon = (tiles) => {
    const { count, minesCount } = tiles;

    return _.reduce(tiles, (acc, tile) => {
        return (tile.uncovered ? acc + 1 : acc);
    }, 0) === (count - minesCount);
};