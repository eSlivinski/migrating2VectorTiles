I.    Intro

II.   What are vector tiles

  A.  Functional problem that vector tiles solve
    1. The Status Quo
        a. Tiles - Subdivide the world into a grid with increasing levels of detail
          i.  **EFFICICIENCY** = Constant
              =>  Able to cap to maintain the size of the geographic data by rasterizing it.  Therefore, the size of a tile containing manhattan at zoom level 18 === one of the Pacific ocean at zoom 2. => Your view of whether this is good or bad sort of depends on whether you are a glass half full or half empty sort of person...
          ii.  **INTELLIGENCE** = Ignorant
              =>  Either way, the point is moot from the perspective of developing because we image tiles are just images and we don't really have access to the underlying data.  Couldn't use a point on a map for geospatial processing or even update the cursor on hover, because the browser is ignorent to all the compressed data.
          iii.  **FLEXIBILITY** = Immutable
              =>  Can't update the image when the user clicks or hovers without completely redrawing the image (on the server) making it cumbersome to update both the *Style* or the *data*

        b. Geojson - Send the vector data to the browser, where it is rendered on the fly. => Decouple the data from the mapped representation
          i.  **FLEXIBILITY** = Dynamic
              =>  Because the process of rendering the data is done on the client, we can easily make updates to the data or style
          ii.  **INTELLIGENCE** = Customizable
              =>  We can bind what ever data we need to, directly to the map element, and use that data to preform spatial operations
          iii.  **EFFICICIENCY** = Problematic
              =>  ... however because the style and the rendering are separate -- the more data we need to render the bigger the burden on the browser, which means we need to be vigelent of how the dataset itself will impact UX.

    2.  **The Problem** - Traditional mapping formats left us with a trade-off between performance and interactivity.
          => This trade-off has essentially created a threshold in terms of the amount data that we could present and maintain optimal UX that has required us to sacrifice either *Data* or *functionality* to maintain efficiency.
          => Defacto *Data Centric Design*

  B.  **The Solution** - Vector Tile Definition
    =>  Vector tiles are a way of essentially, "compressing" vector data information by cutting the data into tiles and streaming the data, as needed, to the browser
    =>  This "hybridization" between traditional raster and vector formats is revolutionary because it elliminates the trade-off between interactivity and performance that has been central to web mapping up until now.
    =>  This is long awaited -- and finally, the time has come to

III.  Vetro Proof
    =>  After a vector tile spec has been formalized and with advances in software, it seems like this solution we have been waiting for has finally arrived... but what about everything we've already built? -- This is a pretty spectacular shift in geodata representation
    =>  The second half of my presentation is going to focus on work NBT has been doing to explore how we can take our existing apps to the next level with vector tiles.

  A.  Vetro Overview
    1.  Product Description
      *  Mapping software for telecommunications companies to manage their networks

    2.  Goals
      * Enhance performance as we prepare to scale up, while maintaining functionality and UX
      b.  Stack
          * geoJSON data
          * leaflet as SVG text
          * 10+ Plugins
    3.  Must haves
      * Dynamic restyling
      * GIS operations (Point in polygon, nearest features)
      * Editing

  B.  Leaflet Vector Tiles
    1.  Why DIY?
    1.  Library Overview
    2.  What worked
    3.  What is left to do
