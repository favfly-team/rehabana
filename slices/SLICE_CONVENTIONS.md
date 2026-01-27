# Prismic Slice Conventions

## Use variations for similar section types

**Do not create separate slice files for similar section types.** Use a single slice with multiple **variations** instead.

### Examples in this project

| Slice | Variations | Use case |
|-------|------------|----------|
| **hero_section** | `default`, `secondary` | Main homepage hero vs simple page heading (e.g. About, Contact) |
| **cta_section** | `default`, `form`, `form2` | Buttons CTA vs form CTA vs form with background image |
| **features_section** | `default`, `image` | Icon list vs image cards with number/title/details |
| **testimonial_section** | `default`, `video` | Text testimonials vs video-style layout |

### For new sections

- If a new section is **similar** to an existing one (same purpose, different layout or subset of fields), add a **variation** to the existing slice.
- Only create a **new slice file** when the section is conceptually different (e.g. FAQ, Gallery, Services).

### Naming

- Repeatable group in slice `primary`: use the common name **`items`**.
- Variation `id`: lowercase, e.g. `default`, `secondary`, `form`, `image`, `video`.
