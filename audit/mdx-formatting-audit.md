# MDX Formatting Audit

**Generated:** automated scan of `34` MDX files

## Summary

| Metric | Count |
| --- | --- |
| Files scanned | 34 |
| Files with issues | 25 |
| Total issues | 1415 |

### Issues by severity

| Severity | Count |
| --- | --- |
| high | 841 |
| medium | 480 |
| low | 94 |

### Issues by type

| Problem type | Count |
| --- | --- |
| Corrupted PDF extraction artifacts | 801 |
| Broken lists | 252 |
| Questions merged with answers | 215 |
| Missing blank lines around code fences | 58 |
| Missing blank lines around tables | 36 |
| Tables converted into paragraphs | 23 |
| Markdown tables that may not render correctly | 17 |
| Invalid MDX syntax | 13 |

## Files without issues

- `content/notes/linux/essential-linux-commands-for-cybersecurity-specialists.mdx`
- `content/notes/linux/kali-linux-toolkit-guide.mdx`
- `content/notes/linux/master-termux-handbook.mdx`
- `content/notes/networking/wireshark.mdx`
- `content/notes/security/metasploit-for-beginners.mdx`
- `content/notes/web/nessus-vulnerability-scanning.mdx`
- `content/notes/web/sqlmap-guide.mdx`
- `content/notes/web/web-security-fundamentals.mdx`
- `content/notes/windows/windows-defensive-cmd.mdx`

## Detailed findings

### `content/notes/security/blue-team-complete-guide.mdx`

