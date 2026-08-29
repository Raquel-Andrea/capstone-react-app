SELECT
    artist_name,
    SUM(track_plays) AS total_plays,
    MAX(track_plays) AS top_track_plays,
    ROUND(MAX(track_plays) / SUM(track_plays) * 100, 2) AS top_track_percentage
FROM (
    SELECT
        artist_name,
        track_name,
        COUNT(*) AS track_plays
    FROM playback_data
    GROUP BY artist_name, track_name
) AS track_counts
GROUP BY artist_name
HAVING SUM(track_plays) >= 10
   AND MAX(track_plays) / SUM(track_plays) >= 0.90
ORDER BY top_track_percentage DESC, total_plays DESC;