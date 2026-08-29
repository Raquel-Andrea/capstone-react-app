SELECT
    track_name,
    artist_name,
    COUNT(*) AS total_plays,
    SUM(CASE WHEN skipped = 'TRUE' THEN 1 ELSE 0 END) AS total_skips,
    ROUND(
        SUM(CASE WHEN skipped = 'TRUE' THEN 1 ELSE 0 END) / COUNT(*) * 100,
        2
    ) AS skip_rate
FROM playback_data
WHERE reason_start <> 'clickrow'
GROUP BY track_name, artist_name
HAVING COUNT(*) >= 20
ORDER BY skip_rate DESC;