**Issues:** 607 | **Corrected copy:** `audit/corrected-mdx/content/notes/security/blue-team-complete-guide.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 5 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 18 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 403 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 404 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 2566 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3159 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 3164 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3168 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3169 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3170 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3171 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3172 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3173 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3174 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3175 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3176 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3180 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3181 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3184 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3185 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3188 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3191 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3199 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3204 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3209 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3211 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3214 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3215 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3216 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3220 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3227 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3228 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3231 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3233 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3235 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3237 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3238 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3239 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3240 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3241 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3248 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3255 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3258 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3260 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3262 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3263 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3265 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3266 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3267 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3268 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3269 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3270 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3271 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3272 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3275 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3276 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3277 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3278 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3280 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3281 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3282 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3283 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3284 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3285 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3286 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3288 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3290 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3291 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3293 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3295 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3296 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3297 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3298 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3299 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3301 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3302 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3303 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3306 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3307 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3308 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3309 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3310 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3312 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3313 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3314 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3315 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3316 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3317 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3318 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3319 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3320 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3321 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3322 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3324 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3328 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3329 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3330 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3331 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3332 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3334 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3335 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3336 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3337 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3338 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3339 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3341 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3342 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3343 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3347 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3348 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3349 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3352 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3354 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3356 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3358 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3359 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3360 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3361 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3362 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3363 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3364 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3366 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3368 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3369 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3370 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3371 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3372 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3373 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3374 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3375 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3376 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3377 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3382 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3383 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3385 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3387 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3388 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3390 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3391 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3392 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3393 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3394 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3395 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3396 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3397 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3398 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3399 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3404 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3405 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3407 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3408 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3409 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3410 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3411 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3412 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3413 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3414 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3415 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3416 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3417 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3418 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3420 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3421 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3422 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3423 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3424 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3426 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3427 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3428 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3430 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3431 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3432 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3433 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3434 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3435 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3436 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3437 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3438 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3439 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3440 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3441 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3442 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3443 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3444 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3445 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3446 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3447 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3448 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3449 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3451 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3452 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3453 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3454 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3455 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3458 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3460 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3463 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3464 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3465 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3466 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3468 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3470 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3471 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3472 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3473 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3474 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3475 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3476 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3477 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3478 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3479 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3480 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3481 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3483 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3484 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3486 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3487 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3488 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3490 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3491 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3492 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3496 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3499 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3500 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3503 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3504 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3505 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3506 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3507 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3508 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3509 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3512 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3513 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3514 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3515 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3516 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3517 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3518 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3519 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3521 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3523 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3524 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3525 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3526 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3527 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3528 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3529 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3530 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3531 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3532 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3533 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3535 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3536 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3537 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3538 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3539 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3540 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3541 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3542 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3543 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3544 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3546 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3547 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3548 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3550 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3551 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3553 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3555 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3556 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3560 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3561 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3562 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3563 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3566 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3567 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3568 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3570 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3571 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3572 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3573 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3574 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3575 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3582 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3589 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3594 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3595 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3596 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3597 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3598 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3599 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3600 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3601 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3602 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3603 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3604 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3605 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3607 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3608 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3609 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3610 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3611 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3612 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3613 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3614 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3616 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3617 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3618 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3619 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3620 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3623 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3624 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3626 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3628 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3629 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3630 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3631 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3635 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3636 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3639 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3640 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3641 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3642 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3643 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3644 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3649 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3650 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3654 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3655 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3656 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3657 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3658 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3659 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3661 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3662 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3663 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3664 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3665 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3667 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3668 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3669 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3670 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3671 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3672 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3674 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3675 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3676 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3677 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3678 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3680 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3681 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3683 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3684 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3686 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3687 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3688 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3689 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3690 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3691 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3693 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3694 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3695 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3696 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3698 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3700 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3701 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3703 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3704 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3705 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3706 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3708 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3709 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3712 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3716 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3717 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3718 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3719 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3720 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3721 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3722 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3723 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3724 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3726 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3727 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3728 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3730 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3731 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3733 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3735 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3737 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3739 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3741 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3743 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3745 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3747 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3750 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3751 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3752 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3754 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3755 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3756 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3758 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3759 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3760 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3761 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3762 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3764 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3765 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3766 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3767 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3768 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3773 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3774 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3775 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3776 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3777 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3778 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3780 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3781 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3785 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3786 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3787 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3788 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3789 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3790 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3791 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3792 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3793 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3794 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3795 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3796 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3799 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3801 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3804 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3806 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3807 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3808 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3809 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3810 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3811 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3812 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3813 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3814 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3815 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3816 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3817 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3818 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3819 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3820 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3822 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3823 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3826 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3831 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3832 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3834 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3835 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3836 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3837 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3838 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3840 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3841 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3842 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3843 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3844 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3845 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3846 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3847 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3848 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3850 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3851 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3858 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3859 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3860 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3861 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3862 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3864 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3865 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3866 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3867 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3868 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3869 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3871 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3872 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3873 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3875 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3876 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3877 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3878 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3879 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3880 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3881 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3883 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3884 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3886 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3887 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3889 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3890 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3891 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3894 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3895 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3896 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3897 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3898 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3899 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3900 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3901 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3902 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3904 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3905 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3906 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3907 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3909 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3911 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3912 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3915 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3916 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3917 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3918 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3919 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3920 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3921 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3922 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3923 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3924 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3925 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3926 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3927 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3928 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3929 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3930 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3931 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3932 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3933 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3934 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3935 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3936 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3937 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3939 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3940 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3941 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3942 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3943 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3947 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3948 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3950 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3951 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3952 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3953 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3954 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3955 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3956 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3957 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3958 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3959 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3960 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3961 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3962 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3963 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3964 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3967 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3969 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3970 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3971 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3972 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3973 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3974 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3975 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3976 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3979 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3980 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3981 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3982 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3984 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3985 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3986 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3987 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3988 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3989 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3996 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3997 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 3998 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4000 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4006 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4007 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4008 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4009 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4010 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4012 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4015 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4016 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4020 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4021 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4022 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4023 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4027 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4028 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4030 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4031 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4032 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4033 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4034 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4040 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4042 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4043 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4044 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4046 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4047 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 4048 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |

### `content/notes/networking/networking-security-interview-qa-guide-osi-to-firewall.mdx`

**Issues:** 526 | **Corrected copy:** `audit/corrected-mdx/content/notes/networking/networking-security-interview-qa-guide-osi-to-firewall.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 4 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 7 | high | Corrupted PDF extraction artifacts | Lone page number `1` from PDF pagination | Remove page number or convert to section heading |
| 8 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 9 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 10 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 12 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 13 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 15 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 17 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 40 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 41 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 42 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 43 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 44 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 45 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 57 | high | Corrupted PDF extraction artifacts | Lone page number `2` from PDF pagination | Remove page number or convert to section heading |
| 58 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 63 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 64 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 65 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 66 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 67 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 68 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 69 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 70 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 71 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 72 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 73 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 74 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 78 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 82 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 83 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 84 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 85 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 86 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 87 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 88 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 89 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 90 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 91 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 92 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 93 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 94 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 101 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 105 | high | Corrupted PDF extraction artifacts | Lone page number `3` from PDF pagination | Remove page number or convert to section heading |
| 106 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 109 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 110 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 111 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 114 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 118 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 119 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 120 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 121 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 122 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 123 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 124 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 128 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 131 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 136 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 138 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 143 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 145 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 147 | high | Corrupted PDF extraction artifacts | Lone page number `4` from PDF pagination | Remove page number or convert to section heading |
| 148 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 149 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 153 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 158 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 160 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 162 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 164 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 165 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 166 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 168 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 170 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 171 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 172 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 177 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 179 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 182 | high | Corrupted PDF extraction artifacts | Lone page number `5` from PDF pagination | Remove page number or convert to section heading |
| 183 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 188 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 193 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 198 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 201 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 203 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 208 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 209 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 211 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 212 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 214 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 215 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 216 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 217 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 218 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 219 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 220 | high | Corrupted PDF extraction artifacts | Lone page number `6` from PDF pagination | Remove page number or convert to section heading |
| 221 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 222 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 223 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 225 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 226 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 228 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 229 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 231 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 232 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 233 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 234 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 235 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 236 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 237 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 238 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 239 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 240 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 242 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 243 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 244 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 245 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 246 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 249 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 252 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 256 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 259 | high | Corrupted PDF extraction artifacts | Lone page number `7` from PDF pagination | Remove page number or convert to section heading |
| 260 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 263 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 266 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 268 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 272 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 273 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 275 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 276 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 277 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 278 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 279 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 280 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 281 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 282 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 283 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 284 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 287 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 288 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 293 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 294 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 297 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 298 | high | Corrupted PDF extraction artifacts | Lone page number `8` from PDF pagination | Remove page number or convert to section heading |
| 299 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 303 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 304 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 307 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 308 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 309 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 310 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 311 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 312 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 314 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 318 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 320 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 323 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 324 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 325 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 329 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 331 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 333 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 334 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 335 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 336 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 337 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 338 | high | Corrupted PDF extraction artifacts | Lone page number `9` from PDF pagination | Remove page number or convert to section heading |
| 339 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 341 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 342 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 343 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 344 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 349 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 351 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 352 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 353 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 355 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 357 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 360 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 364 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 367 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 369 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 371 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 372 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 373 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 374 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 375 | high | Corrupted PDF extraction artifacts | Lone page number `10` from PDF pagination | Remove page number or convert to section heading |
| 376 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 383 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 387 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 390 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 395 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 399 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 404 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 408 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 412 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 416 | high | Corrupted PDF extraction artifacts | Lone page number `11` from PDF pagination | Remove page number or convert to section heading |
| 417 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 419 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 420 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 421 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 422 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 423 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 424 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 425 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 426 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 427 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 428 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 429 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 430 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 430 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 431 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 431 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 432 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 433 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 434 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 435 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 444 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 448 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 450 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 453 | high | Corrupted PDF extraction artifacts | Lone page number `12` from PDF pagination | Remove page number or convert to section heading |
| 454 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 458 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 463 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 465 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 468 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 471 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 474 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 477 | high | Corrupted PDF extraction artifacts | Lone page number `13` from PDF pagination | Remove page number or convert to section heading |
| 478 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 479 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 481 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 484 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 487 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 488 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 489 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 490 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 491 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 492 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 493 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 495 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 496 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 501 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 504 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 507 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 508 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 511 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 514 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 515 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 517 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 519 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 521 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 523 | high | Corrupted PDF extraction artifacts | Lone page number `14` from PDF pagination | Remove page number or convert to section heading |
| 524 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 526 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 529 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 530 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 534 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 538 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 539 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 546 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 548 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 551 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 555 | high | Corrupted PDF extraction artifacts | Lone page number `15` from PDF pagination | Remove page number or convert to section heading |
| 556 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 562 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 567 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 574 | high | Corrupted PDF extraction artifacts | Lone page number `16` from PDF pagination | Remove page number or convert to section heading |
| 575 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 584 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 591 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 597 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 599 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 600 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 601 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 602 | high | Corrupted PDF extraction artifacts | Lone page number `17` from PDF pagination | Remove page number or convert to section heading |
| 603 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 607 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 627 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 629 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 634 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 635 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 636 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 641 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 644 | high | Corrupted PDF extraction artifacts | Lone page number `18` from PDF pagination | Remove page number or convert to section heading |
| 645 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 646 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 647 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 648 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 649 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 650 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 651 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 652 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 653 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 654 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 658 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 659 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 661 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 662 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 664 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 666 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 670 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 671 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 674 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 676 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 679 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 680 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 682 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 685 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 687 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 689 | high | Corrupted PDF extraction artifacts | Lone page number `19` from PDF pagination | Remove page number or convert to section heading |
| 690 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 691 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 692 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 695 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 697 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 700 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 701 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 703 | high | Corrupted PDF extraction artifacts | Lone page number `20` from PDF pagination | Remove page number or convert to section heading |
| 704 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 706 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 708 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 714 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 720 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 722 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 725 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 733 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 738 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 739 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 740 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 741 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 742 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 743 | high | Corrupted PDF extraction artifacts | Lone page number `21` from PDF pagination | Remove page number or convert to section heading |
| 744 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 748 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 753 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 757 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 760 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 765 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 768 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 769 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 771 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 776 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 777 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 779 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 780 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 781 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 782 | high | Corrupted PDF extraction artifacts | Lone page number `22` from PDF pagination | Remove page number or convert to section heading |
| 783 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 786 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 793 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 797 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 802 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 806 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 807 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 812 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 813 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 819 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 822 | high | Corrupted PDF extraction artifacts | Lone page number `23` from PDF pagination | Remove page number or convert to section heading |
| 823 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 827 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 828 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 829 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 836 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 841 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 847 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 848 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 849 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 850 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 851 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 852 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 853 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 854 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 855 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 856 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 857 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 858 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 859 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 860 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 861 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 862 | high | Corrupted PDF extraction artifacts | Lone page number `24` from PDF pagination | Remove page number or convert to section heading |
| 863 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 864 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 866 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 867 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 868 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 872 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 873 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 875 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 879 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 883 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 884 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 885 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 886 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 887 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 888 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 893 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 900 | high | Corrupted PDF extraction artifacts | Lone page number `25` from PDF pagination | Remove page number or convert to section heading |
| 901 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 902 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 908 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 912 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 913 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 914 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 916 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 918 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 921 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 924 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 926 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 928 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 931 | high | Corrupted PDF extraction artifacts | Lone page number `26` from PDF pagination | Remove page number or convert to section heading |
| 932 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 933 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 935 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 938 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 939 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 941 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 946 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 949 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 955 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 960 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 961 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 966 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 968 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 969 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 970 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 971 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 972 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 973 | high | Corrupted PDF extraction artifacts | Lone page number `27` from PDF pagination | Remove page number or convert to section heading |
| 974 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 976 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 979 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 983 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 986 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 990 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 993 | medium | Corrupted PDF extraction artifacts | PDF section marker `❖` instead of Markdown heading | Convert to `## Section title` heading |
| 994 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 999 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1004 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1005 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1006 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1007 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1008 | high | Corrupted PDF extraction artifacts | Lone page number `28` from PDF pagination | Remove page number or convert to section heading |
| 1009 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1010 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1013 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1016 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1018 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1019 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1020 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1021 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1024 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1031 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1032 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1033 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1034 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1035 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1036 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1037 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1042 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1047 | high | Corrupted PDF extraction artifacts | Lone page number `29` from PDF pagination | Remove page number or convert to section heading |
| 1048 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1050 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1054 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1055 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1056 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1058 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1060 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1062 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1069 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1073 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1075 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1077 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1078 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1079 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1080 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1081 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1084 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1085 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1086 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1088 | high | Corrupted PDF extraction artifacts | Lone page number `30` from PDF pagination | Remove page number or convert to section heading |
| 1089 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1093 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1097 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1101 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1105 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1107 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1108 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1109 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1113 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1117 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1118 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1119 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1120 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1121 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1123 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1126 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1128 | high | Corrupted PDF extraction artifacts | Lone page number `31` from PDF pagination | Remove page number or convert to section heading |
| 1129 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1134 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1140 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1144 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1146 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1155 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1157 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1158 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1159 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1160 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1165 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1168 | high | Corrupted PDF extraction artifacts | Lone page number `32` from PDF pagination | Remove page number or convert to section heading |
| 1169 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1171 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1173 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1179 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1183 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1186 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1191 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1194 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1199 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1204 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1210 | high | Corrupted PDF extraction artifacts | Lone page number `33` from PDF pagination | Remove page number or convert to section heading |
| 1211 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1216 | medium | Questions merged with answers | Numbered interview question without heading structure | Use `### Q{n}: ...` heading and separate answer paragraph |
| 1220 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |
| 1221 | medium | Broken lists | List item uses `▪` without Markdown list marker | Prefix with `- ` and remove `▪` |

