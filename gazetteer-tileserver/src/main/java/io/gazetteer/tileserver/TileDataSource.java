package io.gazetteer.tileserver;

import io.gazetteer.mbtiles.XYZ;
import io.gazetteer.mbtiles.Tile;

import java.util.concurrent.CompletableFuture;

public interface TileDataSource {

    String getMimeType();

    CompletableFuture<Tile> getTile(XYZ coordinates);

}