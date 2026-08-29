SELECT
    artist_name,
    COUNT(*) AS total_plays
FROM playback_data
GROUP BY artist_name
HAVING COUNT(*) > 2
ORDER BY total_plays DESC;