### `content/notes/web/nuclei-plugin-burp-suite-template-creation-guide.mdx`

**Issues:** 86 | **Corrected copy:** `audit/corrected-mdx/content/notes/web/nuclei-plugin-burp-suite-template-creation-guide.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 4 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 7 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 8 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 9 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 10 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 11 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 13 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 16 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 17 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 18 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 19 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 20 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 21 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 23 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 24 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 25 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 26 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 27 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 30 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 31 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 33 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 34 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 35 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 36 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 37 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 39 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 40 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 41 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 42 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 43 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 44 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 45 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 46 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 49 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 50 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 51 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 52 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 55 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 56 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 57 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 58 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 59 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 60 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 62 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 63 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 65 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 66 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 67 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 68 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 70 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 71 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 72 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 74 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 75 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 76 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 77 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 78 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 79 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 80 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 82 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 84 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 86 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 87 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 88 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 89 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 92 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 93 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 94 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 95 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 96 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 97 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 100 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 106 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 107 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 108 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 110 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 111 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 114 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 115 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 116 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 117 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 118 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 119 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 120 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 121 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 123 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |

### `content/notes/security/wireless-penetration-testing-bettercap.mdx`

**Issues:** 48 | **Corrected copy:** `audit/corrected-mdx/content/notes/security/wireless-penetration-testing-bettercap.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 4 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 13 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 17 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 30 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 32 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 33 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 34 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 43 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 55 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 56 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 57 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 59 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 60 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 70 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 71 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 73 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 74 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 75 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 76 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 77 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 85 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 86 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 90 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 91 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 93 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 94 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 95 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 96 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 97 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 98 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 99 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 101 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 117 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 119 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 120 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 122 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 134 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 140 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 141 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 143 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 144 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 146 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 148 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 156 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 157 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 158 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 159 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 162 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |

