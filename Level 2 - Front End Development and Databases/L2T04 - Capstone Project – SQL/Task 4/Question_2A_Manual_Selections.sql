SELECT
    track_name,
    artist_name,
    COUNT(*) AS manual_plays
FROM playback_data
WHERE reason_start = 'clickrow'
GROUP BY track_name, artist_name
ORDER BY manual_plays DESC;