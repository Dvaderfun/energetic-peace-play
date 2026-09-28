# Airport material sources

All material photographs are from [Poly Haven](https://polyhaven.com), provided
under [CC0](https://polyhaven.com/license). Downloaded 2026-09-28.

| Material | Source | Local files |
| --- | --- | --- |
| Asphalt 02 | https://polyhaven.com/a/asphalt_02 | `asphalt_02_*_1k.jpg` |
| Concrete Floor 02 | https://polyhaven.com/a/concrete_floor_02 | `concrete_floor_02_*_1k.jpg` |
| Corrugated Iron | https://polyhaven.com/a/corrugated_iron | `corrugated_iron_*_1k.jpg` |

Each set contains the `diff` colour image, `nor_gl` OpenGL normal image, and
`rough` roughness image. Original downloads follow the URL pattern:

`https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/{asset}/{asset}_{map}_1k.jpg`

Images were re-encoded to JPEG quality 85 for browser delivery. Colour and
roughness images retain 1024×1024 resolution; normal images were reduced to
512×512. All nine images together are approximately 1.76 MB. The `_1k` file suffix
identifies the source download size. No external requests are made at runtime.

The airport layout, signs, painted runway markings, terrain noise, smoke, flames,
contact shadows, and geometry are original procedural work in `src/world.js`.