### `audit/archived/cheatsheets/networking-cheatsheet.mdx`

**Issues:** 25 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/networking-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 12 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 12 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 18 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 33 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 33 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 41 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 54 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 54 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 61 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 88 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 88 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 97 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 154 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 154 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 155 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 156 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 157 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 158 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 161 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 163 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 243 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 248 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 254 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 260 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `content/notes/security/top-10-mobile-penetration-testing-tools-for-ethical-hackers.mdx`

**Issues:** 21 | **Corrected copy:** `audit/corrected-mdx/content/notes/security/top-10-mobile-penetration-testing-tools-for-ethical-hackers.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 4 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 20 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 21 | high | Corrupted PDF extraction artifacts | Lone page number `1` from PDF pagination | Remove page number or convert to section heading |
| 28 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 29 | high | Corrupted PDF extraction artifacts | Lone page number `2` from PDF pagination | Remove page number or convert to section heading |
| 36 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 37 | high | Corrupted PDF extraction artifacts | Lone page number `3` from PDF pagination | Remove page number or convert to section heading |
| 44 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 45 | high | Corrupted PDF extraction artifacts | Lone page number `4` from PDF pagination | Remove page number or convert to section heading |
| 52 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 53 | high | Corrupted PDF extraction artifacts | Lone page number `5` from PDF pagination | Remove page number or convert to section heading |
| 60 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 61 | high | Corrupted PDF extraction artifacts | Lone page number `6` from PDF pagination | Remove page number or convert to section heading |
| 68 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 69 | high | Corrupted PDF extraction artifacts | Lone page number `7` from PDF pagination | Remove page number or convert to section heading |
| 76 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 77 | high | Corrupted PDF extraction artifacts | Lone page number `8` from PDF pagination | Remove page number or convert to section heading |
| 84 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 85 | high | Corrupted PDF extraction artifacts | Lone page number `9` from PDF pagination | Remove page number or convert to section heading |
| 93 | high | Corrupted PDF extraction artifacts | OCR spaced-letter corruption (single letters separated by spaces) | Rejoin spaced letters into words |
| 94 | high | Corrupted PDF extraction artifacts | Lone page number `10` from PDF pagination | Remove page number or convert to section heading |

### `audit/archived/cheatsheets/ai-langchain-cheatsheet.mdx`

**Issues:** 15 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/ai-langchain-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 13 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 13 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 16 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 22 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 84 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 84 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 90 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 118 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 124 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 135 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 147 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 154 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 347 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 347 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 354 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `audit/archived/cheatsheets/web-development-cheatsheet.mdx`

**Issues:** 12 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/web-development-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 52 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 52 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 58 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 174 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 174 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 180 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 283 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 283 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 291 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 292 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 292 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 300 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `audit/archived/cheatsheets/deployment-cheatsheet.mdx`

**Issues:** 11 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/deployment-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 307 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 307 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 308 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 309 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 310 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 311 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 312 | high | Tables converted into paragraphs | Arrow/space-aligned columns suggest table rendered as plain text | Convert to a Markdown table with header and `\| --- \|` separator row |
| 313 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 348 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 373 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 424 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/react-cheatsheet.mdx`

