# Changelog

All notable changes, touchdown telemetry algorithms, and version releases for GeoFS-V3.9 Landing Statistics are documented in this file.

---

## [3.9.0] - Unified Metadata

### Changed

- Standardize the userscript metadata and version across the V3.9 ecosystem.
- Match only the GeoFS main site and activate only when it reports V3.9.

---

## [Unreleased]

### Changed

- **Theme Alignment**: Updated touchdown telemetry dialog, rating highlights, and borders to neutral `#dddddd` and green `#4caf50`.
- **Favicon Metadata**: Switched userscript icon reference to the official GeoFS favicon.

---

## [2.0.5] - GeoFS V3.9 Compatibility

### Changed

- Start only after GeoFS reports V3.9; remain inactive on other or unrecognized versions.
- Update compatibility documentation and version metadata.

---

## [2.0.1] - Telemetry Rate Enhancement And Runway Scoring

### Added

- **50Hz Touchdown Polling**: High-frequency physics sampling loop to capture exact touchdown moments without sampling lag.
- **Runway Alignment Rating**: Vector scoring analyzing lateral displacement and heading error relative to target runway centerline.

### Fixed

- **Bounce Suppression Logic**: Filtered transient ground contact spikes to prevent false multi-touchdown score recalculations.
- **FPM Smoothing Filter**: Cleaned up vertical speed rate derivation immediately preceding wheel contact.

---

## [2.0.0] - Comprehensive Landing Evaluation Engine

### Added

- **Dynamic 0-10 Pilot Score**: Multi-parameter rating analyzing descent rate (FPM), vertical G-force, bank angle, and bounce count.
- **Touchdown Telemetry Report Card**: Post-landing glassmorphic dialog presenting pilot performance analytics.

---

## [1.0.0] - Initial Production Release

Initial release of landing statistics and vertical speed touchdown monitoring for GeoFS.
