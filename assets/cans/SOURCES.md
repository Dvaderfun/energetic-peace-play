# Can artwork

Downloaded on 2026-09-28 for this fictional, unofficial game. Product names and artwork belong to their respective owners. These assets imply no brand affiliation.

## Non Stop — actual manufacturer product renders

Source page: https://www.nonstop.ua/ (redirects to the Non Stop Energy brand website).

- `nonstop-green-reference.png`: official green **Non Stop S.T.A.L.K.E.R. Limited Edition** can, https://nonstop-energy.com/wp-content/uploads/2024/05/ns_green_c500.png
- `nonstop-original-reference.png`: official **Non Stop Original** 500 ml can, https://nonstop-energy.com/wp-content/uploads/2024/05/ns_orig_c500_v2.png
- `nonstop-zero-reference.png`: official **Non Stop Original Zero Sugar** 500 ml can, https://nonstop-energy.com/wp-content/uploads/2024/05/ns_orig_zero_c500.png
- `nonstop-spark-reference.png`: official **Non Stop Spark Zero Sugar** 500 ml can, https://nonstop-energy.com/wp-content/uploads/2024/05/ns_spark_zero_c500.png

The game inverse projects the front of each product photograph onto a cylindrical label. The unseen label backs, wear, materials, limbs and equipment are generated for the game. The gas mask illustration is printed label artwork, not a separate head or face. The real green STALKER packaging is preserved.

## Monster — authentic logo, game-generated label wraps

- `monster-logo-reference.webp`: https://upload.wikimedia.org/wikipedia/commons/d/d4/Logo_Monster_Energy.webp
- Logo file description: https://commons.wikimedia.org/wiki/File:Logo_Monster_Energy.webp
- Product reference: https://en.wikipedia.org/wiki/Monster_Energy

The claw symbol and Monster wordmark are cropped from the downloaded logo. The black/green Energy, white/silver Zero Ultra, orange Mango Loco, pink Pipeline Punch, violet Ultra Violet and blue Ultra Blue backgrounds, decorative patterns and flavor text are procedural interpretations. They are not claimed to be scans or exact reproductions of the retail labels. Monster's product website rejected automated image access, so complete official wrap textures were not downloaded.

All can geometry, aluminium lids and pull tabs, surface wear, tactical limbs, backpacks and carbines are generated in `src/characters.js` using Three.js. There are no human character meshes.

## Мистер Сидр — реальна етикетка на вигаданому персонажі

- `mister-sidr-label-reference.png`: crop of the actual "Мистер Сидр / Яблочный" bottle label from the product photograph used in [The Flow's June 2023 report](https://the-flow.ru/news/28-chelovek-umerli-vypiv-mister-sidr). [Direct source image](https://the-flow.ru/uploads/images/resize/830x0/adaptiveResize/08/33/55/16/79/c84f94c40cd7.jpg). Downloaded and cropped on 2026-09-28; the crop has been scaled from the photograph and is not an invented logo. Source photograph rights are not asserted by this project.
- Factual context: [Russian Wikipedia's sourced overview of the 2023 methanol poisonings](https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%BE%D0%B5_%D0%BE%D1%82%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BB%D0%BE%D0%BC_%D0%B2_%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D0%B8_(2023)) and [RBC's report on the withdrawal of the product](https://www.rbc.ru/society/05/06/2023/647de7189a7947f3d828b75b).

The revised campaign uses this label on visible PET bottles. The Domodedovo agents wear short, crooked NonStop sleeves over their bottles; their caps, shoulders and the lower cider labels stay exposed. A small procedural name panel makes «МИСТЕР СИДР» readable below the disguise. Armed Sidr troops in Hostomel and unarmed Sidr passengers use the uncovered bottle. The factions, motives and airport events are fiction.


## Additional terminal passengers

Dobry Cola, Chernogolovka / Baikal, Ochakovsky kvass and CoolCola use original procedural label art with the researched brand names. They are not product-photo reproductions. [Research and sources](../../../docs/REFERENCES.md).

## Baltika — official package photographs

Downloaded 2026-09-28 from the [official brand catalog](https://corporate.baltika.ru/products/catalog/baltika/). Package artwork and source photographs belong to the producer; no CC0 license is claimed. Police roles and equipment are fictional additions.

| Local reference | Original image |
| --- | --- |
| `baltika-0-reference.webp` | https://corporate.baltika.ru/wp-content/uploads/2026/06/baltika-0-bezalkogolnoe-1.png |
| `baltika-1-reference.webp` | https://corporate.baltika.ru/wp-content/uploads/2026/06/b1-bottle-033-front-1.png |
| `baltika-3-reference.webp` | https://corporate.baltika.ru/wp-content/uploads/2026/06/baltika-3-klassicheskoe-1.png |
| `baltika-4-reference.webp` | https://corporate.baltika.ru/wp-content/uploads/2026/06/baltika-4-rzhanoj-el-1.png |
| `baltika-6-reference.webp` | https://corporate.baltika.ru/wp-content/uploads/2026/06/baltika-6-porter-1.png |
| `baltika-7-reference.webp` | https://corporate.baltika.ru/wp-content/uploads/2026/06/baltika-7-eksportnoe-1.png |
| `baltika-8-reference.webp` | https://corporate.baltika.ru/wp-content/uploads/2026/06/baltika-8-pshenichnoe-1.png |
| `baltika-9-reference.webp` | https://corporate.baltika.ru/wp-content/uploads/2026/06/baltika_can_b9_front-4swjzr-1.png |

Original transparent PNGs are converted to WebP. For each `baltika-N-label.webp`, the visible package bounds are detected from alpha >25, then the front label is cropped: 10–90% of width, 58–91% of bottle height, or 12–90% of the №9 can height. Crops are resized to 512×512. As of 2026-09-29, **all eight Baltika characters use aluminium cans**, including a lid and pull tab. Only the label artwork is projected onto the can; bottle silhouettes are not used in the game. The adapted wraps are not claimed to reproduce retail can designs exactly. Uniforms, helmets, shields and weapon geometry are procedural.


## Going Dark — процедурні етикетки

- **Квас Тарас Чорний** (ПЕТ 1,5 л, Carlsberg Ukraine): темна етикетка, козак з оселедцем і вусами, «КВАС ТАРАС · ЧОРНИЙ». Назва й різновид звірені з [карткою товару](https://novus.zakaz.ua/uk/products/kvas-kvas-taras-500ml--04820000457521/) та [Untappd](https://untappd.com/b/carlsberg-ukraine-kvass-taras-chornyi-kvas-taras-chornij/1515439); малюнок — інтерпретація гри, не скан.
- **Уманське Житнє темне** (Уманьпиво, 4,5 %): бордова банка з колосками жита. Назва й міцність — з [картки товару](https://novus.zakaz.ua/uk/products/pivo-ukrayina--04820009944466/). У грі все пиво — банки.
- **Жигулёвское, Охота Крепкое, Клинское**: процедурні етикетки з назвами сортів; кольори й композиція вигадані.
- **REVO** на скидах дронів — чорна банка з процедурним написом.

Усі ці етикетки намальовані в `src/content/characters.js` і запечені в `public/assets/characters/can-labels.ktx2` (`npm run build:can-labels`).