**Issues:** 7 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/react-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 16 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 51 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 92 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 136 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 166 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 178 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 193 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `content/notes/windows/powershell-auditing.mdx`

**Issues:** 7 | **Corrected copy:** `audit/corrected-mdx/content/notes/windows/powershell-auditing.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 9 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 9 | high | Markdown tables that may not render correctly | Inconsistent column counts within table: [3, 3, 4, 3, 3] | Align all rows to the same number of columns |
| 9 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 14 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |
| 18 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 29 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 36 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/fastapi-cheatsheet.mdx`

**Issues:** 6 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/fastapi-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 26 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 50 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 66 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 82 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 128 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/git-cheat-sheet.mdx`

**Issues:** 6 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/git-cheat-sheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 8 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 35 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 60 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 80 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 92 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 101 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/linux-terminal-cheatsheet.mdx`

**Issues:** 6 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/linux-terminal-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 41 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 63 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 78 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 116 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 138 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/sql-cheatsheet.mdx`

**Issues:** 6 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/sql-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 26 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 74 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 95 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 95 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 101 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `audit/archived/cheatsheets/docker-cheatsheet.mdx`

**Issues:** 5 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/docker-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 41 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 80 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 116 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 132 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |

### `audit/archived/cheatsheets/nextjs-cheatsheet.mdx`

**Issues:** 5 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/nextjs-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 29 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 64 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |
| 68 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 109 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `audit/archived/cheatsheets/tailwindcss-cheatsheet.mdx`

**Issues:** 5 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/tailwindcss-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 34 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 55 | high | Markdown tables that may not render correctly | Table block missing `\| --- \|` separator row | Add separator row after header, e.g. `\| --- \| --- \|` |
| 55 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 62 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `audit/archived/cheatsheets/langchain-ai-cheatsheet.mdx`

**Issues:** 4 | **Corrected copy:** `audit/corrected-mdx/audit/archived/cheatsheets/langchain-ai-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 7 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 30 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 61 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |
| 121 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `content/notes/security/reverse-shells-cheatsheet.mdx`

**Issues:** 2 | **Corrected copy:** `audit/corrected-mdx/content/notes/security/reverse-shells-cheatsheet.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 10 | low | Missing blank lines around tables | Table immediately follows non-table content | Insert blank line before table |
| 14 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |

### `content/blog/hello-world.mdx`

**Issues:** 1 | **Corrected copy:** `audit/corrected-mdx/content/blog/hello-world.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 18 | low | Missing blank lines around code fences | Opening code fence immediately follows paragraph text | Insert a blank line before the opening fence |

### `content/notes/networking/nmap-scanning-guide.mdx`

**Issues:** 1 | **Corrected copy:** `audit/corrected-mdx/content/notes/networking/nmap-scanning-guide.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 18 | low | Missing blank lines around tables | Content immediately follows table without blank line | Insert blank line after table |

### `content/notes/security/bug-bounty-playbook.mdx`

**Issues:** 1 | **Corrected copy:** `audit/corrected-mdx/content/notes/security/bug-bounty-playbook.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 4 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |

### `content/notes/web/api-gateway-security-implementation-and-best-practices.mdx`

**Issues:** 1 | **Corrected copy:** `audit/corrected-mdx/content/notes/web/api-gateway-security-implementation-and-best-practices.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 4 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |

### `content/notes/windows/windows-event-log-analysis-advanced-threat-detection-guide.mdx`

**Issues:** 1 | **Corrected copy:** `audit/corrected-mdx/content/notes/windows/windows-event-log-analysis-advanced-threat-detection-guide.mdx`

| Line | Severity | Problem type | Issue | Suggested fix |
| ---: | --- | --- | --- | --- |
| 4 | high | Invalid MDX syntax | GitHub-style alert `> [!IMPORTANT]` is not valid MDX | Replace with `<Callout type="warning" title="...">` component |

## Corrected MDX output

Auto-corrected copies are in `audit/corrected-mdx/` (mirrors original paths).

**Automated fixes applied:**

- PDF page numbers removed
- `❖` / `▪` converted to headings and Markdown lists
- `> [!IMPORTANT]` alerts converted to `<Callout>` components
- Numbered questions with `?` converted to `### Q{n}:` headings
- Arrow-aligned table paragraphs converted to Markdown tables (where detected)
- Blank lines inserted around tables and code fences

**Manual review still required for:**

- OSI layer descriptions without list structure (`networking-security-interview-qa-guide-osi-to-firewall.mdx`)
- Large book-dump files (`blue-team-complete-guide.mdx`)
- Content flagged `REWRITE` in `audit/phase-7-rewrite-plan.md`

Re-run: `python audit/scripts/mdx_formatting_audit.py`

